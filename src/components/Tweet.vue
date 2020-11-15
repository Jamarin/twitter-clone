<template>
  <div class="tweet">
    <div class="author">
      <h2 class="author-name"><router-link :to="{ name: 'profile', params: { username: username }}">{{ username }}</router-link></h2>
      <b-image
          :src="image"
          :alt="username + 'avatar'"
          ratio="300by300"
          rounded
      />
    </div>
    <div class="tweet-data">
      <div class="text">
        <p>{{ text }}</p>
      </div>
      <div class="created_at">
        <b-tooltip v-bind:label="toDate(created_at)"
                   position="is-top">
          <p>{{ fromNow(created_at) }}</p>
        </b-tooltip>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Tweet",
  props: ["username", "text", "created_at", "image"],
  methods: {
    fromNow: function (date) {
      return this.$moment(date).fromNow()
    },
    toDate: function (date) {
      return this.$moment(date).format("DD-MM-YYYY HH:mm:ss")
    }
  }
}
</script>

<style scoped>
.tweet {
  border: 1px solid red;
  padding: 1rem;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-column-gap: 1rem;
}

.author-name {
  font-weight: bolder;
  font-size: 2rem;
  text-align: center;
}

.tweet-data {
  display: grid;
  grid-template-rows: 3fr 1fr;
  margin-left: 3rem;
}

.text {
  align-self: start;
  margin-top: 2rem;
}

.created_at {
  align-self: end;
  text-align: right;
}
</style>
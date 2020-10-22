<template>
  <div class="Home">
    <div class="tile is-ancestor">
      <div class="tile is-parent is-3">
        <div class="tile is-child">
          <h2>Home</h2>
          <h3>Welcome {{ $store.getters["user/getUsername"] }}</h3>
        </div>
      </div>
      <div class="tile is-parent is-vertical">
        <NewTweet class="tile is-child"/>
        <TweetList class="tile is-child"/>
      </div>
      <div class="tile is-parent is-3">
        <div class="tile is-child">
          <button @click="logout">Logout</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TweetList from "@/components/TweetList";
import NewTweet from "@/components/NewTweet";

export default {
  name: "Home",
  components: {NewTweet, TweetList},
  methods: {
    logout: function () {
      this.$store.dispatch("user/logout")
      this.$router.push('/login');
    }
  }
}
</script>

<style scoped>
  .Home {
    margin-top: 1rem;
  }
</style>
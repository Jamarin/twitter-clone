<template>
  <div>
    <div class="tile is-ancestor">
      <div class="tile is-parent is-3">
        <div class="tile is-child">
          <h2>Home</h2>
          <h3>Welcome {{ $store.getters["user/getUsername"] }}</h3>
        </div>
      </div>
      <div class="tile is-parent">
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

export default {
  name: "Home",
  components: {TweetList},
  methods: {
    logout: function () {
      this.$store.dispatch("user/logout")
      this.$router.push('/login');
    }
  }
}
</script>

<style scoped>

</style>
<template>
  <div>
    <TheHeader/>
    <div class="Home">
      <div class="tile is-ancestor">
        <div class="tile is-parent is-3">
          <div class="tile is-child">
            <h2>Home</h2>

            <h3>Welcome
              <router-link :to="{ name: 'profile', params: { username: $store.getters['user/getUsername'] }}">
                {{ $store.getters["user/getUsername"] }}
              </router-link>
            </h3>
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
  </div>
</template>

<script>
import TweetList from "@/components/TweetList";
import NewTweet from "@/components/NewTweet";
import TheHeader from "@/components/TheHeader";

export default {
  name: "Home",
  components: {TheHeader, NewTweet, TweetList},
  methods: {

  }
}
</script>

<style scoped>
.Home {
  margin-top: 1rem;
}
</style>
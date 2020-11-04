<template>
  <div>
    <TheHeader/>

    <div class="tile is-ancestor">
      <div class="tile is-parent is-2">
        <div class="tile is-child">
          <h2>Home</h2>
          <h3>Welcome
            <router-link :to="{ name: 'profile', params: { username: $store.getters['user/getUsername'] }}">
              {{ $store.getters["user/getUsername"] }}
            </router-link>
          </h3>
        </div>
      </div>
      <div class="tile is-parent is-8" v-if="isThereAnyTweet">
        <TweetList
            class="tile is-child"
            :username="$route.params.username"
            @loadedData="checkIfThereIsAnyTweet"
        />
      </div>
      <div class="tile is-parent is-8" v-else>
        No tweets
      </div>
      <div class="tile is-parent is-2">
        <p>asdasd</p>
      </div>
    </div>
  </div>
</template>

<script>
import TweetList from "@/components/TweetList";
import TheHeader from "@/components/TheHeader";

export default {
  name: "Profile",
  data() {
    return {
      isThereAnyTweet: false,
    }
  },
  components: {TheHeader, TweetList},
  methods: {
    checkIfThereIsAnyTweet: (isThereAnyTweet) => {
      console.log(`Is there any tweet? ${isThereAnyTweet}`)
      this.isThereAnyTweet = isThereAnyTweet
    }
  }
}
</script>

<style scoped>

</style>
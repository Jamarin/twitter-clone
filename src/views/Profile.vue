<template>
  <div>
    <div class="tile is-parent is-vertical" v-show="isThereAnyTweet">
      <h2 v-if="!ownProfile" class="title has-text-centered">{{ profileUser.username }} profile</h2>
      <h2 v-else class="title has-text-centered">Your profile ({{ profileUser.username }})</h2>
      <TweetList
          class="tile is-child"
          :username="profileUser.username"
          @loadedData="checkIfThereIsAnyTweet"
          :key="forceRender"
      />
    </div>
    <div class="tile is-parent is-8" v-show="!isThereAnyTweet">
      No tweets
    </div>
  </div>
</template>

<script>
import TweetList from "@/components/TweetList"
import localApi from "@/utils/local-backend"

export default {
  name: "Profile",
  data() {
    return {
      isThereAnyTweet: false,
      profileUser: null,
      ownProfile: false,
      forceRender: 0,
    }
  },
  watch: {
    // eslint-disable-next-line no-unused-vars
    async $route(to, from) {
      let username = to.params.username
      let response = await localApi.getUserDataByUsername(username)
      this.profileUser = response.data
      this.ownProfile = this.profileUser._id === await this.$store.getters["user/getId"];
      this.forceRender++
    }
  },
  async created() {
    let username = this.$route.params.username
    let response = await localApi.getUserDataByUsername(username)
    this.profileUser = response.data
    this.ownProfile = this.profileUser._id === await this.$store.getters["user/getId"];
  },
  components: {TweetList},
  methods: {
    checkIfThereIsAnyTweet: function (isThereAnyTweet) {
      this.isThereAnyTweet = isThereAnyTweet
    }
  }
}
</script>

<style scoped>

</style>
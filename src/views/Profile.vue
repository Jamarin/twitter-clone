<template>
  <div>
    <div class="tile is-parent is-vertical" v-show="isThereAnyTweet">
      <h2 v-if="!ownProfile" class="title has-text-centered">{{ profileUser.username }} profile</h2>
      <h2 v-else class="title has-text-centered">Your profile ({{ profileUser.username }})</h2>
      <div v-if="!ownProfile">
        <button @click="follow" v-if="!isFollowing">Follow</button>
        <button @click="unfollow" v-else>Unfollow</button>
      </div>
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
import {mapGetters} from "vuex";

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
  computed: {
    ...mapGetters({
      getFollowing: 'user/getFollowing',
      getId: 'user/getId',
    }),
    isFollowing: function () {
      let following = this.getFollowing
      console.log(following)
      return following.contains(this.profileUser._id)
    }
  },
  watch: {
    // eslint-disable-next-line no-unused-vars
    async $route(to, from) {
      let username = to.params.username
      let response = await localApi.getUserDataByUsername(username)
      this.profileUser = response.data
      this.ownProfile = this.profileUser._id === await this.getId
      this.forceRender++
    }
  },
  async created() {
    let username = this.$route.params.username
    let response = await localApi.getUserDataByUsername(username)
    this.profileUser = response.data
    this.ownProfile = this.profileUser._id === await this.getId
  },
  components: {TweetList},
  methods: {
    checkIfThereIsAnyTweet: function (isThereAnyTweet) {
      this.isThereAnyTweet = isThereAnyTweet
    },
    follow: async function () {
      let response = await localApi.execFollow(this.profileUser._id)
      console.log(response)
      this.$store.commit('user/setFollowing', response.data.following)
    },
    unfollow: async function () {
      let response = await localApi.execUnfollow(this.profileUser._id)
      this.$store.commit('user/setFollowing', response.data.following)
    }
  }
}
</script>

<style scoped>

</style>
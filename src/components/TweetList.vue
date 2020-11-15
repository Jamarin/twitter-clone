<template>
  <div class="tile is-ancestor">
    <div v-for="tweet in tweets" v-bind:key="tweet.id" class="tile is-parent is-vertical">
      <Tweet
          class="tile is-child"
          :username=tweet.author.username
          :image="tweet.author.image"
          :text=tweet.text
          :created_at="tweet.created_at"
      />
    </div>
  </div>
</template>

<script>
import Tweet from "@/components/Tweet";
import localApi from '@/utils/local-backend'

export default {
  name: "TweetList",
  components: {Tweet},
  props: ["username"],
  created() {
    this.loadData(this.username)
    // setInterval(function () {
    //   this.loadData();
    // }.bind(this), 10000);
  },
  data() {
    return {
      tweets: []
    }
  },
  methods: {
    loadData: async function (username) {
      try {
        let response = (username === undefined) ? await localApi.getAllTweets() : await localApi.getTweetsByUser(username)
        this.tweets = response.data.sort((a, b) => {
          let dateA = this.$moment(a.created_at).unix()
          let dateB = this.$moment(b.created_at).unix()
          return dateB - dateA
        })
      } catch (err) {
        console.error(err)
      }
      if (this.tweets.length > 0) this.$emit('loadedData', true)
      else this.$emit('loadedData', false)
    }
  }
}
</script>

<style scoped>

</style>
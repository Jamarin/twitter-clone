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
import api from '@/utils/api-backend'

export default {
  name: "TweetList",
  components: {Tweet},
  created() {
    this.loadData();

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
    loadData: function () {
      api.listAllTweetsByUser()
          .then(res => {
            this.tweets = res.data.sort((a, b) => {
              return b.created_at - a.created_at
            })
          })
          .catch(err => console.error(err))
    }
  }
}
</script>

<style scoped>

</style>
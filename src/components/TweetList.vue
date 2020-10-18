<template>
  <div class="tile is-ancestor">
    <div v-for="tweet in tweets" v-bind:key="tweet.id" class="tile is-parent is-vertical">
      <Tweet
          class="tile is-child"
          :username=tweet.username
          :text=tweet.text
      />
    </div>
  </div>
</template>

<script>
import Tweet from "@/components/Tweet";

export default {
  name: "TweetList",
  components: {Tweet},
  data() {
    return {
      tweets: [
        {
          id: 1,
          username: 'Ueki',
          text: 'lorem ipsum dolor sit amet'
        },
        {
          id: 2,
          username: 'Ueki 2',
          text: 'lorem ipsum dolor sit amet 2'
        },
        {
          id: 3,
          username: 'Ueki 3',
          text: 'lorem ipsum dolor sit amet 3'
        },
        {
          id: 4,
          username: 'Ueki 4',
          text: 'lorem ipsum dolor sit amet 4'
        },
      ]
    }
  }
}
</script>

<style scoped>

</style>
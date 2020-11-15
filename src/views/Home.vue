<template>
  <div>
    <div class="tile is-parent is-vertical">
      <NewTweet class="tile is-child"/>
      <TweetList class="tile is-child"/>
    </div>
  </div>
</template>

<script>
import TweetList from "@/components/TweetList";
import NewTweet from "@/components/NewTweet";

export default {
  name: "Home",
  components: {NewTweet, TweetList},
  methods: {}
}
</script>

<style scoped>
</style>
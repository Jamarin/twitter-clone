<template>
  <div>
    <b-field>
      <b-input expanded placeholder="¿Qué está pasando?" v-model="tweetText" required
               validation-message="Message cannot be empty" ref="input"></b-input>
    </b-field>
    <b-button expanded @click="tweet">Twittear</b-button>
  </div>
</template>

<script>
// import api from '@/utils/api-backend'
import localApi from '@/utils/local-backend'

export default {
  name: "NewTweet",
  data() {
    return {
      tweetText: '',
    }
  },
  methods: {
    tweet: async function () {
      if (!this.tweetText.length > 0) {
        this.$refs.input.$el.childNodes[0].focus()
        return;
      }

      try {
        await localApi.createTweet({
          text: this.tweetText,
          author: this.$store.getters["user/getId"]
        })
        this.tweetText = ''
        window.event.$emit('reloadTweets');
      } catch (err) {
        console.error(err)
      }
    }
  }
}
</script>

<style scoped>
</style>
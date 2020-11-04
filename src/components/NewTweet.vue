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
import api from '@/utils/api-backend'

export default {
  name: "NewTweet",
  data() {
    return {
      tweetText: '',
    }
  },
  methods: {
    tweet: function () {
      if (!this.tweetText.length > 0) {
        this.$refs.input.$el.childNodes[0].focus()
        return;
      }
      api.createTweet({
        text: this.tweetText,
        author: this.$store.getters["user/getId"]
      })
          .then(result => {
            this.tweetText = ''
            this.$buefy.notification.open({message: result.data, type: 'is-info'})
          })
          .catch(err => {
            console.error(err)
          })
      console.log(this.tweetText)
    }
  }
}
</script>

<style scoped>
</style>
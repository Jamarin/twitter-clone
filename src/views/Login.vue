<template>
  <div class="Login">
    <form @submit="login">
      <b-field label="Email" :label-position="labelPosition">
        <b-input type="email" maxlength="30" required v-model="email"></b-input>
      </b-field>
      <b-field label="Password" :label-position="labelPosition">
        <b-input type="password" maxlength="30" required v-model="password"></b-input>
      </b-field>
      <b-field>
        <b-button @click="login">Login</b-button>
      </b-field>
    </form>
  </div>
</template>

<script>
import localApi from '@/utils/local-backend'

export default {
  name: "Login",
  data() {
    return {
      email: '',
      password: '',
      labelPosition: 'on-border',
    }
  },
  methods: {
    login: async function () {
      console.log(`Try to login with email: ${this.email} and password: ${this.password}.`)
      try {
        let response = await localApi.loginUser(this.email, this.password)
        if(response.status === 200) {
          await this.$store.dispatch('user/login', {
            username: response.data.username,
            email: response.data.email,
            role: response.data.role,
            id: response.data.id,
            token: response.data.token,
          })
          await this.$router.push('/')
        } else {
          this.$buefy.notification.open({message: "Error, user cannot login", type: "is-danger"})
        }
      } catch(err) {
        console.error(err)
        this.$buefy.notification.open({message: "Error, user cannot login", type: "is-danger"})
      }
    }
  }
}
</script>

<style scoped>
  .Login {
    margin-top: 20px;
  }
</style>
<template>
<div>
  <b-field label="Email">
    <b-input type="email" maxlength="30" v-model="email"></b-input>
  </b-field>
  <b-field label="Password">
    <b-input type="password" maxlength="30" v-model="password"></b-input>
  </b-field>
  <b-field>
    <b-button @click="login">Login</b-button>
  </b-field>
</div>
</template>

<script>
import api from '@/utils/api-backend'

export default {
  name: "Login",
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    login: function () {
      api.loginUser(this.email, this.password)
      .then(response => {
        if(response.status === 200) {
          this.$store.dispatch('user/login', {
            username: response.data.username,
            email: response.data.email,
            role: response.data.role
          })
          this.$router.push('/')
        } else {
          this.$buefy.notification.open({message: "Error, user cannot login", type: 'is-danger'})
        }
      })
      .catch(err => {
        console.error(err)
        this.$buefy.notification.open({message: "Error, user cannot login", type: 'is-danger'})
      });

      // let tryLoginUser = this.users.filter(user => (user.email === this.email && user.password === this.password));
      // if(tryLoginUser.length > 0 && tryLoginUser[0] !== undefined) {
      //   this.$store.dispatch('user/login', {
      //     username: tryLoginUser.username,
      //     email: tryLoginUser.email,
      //     role: tryLoginUser.role
      //   })
      //   this.$router.push('/');
      // } else {
      //   this.$buefy.notification.open({message: "Error, user cannot login", type: 'is-danger'})
      // }


    }
  }
}
</script>

<style scoped>

</style>
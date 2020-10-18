<template>
<div>
  <div v-if="errors.length > 0">
    <b-message type="is-danger" v-for="error in errors" v-bind:key="error">
      <p>{{ error }}</p>
    </b-message>
  </div>
  <b-field label="Email">
    <b-input type="email" maxlength="30" v-model="userData.email"></b-input>
  </b-field>
  <b-field label="Password">
    <b-input type="password" maxlength="30" v-model="userData.password"></b-input>
  </b-field>
  <b-field label="Username">
    <b-input type="text" maxlength="30" v-model="userData.username"></b-input>
  </b-field>
  <b-field label="Avatar">
    <b-input type="text" maxlength="255" v-model="userData.image"></b-input>
  </b-field>
  <b-field>
    <b-button @click="register">Register</b-button>
  </b-field>
</div>
</template>

<script>
import api from '@/utils/api-backend'

export default {
  name: "Register",
  data() {
    return {
      userData: {
        email: '',
        password: '',
        image: '',
        username: ''
      },
      errors: [],
    }
  },
  methods: {
    validateForm: function () {
      let valid = true;

      if(!this.userData.email) {
        this.errors.push("Email cannot be empty")
        valid = false;
      }
      if(!this.userData.password) {
        this.errors.push("Password cannot be empty")
        valid = false;
      }
      if(!this.userData.username) {
        this.errors.push("Username cannot be empty")
        valid = false;
      }
      if(!this.userData.image) {
        this.errors.push("Image cannot be empty")
        valid = false;
      }

      return valid;
    },
    register: function () {
      this.errors = []
      if(this.validateForm()) {
        api.registerUser(this.userData)
            .then(registeredUser => {
              console.log(registeredUser)
            }).catch(err => {
          console.error(err)
        })
      }
    }
  }
}
</script>

<style scoped>

</style>
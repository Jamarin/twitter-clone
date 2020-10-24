<template>
  <b-navbar>
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ name: 'home' }">
        <img
            :src="logo"
            alt="Lightweight UI components for Vue.js based on Bulma"
        >
      </b-navbar-item>
    </template>
    <template slot="start">
      <b-navbar-item tag="router-link" :to="{name: 'home' }">
        Home
      </b-navbar-item>
      <b-navbar-item tag="router-link"
                     :to="{name: 'profile', params: { username: $store.getters['user/getUsername'] }}">
        Profile
      </b-navbar-item>
      <b-navbar-item tag="router-link" :to="{name: 'messages'}">
        Messages
      </b-navbar-item>
    </template>

    <template slot="end">
      <b-navbar-item @click="logout">
        <a class="button is-primary">
          <strong>Logout</strong>
        </a>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
import logo from "@/assets/twitter-logo.png"

export default {
  name: "TheHeader",
  data() {
    return {
      logo: logo
    }
  },
  methods: {
    logout: function () {
      this.$store.dispatch("user/logout")
      this.$router.push('/login');
    }
  }
}
</script>

<style scoped>

</style>
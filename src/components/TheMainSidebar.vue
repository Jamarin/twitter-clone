<template>
  <div class="tile is-parent is-2">
    <div class="tile is-child has-text-centered">
      <h2>Home</h2>
      <h3>Welcome
        <router-link :to="{ name: 'profile', params: { username: $store.getters['user/getUsername'] }}">
          {{ $store.getters["user/getUsername"] }}
        </router-link>
      </h3>
    </div>
  </div>
</template>

<script>
export default {
name: "TheMainSidebar"
}
</script>

<style scoped>

</style>
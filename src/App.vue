<template>
  <div>
  <TheHeader v-if="this.$store.getters['user/isAuth']"/>
    <div class="tile is-ancestor mt-2">
      <TheMainSidebar v-if="this.$store.getters['user/isAuth']"/>
      <router-view class="container is-widescreen"></router-view>
      <TheRightSidebar v-if="this.$store.getters['user/isAuth']"/>
    </div>
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader";
import TheRightSidebar from "@/components/TheRightSidebar";
import TheMainSidebar from "@/components/TheMainSidebar";
export default {
  name: 'App',
  components: {
    TheMainSidebar,
    TheRightSidebar,
    TheHeader
  },
}
</script>

<style>
  .container {
    margin-top: 2rem;
  }
</style>

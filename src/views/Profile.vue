<template>
  <div>
    <TheHeader/>

    <div class="tile is-ancestor">
      <div class="tile is-parent is-2">
        <div class="tile is-child">
          <h2>Home</h2>
          <h3>Welcome
            <router-link :to="{ name: 'profile', params: { username: $store.getters['user/getUsername'] }}">
              {{ $store.getters["user/getUsername"] }}
            </router-link>
          </h3>
        </div>
      </div>
      <div class="tile is-parent is-8">
        <TweetList
            class="tile is-child"
            :username="$route.params.username"
        />
      </div>
      <div class="tile is-parent is-2">
        <p>asdasd</p>
      </div>
    </div>
  </div>
</template>

<script>
import TweetList from "@/components/TweetList";
import TheHeader from "@/components/TheHeader";

export default {
  name: "Profile",
  components: {TheHeader, TweetList}
}
</script>

<style scoped>

</style>
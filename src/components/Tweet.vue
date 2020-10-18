<template>
  <div class="tweet">
    <h2>{{ username }}</h2>
    <p>{{ text }}</p>
  </div>
</template>

<script>
export default {
  name: "Tweet",
  props: ["username", "text"]
}
</script>

<style scoped>
  .tweet {
    border: 1px solid red;
  }
</style>
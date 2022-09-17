<script>
export default {
  props: ["page", "title", "textColor"],
};
</script>

<template>
  <router-link :to="page">
    <button class="button-navigation">{{ title }}</button>
  </router-link>
</template>

<style scoped>
a {
  text-decoration: none;
}

.button-navigation {
  border: none;
  outline: none;
  background: transparent;
  display: flex;
  align-items: center;
  font-size: 1.1em;
  cursor: pointer;
  justify-content: space-between;
}
</style>

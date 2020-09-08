<template>
  <div class="theme-container">
    <component class="main-content" :is="layout" />
  </div>
</template>

<script>
import Home from "./layouts/Home.vue";

export default {
  name: "layout",
  components: {
    Home,
  },
  computed: {
    layout() {
      const { path } = this.$page;
      if (path === "/") return "Home";
      else return "Post";
    },
  },
};
</script>
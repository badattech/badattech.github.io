<template>
  <div class="theme-container">
    <component class="main-content" :is="layout" />
  </div>
</template>

<script>
import Home from "./layouts/Home.vue";
import Post from "./layouts/Post.vue";

export default {
  name: "layout",
  components: {
    Home,
    Post
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
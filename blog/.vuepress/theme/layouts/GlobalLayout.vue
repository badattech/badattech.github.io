<template>
  <main>
    <Header :key="componentKey"/>
    <div class="content-wrapper">
      <component :is="layout" />
    </div>
    <Footer />
  </main>
</template>

<script>
import Header from "@theme/components/Header.vue";
import Footer from "@theme/components/Footer.vue";

export default {
  components: {
    Header,
    Footer,
  },
    data() {
    return {
      componentKey: 0,
    };
  },
  computed: {
    layout() {
      this.componentKey += 1
      if (this.$page.path) {
        if (this.$frontmatter.layout) {
          // You can also check whether layout exists first as the default global layout does.
          return this.$frontmatter.layout;
        }
        return "Layout";
      }
      return "NotFound";
    },
  },
};
</script>

<style lang="stylus" scoped>
main {
  overflow: hidden;
}

.content-wrapper {
  padding: 2em 1em 5em;
  max-width: 50em;
  margin: 0 auto;
}
</style>
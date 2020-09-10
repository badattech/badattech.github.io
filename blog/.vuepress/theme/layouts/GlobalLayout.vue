<template>
  <main>
    <Header />
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
  computed: {
    layout() {
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
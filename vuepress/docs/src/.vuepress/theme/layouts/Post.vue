<template>
  <main>
    <CanvasHeader />
    <article>
      <Content />
    </article>
  </main>
</template>

<script>
import CanvasHeader from "../components/CanvasHeader.vue";

export default {
  name: "post",
  components: {
    CanvasHeader,
  },
};
</script>
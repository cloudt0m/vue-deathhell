<template>
  <div>
    <h1>test</h1>
    <h3>param by router: {{ $route.params.userId }}</h3>
    <h3>by pass data when created(): {{ testId }}</h3>
    <!-- <box
      :title="title"
      :footer="footer"
    ></box> -->

    <!-- v-bind for multiple props -->
    <box v-bind="box">this is slot content</box>
  </div>
</template>

<script>
import Box from "@/components/Box";

export default {
  data() {
    return {
      testId: 0,
      title: "test",
      footer: "i'm footer",
      box: {
        title: "test",
        footer: "i'm footer"
      }
    };
  },
  components: {
    Box,
  },
  created() {
    this.testId = this.$route.params.userId;
  },
  // computed: {
  //   testId() {
  //     return 0;
  //   },
  // },
};
</script>

<style lang="scss" scoped>
</style>
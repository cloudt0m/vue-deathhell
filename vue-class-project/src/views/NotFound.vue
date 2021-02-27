<template>
  <div>
    <h1>Page Not Found</h1>
    <button @click="backToHome">Back to Home</button>
  </div>
</template>

<script>
export default {
  methods: {
    backToHome() {
      // window.location.href="/";
      this.$router.push("/");
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
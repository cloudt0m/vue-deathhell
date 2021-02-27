<template>
  <div class="box">
    <header>{{ title }}</header>
    <slot></slot>
    <footer>{{ footer }}</footer>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      default: "",
      type: String,
    },
    footer: {
      default: "",
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.box {
  width: 200px;
  height: 200px;
  background: pink;
}
header {
  font-size: 20px;
  font-weight: bold;
}
footer {
  font-size: 14px;
}
</style>
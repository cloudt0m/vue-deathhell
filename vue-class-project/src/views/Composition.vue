<template>
  <div class="container">
    <div class="text-center">
      <input
        type="text"
        v-model="name"
      >
    </div>
    <h1 class="text-center">{{ name }}</h1>
    <div class="text-center">x: {{ position.x }}, y: {{ position.y }}</div>
    <div class="text-center">
      <button
        class="btn btn-info"
        @click="addCount"
      >Add</button>
      {{ count }}
    </div>
    <div class="text-center">{{ computedString }}</div>
  </div>
</template>

<script>
import { ref, reactive, computed, onMounted } from "vue";

export default {
  setup() {
    const name = ref("John");
    const position = reactive({
      x: 0,
      y: 8,
    });
    // reactive variable need to be an object
    const count = ref(0);

    const computedString = computed(() => {
      return name.value + "!";
    });

    function addCount() {
      count.value++;
      // this.count++ also works

      position.y++;
      // reactive variable not need .value
    }

    onMounted(() => {
      console.log('mounted');
      // option api: mounted() {}
    });

    return {
      name,
      position,
      count,
      addCount,
      computedString,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
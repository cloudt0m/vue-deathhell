<template>
  <div class="home text-center container">
    <h1>Home</h1>
    <slider v-bind="sliderGroup1"></slider>
    <slider v-bind="sliderGroup2"></slider>
  </div>
</template>

<script>
// @ is an alias to /src
import Slider from "@/components/Slider";

export default {
  name: "Home",
  data() {
    return {
      sliderGroup1: {
        sliderImages: ["01.jpg", "02.jpg", "03.jpg", "05.jpg"],
        time: 5000
      },
      sliderGroup2: {
        sliderImages: ["dog-01.jpg", "dog-02.jpg", "dog-03.jpg"],
        time: 3000
      },
    };
  },
  components: {
    Slider,
  },
};
</script>

<style lang="scss" scoped>
.fas {
  font-size: 3rem;
}
</style>

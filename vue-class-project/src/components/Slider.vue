<template>
  <div
    class="slider-wrapper position-relative overflow-hidden"
    ref="sliderWrapper"
  >
    <ul
      class="slider-images list-unstyled position-absolute d-flex"
      :style="{ width: slideWidth * slidesCount + 'px', left: 0 - slideWidth * slideIndex + 'px' }"
    >
      <!-- src path is under /public -->
      <li
        v-for="(image, index) in sliderImages"
        :key="index"
      >
        <img
          class="cover-fit"
          :src="'/images/' + image"
          alt=""
        >
      </li>

    </ul>
    <ul class="list-unstyled position-absolute slider-dots d-flex justify-content-center">
      <li
        v-for="(dot, index) in sliderImages"
        :key="index"
        @mouseenter="slideTo(index)"
        :class="{ active: index == slideIndex }"
      ></li>
    </ul>
    <a
      role="button"
      class="position-absolute slider-control slider-control-prev d-flex justify-content-center align-items-center"
      @click="slideToPrev"
    ><i class="fas fa-chevron-left"></i></a>
    <a
      role="button"
      class="position-absolute slider-control slider-control-next d-flex justify-content-center align-items-center"
      @click="slideToNext"
    ><i class="fas fa-chevron-right"></i></a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slideWidth: 0,
      slideIndex: 0,
      timer: null,
    };
  },
  props: {
    sliderImages: {
      default: () => [],
      type: Array
    },
    time: {
      default: 3000,
      type: Number
    }
  },
  computed: {
    slidesCount() {
      return this.sliderImages.length;
    },
  },
  methods: {
    slideTo(index) {
      this.slideIndex = index;
    },
    slideToPrev() {
      this.slideIndex--;
      if (this.slideIndex < 0) {
        this.slideIndex = this.slidesCount - 1;
      }
    },
    slideToNext() {
      this.slideIndex++;
      if (this.slideIndex >= this.slidesCount) {
        this.slideIndex = 0;
      }
    },
    onResize() {
      this.slideWidth = this.$refs.sliderWrapper.clientWidth;
    },
  },
  mounted() {
    this.onResize(); // callback
    window.addEventListener("resize", this.onResize); // pass function into addEventListener
    this.timer = setInterval(() => {
      this.slideToNext();
    }, this.time);
  },
  // window related event listener and timer needs to be removed when unmounted
  unmounted() {
    window.removeEventListener("resize", this.onResize);
    clearInterval(this.timer)
  },
};
</script>

<style lang="scss" scoped>
$slider-height: 300px;

.cover-fit {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.slider {
  &-wrapper {
    height: $slider-height;
  }
  &-images {
    transition: 0.5s ease-out;
    li {
      flex: 1 0 0;
      height: $slider-height;
    }
  }
  &-dots {
    bottom: 0;
    width: 100%;
    li {
      width: 24px;
      height: 6px;
      border: 1px solid #fff;
      margin: 0 4px;
      transition: 0.3s;
      cursor: pointer;
      &:hover {
        background: #fff;
      }
      &.active {
        background: #fff;
      }
    }
  }
  &-control {
    color: #fff;
    height: 100%;
    width: 48px;
    opacity: 0.75;
    &-next {
      right: 0;
    }
    i {
      font-size: 24px;
    }
    &:hover {
      text-decoration: none;
      opacity: 1;
    }
  }
}
</style>
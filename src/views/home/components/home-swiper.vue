<template>
  <swiper
    class="swiper"
    :space-between="8"
    slides-per-view="auto"
    :observer="true"
    :loop="true"
    :auto-play="ture"
    @swiper="onSwiper"
    @slide-change="onSlideChange"
  >
    <swiper-slide class="slide" v-for="index in 3" :key="index">
        <img class="level-main" src="../../../assets/images/ic-banner-1.jpg" />
    </swiper-slide>
  </swiper>
</template>

<script setup>
import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/vue";
import { ref, reactive, computed, onMounted, watch } from "vue";

const onSwiper = (swiper) => {
  console.log("11111");
};
</script>

<style scoped lang="less">
.swiper {
  height: 262px;
  width: 100%;
  padding-left: 30%;
  padding-right: 30%;
  margin-top: 10px;

  .slide {
    border-radius: 6px;
    height: 100%;
    width: 100%;

    .level-main {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
}

@media (min-width: 1150px) {

}

@media (min-width: 1120px) {

}
</style>

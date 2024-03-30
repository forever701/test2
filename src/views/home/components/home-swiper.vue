<template>
  <el-row>
    <el-col>
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
        <swiper-slide class="slide">
          <img
            class="level-main"
            src="../../../assets/images/ic-banner-1.jpg"
          />
        </swiper-slide>
        <swiper-slide class="slide">
          <img
            class="level-main"
            src="../../../assets/images/ic-banner-2.jpg"
          />
        </swiper-slide>
        <swiper-slide class="slide">
          <img
            class="level-main"
            src="../../../assets/images/ic-banner-3.jpg"
          />
        </swiper-slide>
      </swiper>
    </el-col>
  </el-row>
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
    }
  }

  @media (max-width: 1020px) {
    padding-left: 10%;
    padding-right: 10%;
  }

  @media (max-width: 765px) {
    padding-left: 0%;
    padding-right: 0%;
  }
}
</style>

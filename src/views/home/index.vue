<template>
  <!-- 首页部分 -->
  <div class="container">
    <!-- 轮播图部分 -->
    <div class="wrapper">
      <!-- 下载APK部分 -->
      <HomeDownloadAPP/>
      <!-- 下载直播部分 - 标题 -->
      <!-- 下载直播部分 - 内容 -->
      <!-- 下载直播部分 - 图片 -->
      <!-- 热点新闻 - 标题 -->
      <!-- 热点新闻 - 内容 -->
      <!-- 体验最新直播的极致 - 标题 -->
      <!-- 体验最新直播的极致 - 内容 -->
      <!-- 体验最新直播的极致 - 图片 -->
      <!-- 有何吸引力？ - 标题 -->
      <!-- 有何吸引力？ - 内容 - 注意分段（子标题） -->
      <!-- 有何吸引力？ - 图片 -->
      <!-- 为什么要选择我们的直播？ - 标题 -->
      <!-- 为什么要选择我们的直播？ - 内容 - 注意分段（子标题） -->
      <!-- 为什么要选择我们的直播？ - 图片 -->
      <!-- 如何使用 - 详细说明 - 标题 -->
      <!-- 如何使用 - 详细说明 - 内容 - 注意分段（子标题） -->
      <!-- 如何使用 - 详细说明 - 图片 -->
      <!-- 立即下载体验！ - 标题 -->
      <!-- 立即下载体验！ - 内容 -->
      <!-- 关于常见问题 -->
      <HomeCollapse />
    </div>
  </div>
</template>

<script>
import HomeCollapse from "./components/home-collapse";
import HomeDownloadAPP from "./components/home-download-app";
export default {
  name: "Home",
  components: {
    HomeCollapse,
    HomeDownloadAPP,
  },
};
</script>

<style scoped lang="less">
.container {
  min-height: 600px;
  .wrapper {
    max-width: 1120px;
    margin: 0 auto;
  }
}
</style>

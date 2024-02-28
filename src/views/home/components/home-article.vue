<template>
  <div class="article" v-if="dataList && dataList.length" v-for="(item, index) in dataList" :key="index">
    <!-- 文章标题 -->
    <div class="title">
      {{ item.title }}
    </div>
    <!-- 文章内容 -->
    <div class="content">
      {{ item.content }}
    </div>
    <!-- 显示的图片 -->
    <div class="images">
      
    </div>
  </div>
</template>

<script>
export default {
    name: '',
    props: {
      dataList: {
        type: Array,
        default: () => []
      }
    }
}
</script>

<style scoped>

</style>
<template>
  <div
    class="article"
    v-if="dataList && dataList.length"
    v-for="(item, index) in dataList"
    :key="index"
  >
    <!-- 文章标题 -->
    <div
      class="title"
      :style="{ 'text-align': item.titleCenter ? 'center' : 'left' }"
    >
      {{ item.title }}
    </div>
    <!-- 文章内容 -->
    <div class="content" v-html="item.content"></div>
    <!-- 显示的图片 -->
    <div
      v-if="item.images && item.images.length"
      :class="item.images.length == 2 ? 'images-two' : 'images-one'">
      <img v-for="images in item.images" :src="getImageUrl(images)" class="images-style" />
    </div>
    <!-- <div class="images" v-if="item.images && item.images.length == 2">
      <el-image v-for="images in item.images" :src="images" :fit="cover" />
    </div> -->
  </div>
</template>

<script>
export default {
  name: "HomeArticle",
  props: {
    dataList: {
      type: Array,
      default: () => [],
    },
  },
  setup() {
    const getImageUrl = (icon) => {
      return require(`@/assets/images/${icon}.jpg`);
    };

    return {
      getImageUrl
    }
  },
};
</script>

<style scoped lang="less">
// 文章整体结构
.article {
  margin-top: 40px;
  //标题
  .title {
    color: #000;
    text-align: center;
    font-family: Inter;
    font-size: 42px;
    font-style: normal;
    font-weight: 700;
  }

  //内容
  .content {
    margin-top: 20px;
    color: #000;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 30px; /* 187.5% */
  }
  //图片
  // 一张图片的情况
  .images-one {
    margin-top: 40px;
    height: 600px;
    width: 100%;
    .images-style {
      .hoverShadow ();
    }
  }

  // 两张图片的情况
  .images-two {
    margin-top: 40px;
    height: 295px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 10px;
    .images-style {
      .hoverShadow ();
    }
    
  }
}
</style>

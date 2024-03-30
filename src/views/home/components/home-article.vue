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
      v-if="item.images && item.images.length" class="images-one"
    >
    <el-row :gutter="10">
    <el-col v-for="images in item.images" :span="24/item.images.length" :sx="24" :sm="24" :md="24/item.images.length" :lg="24/item.images.length" :xl="24/item.images.length" ><img
        :src="getImageUrl(images)"
        class="images-style"
      /></el-col>
    </el-row>
      
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
      getImageUrl,
    };
  },
};
</script>

<style scoped lang="less">
// 文章整体结构
.article {
  margin-top: 40px;
  //标题
  .title {
    color: #222;
    text-align: center;
    font-family: Inter;
    font-size: 42px;
    font-style: normal;
    font-weight: 700;
    padding: 10px;
    font-family: "Fira Sans", Sans-serif;
  }

  //内容
  .content {
    margin-top: 20px;
    color: #444;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 30px; /* 187.5% */
    padding: 10px;
    font-family: "Fira Sans", Sans-serif;
  }
  //图片
  .images-one {
    margin-top: 40px;
    display: flex;
    width: 100%;
    object-fit: cover;
    .images-style {
      .hoverShadow ();
    }
  }


}
</style>

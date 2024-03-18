<template>
  <div class="download">
    <el-row class="row-bg" :gutter="10">
      <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="row-item"
        ><div @click="download(0)" class="download-button">
          TẢI XUỐNG APK
        </div></el-col
      >
      <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="row-item"
        ><div @click="download(1)" class="download-button">
          TẢI XUỐNG IOS
        </div></el-col
      >
    </el-row>
  </div>
</template>

<script>
import { ElMessage } from 'element-plus'
export default {
  name: "HomeDownloadAPP",
  setup() {
    const download = (type) => {
      ElMessage({
        message: 0 == type ? "下载APK成功" : "下载IOS成功",
        type: "success",
      });
    };
    return {
        download
    }
  },
};
</script>

<style scoped lang="less">
// 下载布局
.download {
  // 下载行布局
  .row-bg {
    // 下载按钮布局
    .row-item {
      height: 70px;
      margin-top: 20px;
      margin-bottom: 20px;
      // 按钮
      .download-button {
        display: flex;
        width: 240px;
        height: 70px;
        margin: 0 auto;
        justify-content: center;
        align-items: center;
        flex-shrink: 0;
        border-radius: 10px;
        background: linear-gradient(90deg, #dc5f94 0%, #6a17af 100%);
        box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.35);
        color: #fff;
        text-align: center;
        font-family: Inter;
        font-size: 18px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        text-transform: uppercase;
        cursor: pointer;
        .hoverButtonScale();
      }
    }
  }
}
</style>

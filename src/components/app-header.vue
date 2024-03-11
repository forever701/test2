<template>
  <div class="header">
    <div class="top">
      <!-- logo -->
      <img class="logo" src="../assets/images/ic-logo.png" alt="" />
      <!-- 右边文字tab -->
      <ul class="tab">
        <li><RouterLink to="/">HOME</RouterLink></li>
        <li><RouterLink to="/about">ABOUT</RouterLink></li>
      </ul>
      <img
        class="more"
        @click="drawer = true"
        src="../assets/images/ic-header-more.png"
        alt=""
      />
    </div>


    <div class="bottom">
    <el-drawer
      class="drawer"
      v-model="drawer"
      :with-header="false"
      direction="ttb"
      :before-close="handleClose"
    >
      <ul class="drawer-ui">
        <li><RouterLink to="/">HOME</RouterLink></li>
        <li><RouterLink to="/about">ABOUT</RouterLink></li>
      </ul>
    </el-drawer>
  </div>

  </div>
  
</template>

<script setup name="AppHeader">
import { ref } from "vue";

const drawer = ref(false);
</script>

<style scoped lang="less">
// 顶部区域
// 顶部区域
.header {
  position: relative;
  .top {
    display: flex;
    height: 80px;
    min-width: none;
    align-items: center;
    justify-content: space-between;
    background: #e33e84;
    padding-left: 155px;
    padding-right: 155px;

    // logo部分
    .logo {
      width: 70px;
      height: 70px;
    }
    .tab {
      display: flex;
      height: 100%;
      margin: 0;
      padding: 0;
      align-items: center;
      @media (max-width: 1280px) {
        display: none;
      }
      li {
        margin: auto 0 auto 30px;
        height: 80px;
      }
      a {
        line-height: 80px;
        color: black;
        font-size: 17px;
        &:hover {
          border-bottom: 1px solid white;
          padding-bottom: 8px;
          color: white;
        }
      }
    }
    .more {
      width: 20px;
      height: 16px;
      display: none;
    }

    @media (max-width: 1280px) {
      .tab {
        display: none;
      }
      .more {
        display: block;
      }
    }
  }
  /deep/ .el-drawer {
    margin-top: 85px !important;
  }

}
</style>

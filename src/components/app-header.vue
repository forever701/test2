<template>
  <div class="header">
    <!-- logo -->
    <img class="logo" src="../assets/images/ic-logo.png" alt="" />
    <!-- 右边文字tab -->
    <ul class="tab">
      <li><RouterLink to="/">HOME</RouterLink></li>
      <li><RouterLink to="/about">ABOUT</RouterLink></li>
    </ul>
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
  display: flex;
  height: 80px;
  min-width: none;
  align-items: center;
  justify-content: space-between;
  background: #e33e84;
  padding-left: 348px;
  padding-right: 348px;

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
    li {
      margin: auto 0 auto 30px;
      height: 80px;
    }
    a {
      line-height: 80px;
      color: black;
      font-size: 17px;
      &:hover {
        border-bottom: 3px solid white;
        padding-bottom: 8px;
        color: white;
      }
    }
  }

  .loopHeader(@index) when(@index <= length(@mediaVariables)) {
    @media (max-width: extract(@mediaVariables, @index)) {
      padding-left: extract(@paddingVariables, @index);
      padding-right: extract(@paddingVariables, @index);
    }
    .loopHeader(@index + 1);
  }

  .loopHeader(1)
}
</style>

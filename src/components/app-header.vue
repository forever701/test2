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
@mediaVariables: 1920px, 1900px, 1880px, 1860px, 1840px, 1820px, 1800px, 1780px,
  1760px, 1740px, 1720px, 1700px, 1680px, 1660px, 1640px, 1620px, 1600px, 1580px,
  1560px, 1540px, 1520px, 1500px, 1480px, 1460px, 1440px, 1420px, 1400px, 1380px,
  1360px, 1340px, 1320px;
@paddingVariables: 345px, 335px, 325px, 315px, 305px, 295px, 285px, 275px, 265px,
  255px, 245px, 235px, 225px, 215px, 205px, 195px, 185px, 175px, 165px, 155px,
  145px, 135px, 125px, 115px, 105px, 95px, 85px, 75px, 65px, 55px, 45px;

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

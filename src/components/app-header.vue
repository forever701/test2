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

<script>
export default {
  name: "AppHeader",
};
</script>

<style scoped lang="less">
// 顶部区域
// 顶部区域
.header {
  display: flex;
  height: 80px;
  min-width: none;
  align-items: center;
  justify-content: space-between;
  background: #e33e84;
  padding-left: 155px;
  padding-right: 155px;
  @media (max-width: 750px) {
    padding-left: 70px;
    padding-right: 70px;
  }
  @media (max-width: 750px) {
    padding-left: 70px;
    padding-right: 70px;
  }
  @media (max-width: 750px) {
    padding-left: 70px;
    padding-right: 70px;
  }
  @media (max-width: 750px) {
    padding-left: 70px;
    padding-right: 70px;
  }
  @media (max-width: 750px) {
    padding-left: 70px;
    padding-right: 70px;
  }
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
        border-bottom: 1px solid white;
        padding-bottom: 8px;
        color: white;
      }
    }
  }
}
</style>

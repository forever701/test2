<template>
  <div class="footer">
    <h5>Copyright © 2024 HOT51 - All Rights Reserved.</h5>
    <h6><a href="javascript:;">Privacy Policy</a></h6>
  </div>
</template>

<script>
export default {
  name: "AppFooter",
};
</script>

<style scoped lang="less">
// 底部区域
.footer {
    width: 100%;
    height: 52px;
    background-color: red;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h5 {
      margin-left: 155px;
    }
    h6 {
      margin-right: 155px;
    }
  }

  // 右下角悬浮按钮
  .rightBottonButton {
    position: absolute;
    width: 40px;
    height: 40px;
    bottom: 18px;
    right: 18px;
  }

</style>

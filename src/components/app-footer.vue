<template>
  <div class="footer ellipsis">
    <h5>Copyright © 2024 Dâu Tây - All Rights Reserved.</h5>

    <div class="middle">
      <h6><a href="javascript:;">Privacy Policy</a></h6>
      <h5>Copyright © 2024 Dâu Tây - All Rights Reserved.</h5>
    </div>

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
  margin-top: 40px;
  width: 100%;
  height: 60px;
  background: #e33e84;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  font-family: Fira Sans;
  color: black;

  h6 a {
    color: black;
    
  }

  .middle {
    align-self: center;
    margin: 0 auto;
    text-align: center;
    display: none;
    h5 {
      padding: 0;
      margin: 0;
    }

    h6 {
      padding: 0;
      margin: 0;
    }
  }



  // h5 {
  //   font-size: 20px;
  // }
  // h6 {
  //   font-size: 14px;
  // }

  .loopHeader(@index) when(@index <= length(@mediaVariables)) {
    @media (max-width: extract(@mediaVariables, @index)) {
      padding-left: extract(@paddingVariables, @index);
      padding-right: extract(@paddingVariables, @index);
    }
    .loopHeader(@index + 1);

    @media (max-width: 960px) {
    }
  }

  .loopHeader(1);


  @media (max-width: 960px) {
    .middle {
      display: inline;
    }
    >h5, >h6 {
      display: none;
    }
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

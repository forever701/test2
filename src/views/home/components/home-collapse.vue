<template>
  <!-- 首页的折叠面板 - 手风琴组件 -->
  <div class="collapse">
    <div class="title">
      {{ title }}
    </div>
    <div class="tab">
      <el-collapse v-model="activeName" accordion>
        <el-collapse-item v-for="(item, index) in dataLit" :name="index">
          <template #title>
            <div class="collapse-title">
              <img src="../../../assets/images/ic-plus.png" alt="" srcset="" />
              <img
                src="../../../assets/images/ic-plus-white.png"
                alt=""
                srcset=""
              />
              <div class="ellipsis">
                {{ item.title }}
              </div>
              <img
                src="../../../assets/images/ic-arrow-right-black.png"
                alt=""
                srcset=""
              />
            </div>
          </template>
          <div class="content">
            {{ item.content }}
          </div>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "HomeCollapse",
  setup() {
    // 标题
    const title = ref("Những câu hỏi thường gặp nhất về XX");
    // 数据列表
    const dataLit = ref([
      {
        title: "Dâu Tây App là gì?",
        content:
          "Dâu Tây App là một ứng dụng di động phổ biến tại Việt Nam, cung cấp thông tin về những địa điểm hot, sự kiện, và hoạt động giải trí hàng ngày trong cả nước.",
      },
      {
        title: "Làm thế nào để tải Dâu Tây App?",
        content:
          "Bạn có thể tải Dâu Tây App từ cửa hàng ứng dụng trên điện thoại của mình, chẳng hạn như App Store cho người dùng iOS hoặc Google Play cho người dùng Android.",
      },
      {
        title:
          "Dâu Tây có tính năng nổi bật nào giúp người dùng tìm kiếm thông tin dễ dàng?",
        content:
          "Có, Dâu Tây App tích hợp một hệ thống tìm kiếm thông minh, giúp người dùng dễ dàng tìm thấy những địa điểm và sự kiện hot theo đúng sở thích của họ.",
      },
      {
        title: "Làm thế nào để đăng ký tài khoản trên Dâu Tây App?",
        content:
          "Để đăng ký, bạn chỉ cần nhập thông tin cơ bản như email và mật khẩu, sau đó làm theo các bước hướng dẫn trên ứng dụng để hoàn tất quá trình đăng ký.",
      },
      {
        title:
          "Dâu Tây có tính năng chia sẻ thông tin về sự kiện hay địa điểm với bạn bè không?",
        content:
          "Có, Dâu Tây App cho phép người dùng chia sẻ thông tin về sự kiện và địa điểm qua các mạng xã hội hoặc tin nhắn trực tiếp với bạn bè.",
      },
      {
        title:
          "Làm thế nào để đề xuất một sự kiện mới hoặc địa điểm hot cho Dâu Tây?",
        content:
          "Bạn có thể đề xuất sự kiện hoặc địa điểm mới bằng cách sử dụng tính năng đặc biệt trên ứng dụng, thường được đặt ở mục “Đề xuất sự kiện” hoặc tương tự.",
      },
    ]);

    return {
      title,
      dataLit,
    };
  },
};
</script>

<style scoped lang="less">
.collapse {
  margin-top: 40px;
  // 标题
  .title {
    color: #000;
    font-family: Inter;
    font-size: 42px;
    font-style: normal;
    font-weight: 700;
    line-height: 56px; /* 133.333% */
  }

  .tab {
    margin-top: 40px;
    ::v-deep .el-collapse-item__arrow {
      display: none;
    }

    // 折叠标题
    .collapse-title {
      display: flex;
      height: 50px;
      width: 100%;
      align-items: center;
      background-color: #f0e7fb;
      color: black;
      &:hover {
        background-color: #b588ed;
        color: white;
        // 标题图片
        img:nth-child(1) {
          display: none;
        }
        // 标题图片
        img:nth-child(2) {
          display: inline;
        }
      }
      // 标题图片
      img:nth-child(1) {
        width: 16px;
        height: 16px;
        margin-left: 24px;
      }
      // 标题图片
      img:nth-child(2) {
        width: 16px;
        height: 16px;
        margin-left: 24px;
        display: none;
      }
      // 箭头
      img:last-child {
        width: 16px;
        height: 16px;
        margin-right: 24px;
      }
      //  标题内容
      div {
        margin-left: 18px;
        flex: 1;
        text-align: start;
      }
    }

    .content {
      margin: 0 20px;
    }
  }
}
</style>

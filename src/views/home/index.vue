<template>
  <!-- 首页部分 -->
  <div class="container">
    <!-- 轮播图部分 -->
    <div class="wrapper">
      <!-- 下载APK部分 -->
      <HomeDownloadAPP />
      <!-- 下载直播部分 - 标题 -->
      <!-- 下载直播部分 - 内容 -->
      <!-- 下载直播部分 - 图片 -->
      <!-- 热点新闻 - 标题 -->
      <!-- 热点新闻 - 内容 -->
      <!-- 体验最新直播的极致 - 标题 -->
      <!-- 体验最新直播的极致 - 内容 -->
      <!-- 体验最新直播的极致 - 图片 -->
      <!-- 有何吸引力？ - 标题 -->
      <!-- 有何吸引力？ - 内容 - 注意分段（子标题） -->
      <!-- 有何吸引力？ - 图片 -->
      <!-- 为什么要选择我们的直播？ - 标题 -->
      <!-- 为什么要选择我们的直播？ - 内容 - 注意分段（子标题） -->
      <!-- 为什么要选择我们的直播？ - 图片 -->
      <!-- 如何使用 - 详细说明 - 标题 -->
      <!-- 如何使用 - 详细说明 - 内容 - 注意分段（子标题） -->
      <!-- 如何使用 - 详细说明 - 图片 -->
      <!-- 立即下载体验！ - 标题 -->
      <!-- 立即下载体验！ - 内容 -->
      <!-- 关于常见问题 -->
      <HomeArticle :dataList="dataList" />

      <HomeCollapse />
    </div>
  </div>
</template>

<script>
import HomeCollapse from "./components/home-collapse";
import HomeDownloadAPP from "./components/home-download-app";
import HomeArticle from "./components/home-article";
import { ref } from "vue";

export default {
  name: "Home",
  components: {
    HomeCollapse,
    HomeDownloadAPP,
    HomeArticle,
  },
  setup() {
    const dataList = ref([
      {
        // 标题
        title: "Hot51 - Tải xuống Hot51 Live phát trực tiếp mới nhất 2024",
        // 标题是否居中, 不居中就为左显示
        titleCenter: true,
        // 内容
        content:
          "Khám phá nguồn cập nhật live stream mới nhất với Hot51 Live 2024 – Ứng dụng tiên tiến mang đến trải nghiệm phát sóng chất lượng cao, đa dạng nội dung và không ngừng cập nhật sự hấp dẫn cho cộng đồng người hâm mộ. Tải ngay để tham gia vào thế giới giải trí sống động với Hot51 và Hot51 Live.",
        // 图片
        images: ["ic-1", "ic-2"],
      },
      {
        title: "HOT51 HOT NEWS",
        // 标题是否居中, 不居中就为左显示
        titleCenter: true,
        content: "No posts found.",
        images: [],
      },
      {
        title:
          "Hot51 Live 2024 - Trải nghiệm Đỉnh Cao với Phát Sóng Trực Tiếp Mới Nhất",
        // 标题是否居中, 不居中就为左显示
        titleCenter: true,
        content:
          "Chào mừng bạn đến với Hot51 Live 2024, nơi bạn sẽ khám phá một thế giới giải trí sống động và đa dạng. Với ứng dụng Hot51 Live, chúng tôi mang đến cho bạn trải nghiệm phát sóng trực tiếp chất lượng cao, đầy đủ nội dung và không ngừng đổi mới để đáp ứng sự mong đợi của cộng đồng người hâm mộ. Hãy cùng chúng tôi đào sâu để khám phá tại sao Hot51 Live là điểm đến số một cho người yêu thích live stream.",
        images: ["ic-3"],
      },
      {
        title: "Điều Gì Làm Nên Sức Hấp Dẫn Của Hot51 Live?",
        // 标题是否居中, 不居中就为左显示
        titleCenter: false,
        content:
          "1. Nền Tảng Phát Sóng Trực Tiếp Tiên Tiến <br/> <br/> Hot51 Live 2024 là sự kết hợp hoàn hảo giữa công nghệ tiên tiến và sự sáng tạo. Với giao diện người dùng thân thiện, việc tìm kiếm và thưởng thức nội dung yêu thích của bạn chưa bao giờ dễ dàng đến thế. Khám phá nguồn phát sóng trực tiếp mới nhất từ các nguồn độc đáo và đa dạng, đảm bảo rằng mỗi lần bạn truy cập Hot51 Live đều là một hành trình mới. <br/> <br/> 2. Chất Lượng Hình Ảnh và Âm Thanh Tuyệt Vời <br/> <br/> Với đội ngũ kỹ thuật chuyên nghiệp và đầu tư vào công nghệ tiên tiến, chúng tôi cam kết mang đến cho bạn trải nghiệm xem phát sóng trực tiếp với chất lượng hình ảnh và âm thanh tuyệt vời nhất. Hãy dừng lại và thưởng thức mỗi khoảnh khắc với độ rõ nét và chi tiết cao, tạo nên sự gần gũi và sống động. <br/> <br/> 3. Nội Dung Đa Dạng Cho Mọi Sở Thích <br/> <br/> Hot51 Live 2024 không chỉ là nơi để xem live stream, mà còn là cộng đồng nơi mọi người chia sẻ đam mê. Từ game thủ, người nổi tiếng, đến những buổi hòa nhạc và sự kiện đặc sắc, chúng tôi đảm bảo rằng mọi sở thích của bạn đều có không gian riêng trên nền tảng của chúng tôi. Hãy đồng hành và chia sẻ niềm vui với cộng đồng người hâm mộ đa dạng nhất.",
        images: ["ic-3"],
      },
      {
        title: "Tại Sao Bạn Nên Lựa Chọn Hot51 Live?",
        // 标题是否居中, 不居中就为左显示
        titleCenter: false,
        content:
          "1. Cập Nhật Liên Tục với Nguồn Phát Sóng Mới Nhất <br/> <br/> Với cam kết cập nhật liên tục, Hot51 Live 2024 là điểm đến cho những người yêu thích sự đa dạng. Bạn sẽ luôn được trải nghiệm những nội dung mới nhất, từ game hot đến sự kiện thể thao và những buổi livestream cá nhân hấp dẫn. <br/> <br/> 2. Giao Diện Thân Thiện và Dễ Sử Dụng <br/> <br/> Chúng tôi hiểu rằng trải nghiệm người dùng là yếu tố quan trọng. Với giao diện thân thiện và dễ sử dụng, bạn có thể dễ dàng tìm kiếm và khám phá nội dung mà không gặp bất kỳ khó khăn nào. Mọi thứ đều được tối ưu hóa để mang lại trải nghiệm tuyệt vời nhất cho bạn. <br/> <br/> 3. Chất Lượng Đỉnh Cao với Công Nghệ Tiên Tiến <br/> <br/> Hot51 Live không chỉ là nơi để xem live stream, mà còn là địa điểm để trải nghiệm chất lượng đỉnh cao. Đội ngũ kỹ thuật của chúng tôi liên tục nỗ lực để cải thiện chất lượng hình ảnh và âm thanh, đảm bảo rằng mọi lần kết nối đều là một trải nghiệm đáng nhớ.",
        images: ["ic-3"],
      },
      {
        title: "Cách Thức Sử Dụng Hot51 Live - Hướng Dẫn Chi Tiết",
        // 标题是否居中, 不居中就为左显示
        titleCenter: false,
        content:
          "Để bắt đầu trải nghiệm với Hot51 Live, bạn chỉ cần thực hiện một số bước đơn giản: <br/> <br/> 1. Cập Nhật Liên Tục với Nguồn Phát Sóng Mới Nhất <br/> <br/>  Tải Ứng Dụng Hot51 Live: Truy cập trang chính thức của chúng tôi và tải ứng dụng Hot51 Live về điện thoại của bạn. Đăng Ký Tài Khoản: Theo dõi các bước đăng ký dễ dàng và nhanh chóng để có tài khoản cá nhân của bạn. Khám Phá Nội Dung: Mở ứng dụng và khám phá nguồn phát sóng trực tiếp đa dạng và phong phú. Tham Gia Cộng Đồng: Kết nối với cộng đồng người hâm mộ, tham gia các thảo luận và chia sẻ niềm đam mê của bạn. Tương Tác và Thưởng Thức: Tương tác với nghệ sĩ, streamer, và cộng đồng người hâm mộ. Thưởng thức mỗi khoảnh khắc và góp phần tạo nên không khí sôi động.",
        images: ["ic-3"],
      },
      {
        title: "Hãy Tải Ngay để Trải Nghiệm!",
        // 标题是否居中, 不居中就为左显示
        titleCenter: false,
        content:
          "Nếu bạn là người đam mê live stream và muốn khám phá những nội dung mới nhất và đa dạng nhất, Hot51 Live 2024 là điểm đến không thể bỏ qua. Tải ngay ứng dụng để tham gia vào thế giới giải trí sống động, nơi mà mỗi khoảnh khắc đều trở nên đặc biệt. Hot51 và Hot51 Live chờ đón bạn! <br/> <br/>  Hãy trải nghiệm ngay và chia sẻ cảm nhận của bạn với cộng đồng. Hot51 Live 2024 – Nơi kết nối đam mê, tạo nên những kỷ niệm đáng nhớ!”",
        images: [],
      },
    ]);

    return {
      dataList,
    };
  },
};
</script>

<style scoped lang="less">
.container {
  min-height: 600px;
  .wrapper {
    max-width: 1120px;
    margin: 0 auto;
  }
}
</style>

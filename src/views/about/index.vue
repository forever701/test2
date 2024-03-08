<template>
  <!-- 整体部分 -->
  <div class="container">
    <!-- 版心部分 -->
    <div class="wrapper">
      <AboutArticle :dataList="dataList" />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import AboutArticle from "./components/about-article.vue";
export default {
  name: "About",
  components: {
    AboutArticle,
  },
  setup() {
    const dataList = ref([
      {
        // 标题
        title: "Khám Phá Sức Hút Đặc Biệt Của Ứng Dụng Dâu Tây",
        // 标题是否居中，默认在左侧显示
        titleCenter: true,
        // 内容
        content:
          "Dâu Tây – Ứng dụng độc đáo mang đến trải nghiệm Live không giới hạn. Khám phá cộng đồng đa dạng và sôi động với Dâu Tây Live. Đặt chân vào thế giới mới, nơi sự đổi mới và sự kết nối nở rộ.",
        // 内容是否居中
        contentCenter: true,
        // 图片集合
        images: ["ic-banner-3"],
      },
      {
        // 标题
        title:
          "Giới Thiệu Về Dâu Tây App: Kết Nối, Trải Nghiệm Live và Sự Đa Dạng Hóa Cộng Đồng",
        // 标题是否居中，默认在左侧显示
        titleCenter: false,
        // 内容
        content:
          "Chào mừng bạn đến với Dâu Tây – ứng dụng mang đến một hành trình trực tuyến độc đáo, nơi mà kết nối cộng đồng và trải nghiệm live chất lượng cao là ưu tiên hàng đầu. Tại đây, chúng tôi tự hào giới thiệu đến bạn một không gian sống động, đa dạng và đầy sức sáng tạo.",
        // 内容是否居中
        contentCenter: false,
        // 图片集合
        images: [],
      },
      {
        // 标题
        title: "Dâu Tây: Nơi Kết Nối Và Chia Sẻ",
        // 标题是否居中，默认在左侧显示
        titleCenter: false,
        // 内容
        content:
          "Đám đông đa dạng <br/><br/> Dâu Tây không chỉ là một ứng dụng, mà là một cộng đồng – một không gian nơi mọi người có thể tụ tập, kết nối và chia sẻ. Với người dùng đến từ mọi lớp xã hội và mọi nơi trên thế giới, Dâu Tây tạo ra một đám đông đa dạng, nơi mà mỗi cá nhân đều đóng góp vào sự phong phú và sáng tạo của cộng đồng. <br/><br/> Trải nghiệm Live độc đáo <br/><br/> Với Dâu Tây Live, bạn sẽ được chìm đắm vào những trải nghiệm trực tiếp, chân thực và không giới hạn. Từ những buổi biểu diễn nghệ thuật đặc sắc đến những cuộc trò chuyện hàng ngày, mọi khoảnh khắc đều được chia sẻ một cách sống động qua giao diện tương tác và thân thiện.",
        // 内容是否居中
        contentCenter: false,
        // 图片集合
        images: [],
      },
      {
        // 标题
        title: "Tại Sao Nên Chọn Dâu Tây?",
        // 标题是否居中，默认在左侧显示
        titleCenter: false,
        // 内容
        content:
          "1. Chất Lượng Live Đỉnh Cao <br/><br/> Với sự đầu tư vào công nghệ tiên tiến, Dâu Tây mang đến trải nghiệm Live với chất lượng hình ảnh và âm thanh tuyệt vời nhất. Đồng thời, tích hợp các tính năng độc đáo như gửi quà ảo, tương tác trực tiếp, giúp tạo ra những khoảnh khắc tuyệt vời và gần gũi nhất. <br/><br/> 2. Đa Dạng Cộng Đồng <br/><br/> Với người dùng đến từ khắp nơi trên thế giới, Dâu Tây là nơi gặp gỡ văn hóa và sự đa dạng. Từ ngôn ngữ, nền văn hóa đến sở thích, bạn sẽ luôn tìm thấy một ngóc ngách của cộng đồng dành cho bạn. <br/><br/> 3. Sự Sáng Tạo Không Giới Hạn <br/><br/> Dâu Tây không chỉ là nơi thưởng thức nội dung mà còn là nơi tạo ra nó. Với công cụ và tính năng sáng tạo, người dùng có thể sản xuất nội dung live độc đáo của riêng mình, từ các buổi biểu diễn âm nhạc đến thảo luận chính trị. <br/><br/> 4. An Toàn và Bảo Mật Tuyệt Đối <br/><br/> Chúng tôi luôn đặt an toàn của người dùng lên hàng đầu. Tất cả dữ liệu cá nhân và giao dịch đều được mã hóa mạnh mẽ, đảm bảo môi trường trực tuyến an toàn và bảo mật.",
        // 内容是否居中
        contentCenter: false,
        // 图片集合
        images: [],
      },
      {
        // 标题
        title: "Những Tính Năng Đặc Sắc",
        // 标题是否居中，默认在左侧显示
        titleCenter: false,
        // 内容
        content:
          "Dâu Tây Live <br/><br/> Tận hưởng trải nghiệm Live độc đáo với Dâu Tây Live, nơi mà bạn có thể tham gia vào các sự kiện trực tuyến, theo dõi những nghệ sĩ tài năng, và thậm chí là tự tạo ra nội dung live của riêng bạn. Sự tương tác với khán giả là chìa khóa, và Dâu Tây Live mang lại sự gần gũi như chưa bao giờ có. <br/><br/> Tạo Nội Dung <br/><br/> Với bộ công cụ sáng tạo của chúng tôi, bạn có thể dễ dàng tạo ra nội dung live phong cách của riêng mình. Từ trình diễn âm nhạc đến thảo luận về chủ đề yêu thích, Dâu Tây giúp biến ý tưởng của bạn thành hiện thực trực tiếp và tương tác. <br/><br/> Kết Nối Xã Hội <br/><br/> Dâu Tây không chỉ là một ứng dụng, mà còn là một mạng xã hội. Kết nối với bạn bè, theo dõi nghệ sĩ yêu thích, và tham gia vào các nhóm cộng đồng đa dạng. Mọi khoảnh khắc đều trở nên ý nghĩa khi được chia sẻ trong cộng đồng của bạn. <br/><br/> Quà Tặng Ảo <br/><br/> Chia sẻ niềm vui và sự ủng hộ thông qua việc gửi quà ảo. Từ những biểu tượng vui nhộn đến những món quà đặc biệt, bạn có thể thể hiện tình cảm của mình một cách độc đáo và tương tác với người chơi khác.",
        // 内容是否居中
        contentCenter: false,
        // 图片集合
        images: [],
      },
      {
        // 标题
        title: "Hướng Dẫn Sử Dụng Dâu Tây",
        // 标题是否居中，默认在左侧显示
        titleCenter: false,
        // 内容
        content:
          "1. Tải và Cài Đặt Ứng Dụng <br/><br/> Bắt đầu hành trình của bạn bằng cách tải và cài đặt Dâu Tây từ cửa hàng ứng dụng trên điện thoại di động của bạn. Quá trình cài đặt đơn giản và nhanh chóng, đưa bạn đến một thế giới mới ngay lập tức. <br/><br/> 2. Đăng Ký Tài Khoản <br/><br/> Sau khi cài đặt, bạn có thể đăng ký tài khoản Dâu Tây của mình một cách dễ dàng. Chọn tên người dùng phù hợp với bạn và bắt đầu hành trình của mình trong cộng đồng Dâu Tây. <br/><br/> 3. Khám Phá Live và Nội Dung Độc Đáo <br/><br/> Khám phá thế giới Live và nội dung độc đáo tại Dâu Tây. Theo dõi các sự kiện trực tuyến, tham gia vào các buổi trò chuyện, và trải nghiệm những điều mới lạ mỗi ngày. <br/><br/> 4. Tương Tác và Kết Nối <br/><br/> Chia sẻ niềm vui và sự ủng hộ thông qua việc gửi quà ảo. Từ những biểu tượng vui nhộn đến những món quà đặc biệt, bạn có thể thể hiện tình cảm của mình một cách độc đáo và tương tác với người chơi khác. <br/><br/> 5. Tạo Nội Dung Riêng Của Bạn <br/><br/> Nếu bạn là một người sáng tạo, hãy sử dụng công cụ tạo nội dung của chúng tôi để chia sẻ ý tưởng của bạn với thế giới. Tạo các sự kiện trực tuyến, biểu diễn âm nhạc, và để mọi người thấy sự độc đáo của bạn.",
        // 内容是否居中
        contentCenter: false,
        // 图片集合
        images: [],
      },
      {
        // 标题
        title: "Bảo Mật và An Toàn",
        // 标题是否居中，默认在左侧显示
        titleCenter: false,
        // 内容
        content:
          "Chúng tôi cam kết đảm bảo an toàn và bảo mật cho tất cả người dùng. Dữ liệu cá nhân của bạn được bảo vệ bằng cách sử dụng các biện pháp bảo mật mạnh mẽ và chúng tôi không bao giờ chia sẻ thông tin của bạn với bên thứ ba.",
        // 内容是否居中
        contentCenter: false,
        // 图片集合
        images: [],
      },
      {
        // 标题
        title: "Liên Hệ và Hỗ Trợ",
        // 标题是否居中，默认在左侧显示
        titleCenter: false,
        // 内容
        content:
          "Nếu bạn có bất kỳ câu hỏi hoặc cần hỗ trợ, đừng ngần ngại liên hệ với đội ngũ hỗ trợ của chúng tôi. Chúng tôi luôn sẵn lòng giúp đỡ và đảm bảo bạn có trải nghiệm tốt nhất tại Dâu Tây. <br/><br/> Dâu Tây không chỉ là ứng dụng, mà là một cộng đồng sống động, nơi mà mỗi người dùng đều có vai trò quan trọng. Hãy cùng nhau khám phá sức hút đặc biệt của Dâu Tây và tạo nên những kỷ niệm đáng nhớ trong thế giới trực tuyến độc đáo này.",
        // 内容是否居中
        contentCenter: false,
        // 图片集合
        images: [],
      },
    ]);
    return { dataList };
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
}</style>

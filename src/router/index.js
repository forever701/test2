import { createRouter, createWebHashHistory } from "vue-router";

// 布局容器
const Layout = () => import("@/views/Layout");
// 首页组件
const Home = () => import("@/views/home");
// 关于组件
const About = () => import("@/views/about");

// 路由规则
const routes = [
  // 一级路由布局窗口
  {
    path: "/",
    component: Layout,
    children: [
      { path: "/", component: Home },
      { path: "/about", component: About },
    ],
  },
];

//创建路由
const router = createRouter({
  // 使用hash的路由模式
  history: createWebHashHistory(),
  routes,
});

export default router;

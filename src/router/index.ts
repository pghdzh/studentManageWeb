import { createRouter, createWebHashHistory } from "vue-router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
NProgress.configure({ showSpinner: false }); // NProgress Configuration 刷新页面头部进度条

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "login",
      component: () => import("@/views/loginView/index.vue"),
    },
    {
      path: "/home",
      component: () => import("@/views/layoutView/index.vue"),
      redirect: "/subAssigment",
      children: [
        {
          path: "/subAssigment",
          component: () => import("@/views/subAssigmentView/index.vue"),
        },
      ],
    },
  ],
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;

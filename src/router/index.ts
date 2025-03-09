import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/shop",
      name: "shop",
      component: () => import("../views/ShopView.vue"),
    },
    {
      path: "/tutorials",
      name: "tutorials",
      component: () => import("../views/TutorialsView.vue"),
    },
    {
      path: "/courses",
      name: "courses",
      component: () => import("../views/CoursesView.vue"),
    },
    {
      path: "/software",
      name: "software",
      component: () => import("../views/PlugInsView.vue"),
    },
    {
      path: "/sale",
      name: "sale",
      component: () => import("../views/SaleView.vue"),
    },
    {
      path: "/bundles",
      name: "bundles",
      component: () => import("../views/BundlesView.vue"),
    },
  ],
});

export default router;

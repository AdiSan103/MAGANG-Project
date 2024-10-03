import { createRouter, createWebHistory } from "vue-router";
import { defineAsyncComponent } from "vue";

// Layouts
import LayoutAdmin from "../layouts/Admin.vue";

var appname = " - TMBB";

const routes = [
  // Admin routes
  {
    path: "/",
    name: "admin",
    redirect: "/",
    component: LayoutAdmin,
    meta: { title: "Dashboard " + appname },
    children: [
      {
        path: "/",
        name: "dashboard",
        component: defineAsyncComponent(() => import("../views/Dashboard.vue")),
      },
    ],
  },

  // Default 404 page
  {
    path: "/:pathMatch(.*)*",
    name: "Page404",
    component: defineAsyncComponent(() => import("../views/Page404.vue")),
    meta: { title: "Upps! 404" + appname },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

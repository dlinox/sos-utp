import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import {
  authMiddleware,
  noAuthMiddleware,
} from "@/app/middleware/auth.middleware";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "AuthLayout",
    component: () => import("@/common/ui/layouts/AuthLayout.vue"),
    beforeEnter: noAuthMiddleware,
    children: [
      {
        path: "",
        name: "Login",
        component: () => import("@/app/modules/auth/views/index.vue"),
      },
      {
        path: "register",
        name: "Register",
        component: () => import("@/app/modules/auth/views/register.vue"),
      },
    ],
  },

  {
    path: "/a",
    name: "AdminLayout",
    component: () => import("@/common/ui/layouts/AdminLayout.vue"),
    beforeEnter: authMiddleware,
    children: [
      {
        path: "",
        name: "Dashboard",
        component: () => import("@/app/modules/dashboard/views/index.vue"),
      },

      //user
      {
        path: "users",
        name: "Users",
        component: () => import("@/app/modules/user/views/index.vue"),
      },
    ],
  },

  {
    path: "/u",
    name: "ClientPanelLayout",
    component: () => import("@/app/modules/client-panel/views/index.vue"),
    beforeEnter: authMiddleware,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
   history: createWebHistory(import.meta.env.BASE_URL),
   routes: [
      {
         path: "/",
         name: "home",
         component: HomeView,
      },
      {
         path: "/about",
         name: "about",
         // route level code-splitting
         // this generates a separate chunk (About.[hash].js) for this route
         // which is lazy-loaded when the route is visited.
         component: () => import("../views/AboutView.vue"),
      },
      {
         path: "/project",
         name: "project",
         // route level code-splitting
         // this generates a separate chunk (About.[hash].js) for this route
         // which is lazy-loaded when the route is visited.
         component: () => import("../views/Project.vue"),
      },
      {
         path: "/contact",
         name: "contact",
         // route level code-splitting
         // this generates a separate chunk (About.[hash].js) for this route
         // which is lazy-loaded when the route is visited.
         component: () => import("@/views/contact.vue"),
      },
      {
         path: "/detail1",
         name: "detail1",
         // route level code-splitting
         // this generates a separate chunk (About.[hash].js) for this route
         // which is lazy-loaded when the route is visited.
         component: () => import("@/views/detail-sensor.vue"),
      },
      {
         path: "/detail2",
         name: "detail2",
         // route level code-splitting
         // this generates a separate chunk (About.[hash].js) for this route
         // which is lazy-loaded when the route is visited.
         component: () => import("@/views/detail2.vue"),
      },
      {
         path: "/detail3",
         name: "detail3",
         // route level code-splitting
         // this generates a separate chunk (About.[hash].js) for this route
         // which is lazy-loaded when the route is visited.
         component: () => import("../views/detail3.vue"),
      },
   ],
});

export default router;

import {
  createRouter,
  createWebHistory
} from "vue-router";
// import Cookie from "js-cookie";
// import axios from "axios";

const router = createRouter({
  history: createWebHistory(
    import.meta.env.BASE_URL),
  routes: [{
      path: '/',
      redirect: '/login'
    },
    // Public Children
    {
      path: "/login",
      name: "login",
      component: () => import("../layouts/BlankLayout.vue"),
      children: [{
        path: "",
        name: "home",
        component: () => import("../views/TheLoginView.vue"),
      }, ],
    },
    {
      path: "/admin",
      name: "admin",
      component: () => import("../layouts/AdminLayout.vue"),
      children: [{
          path: "",
          name: "admin-home",
          component: () => import("../views/admin/IndexView.vue"),
        },

      ],
    },
    {
      path: "/admin/news/manage",
      name: "manage",
      component: () => import("../layouts/AdminLayout.vue"),
      children: [{
          path: "",
          name: "news-manage",
          component: () => import("../views/admin/news/Manage.vue"),
        },

      ],
    },
    {
      path: "/admin/news/preview",
      name: "preview",
      component: () => import("../layouts/AdminLayout.vue"),
      children: [{
          path: "",
          name: "news-preview",
          component: () => import("../views/admin/news/Preview.vue"),
        },

      ],
    },
    {
      path: "/user",
      name: "user",
      component: () => import("../layouts/AdminLayout.vue"),
      children: [{
          path: "",
          name: "user-home",
          component: () => import("../views/user/IndexView.vue"),
        },

      ],
    },

    // Blank
    // {
    //   path: "/login",
    //   name: "login",
    //   component: () => import("../views/admin/LoginView.vue"),
    // },
  ],
});

// router.beforeEach((to, from, next) => {
//   const token = Cookie.get("auth.token");

//   if (to.name === "login" && token) {
//     next({
//       name: "admin-home"
//     });
//   } else if (
//     to.name !== "login" &&
//     to.name !== "home" &&
//     to.name !== "detail" &&
//     !token
//   ) {
//     next({
//       name: "login"
//     });
//   } else {
//     next();
//   }
// });

export default router;
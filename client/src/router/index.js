import { createRouter, createWebHistory } from "vue-router";
import Auth from "../views/Auth.vue";
import Home from "../views/Home.vue";
import Profile from "../views/Profile.vue";
import Admin from "../views/Admin.vue";
import CreateBlog from "../views/CreateBlog.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/auth",
      name: "auth",
      component: Auth,
    },
    {
      path: "/profile",
      name: "profile",
      component: Profile,
    },
    {
      path: "/admin",
      name: "Admin",
      component: Admin,
    },
    {
      path: "/create",
      name: "Create-blog",
      component: CreateBlog,
    },
  ],
});

export default router;

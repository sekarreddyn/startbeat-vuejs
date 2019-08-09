/* eslint-disable */
import Vue from "vue";
import VueRouter from "vue-router";
import store from "./store/store";
import Home from "./components/Home.vue";
import SignIn from "./components/Signin.vue";
import Dashboard from "./components/Dashboard.vue";
import NotFound from "./components/404/NotFount.vue";
import TemplateList from "./components/templates/TemplateList.vue";
import StarList from "./components/stars/StarList.vue";
import NewsList from "./components/news/NewsList.vue";
import CategoryList from "./components/categories/CategoryList.vue";
import TagList from "./components/tags/TagList.vue";
import ApprovalList from "./components/approval/ApprovalList.vue";
import PostList from "./components/post/PostList.vue";
import ActivityList from "./components/activity/ActivityList.vue";

Vue.use(VueRouter);

const preventRoutes = {
  beforeEnter: (to, from, next) => {
    if (store.state.auth.user && store.state.auth.user.token) {
      next();
    } else {
      next("/signin");
    }
  }
};

const routes = [
  { path: "/", component: Dashboard, ...preventRoutes },
  { path: "/signin", component: SignIn },
  { path: "/dashboard", component: Dashboard, ...preventRoutes },

  { path: "/404", component: NotFound },
  { path: "*", redirect: "/404" },
  {
    path: "/web/stars/:type",
    name: "stars",
    component: StarList,
    props: true,
    ...preventRoutes
  },
  {
    path: "/web/movies/:type",
    name: "movies",
    component: TemplateList,
    props: true,
    ...preventRoutes
  },
  {
    path: "/web/news/:type",
    name: "news",
    component: NewsList,
    props: true,
    ...preventRoutes
  },
  {
    path: "/web/categories/:type",
    name: "categories",
    component: CategoryList,
    props: true,
    ...preventRoutes
  },
  {
    path: "/web/tags/:type",
    name: "tags",
    component: TagList,
    props: true,
    ...preventRoutes
  },
  {
    path: "/web/approval/:type",
    name: "approval",
    component: ApprovalList,
    props: true,
    ...preventRoutes
  },
  {
    path: "/web/activity",
    name: "activity",
    component: ActivityList,
    props: true,
    ...preventRoutes
  },
  {
    path: "/web/post/:type",
    name: "post",
    component: PostList,
    props: true,
    ...preventRoutes
  }
];

export default new VueRouter({ mode: "history", routes });

import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import AllBlog from '../views/AllBlog.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: AllBlog,
  },
  {
    path: '/write',
    name: 'WriteBlog',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "writeblog" */ '../views/WriteBlog.vue'),
  },
  {
    path: '/:id',
    name: 'Blog',
    component: () => import(/* webpackChunkName: "blog" */ '../views/Blog.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;

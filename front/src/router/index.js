import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/index',
    name: 'Home',
    component: Home
  },
  {
    path: "/post/:id",
    name: "Article",
    component: () => import("@/views/Article.vue"),
    meta: {
      title: "文章详情",
    },
  },
  {
    path: "/category/:name",
    name: "Category",
    component: () => import("@/views/Category.vue"),
    meta: {
      title: "文章分类",
    },
  },
  {
    path: "/tag/:name",
    name: "Tag",
    component: () => import("@/views/Tag.vue"),
    meta: {
      title: "标签",
    },
  },
  {
    path: "/timeline",
    name: "TimeLine",
    component: () => import("@/views/TimeLine.vue"),
    meta: {
      title: "时间线",
    },
  },
  {
    path: "/editor",
    name: "Editor",
    component: () => import("@/views/Editor.vue"),
    meta: {
      title: "写点东西",
    },
  },
  // {
  //   path: "/message",
  //   name: "Message",
  //   component: () => import("@/views/Message.vue"),
  //   meta: {
  //     title: "留言板",
  //   },
  // },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

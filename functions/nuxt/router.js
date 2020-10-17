import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _75e51a48 = () => interopDefault(import('../pages/about/index.vue' /* webpackChunkName: "pages/about/index" */))
const _fa2aa0ec = () => interopDefault(import('../pages/admin/index.vue' /* webpackChunkName: "pages/admin/index" */))
const _4f79530e = () => interopDefault(import('../pages/posts/index.vue' /* webpackChunkName: "pages/posts/index" */))
const _3f1d7e50 = () => interopDefault(import('../pages/transition/index.vue' /* webpackChunkName: "pages/transition/index" */))
const _7aed0cba = () => interopDefault(import('../pages/admin/auth/index.vue' /* webpackChunkName: "pages/admin/auth/index" */))
const _3ba1fe68 = () => interopDefault(import('../pages/admin/new-post/index.vue' /* webpackChunkName: "pages/admin/new-post/index" */))
const _b9d94a96 = () => interopDefault(import('../pages/admin/_postId/index.vue' /* webpackChunkName: "pages/admin/_postId/index" */))
const _1793920e = () => interopDefault(import('../pages/posts/_id/index.vue' /* webpackChunkName: "pages/posts/_id/index" */))
const _55a7e64a = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _75e51a48,
    name: "about"
  }, {
    path: "/admin",
    component: _fa2aa0ec,
    name: "admin"
  }, {
    path: "/posts",
    component: _4f79530e,
    name: "posts"
  }, {
    path: "/transition",
    component: _3f1d7e50,
    name: "transition"
  }, {
    path: "/admin/auth",
    component: _7aed0cba,
    name: "admin-auth"
  }, {
    path: "/admin/new-post",
    component: _3ba1fe68,
    name: "admin-new-post"
  }, {
    path: "/admin/:postId",
    component: _b9d94a96,
    name: "admin-postId"
  }, {
    path: "/posts/:id",
    component: _1793920e,
    name: "posts-id"
  }, {
    path: "/",
    component: _55a7e64a,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}

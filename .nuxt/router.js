import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _674f2baa = () => interopDefault(import('..\\pages\\layout' /* webpackChunkName: "" */))
const _2cdf9fc0 = () => interopDefault(import('..\\pages\\home' /* webpackChunkName: "" */))
const _48ae1c48 = () => interopDefault(import('..\\pages\\login' /* webpackChunkName: "" */))
const _a2820a70 = () => interopDefault(import('..\\pages\\profile' /* webpackChunkName: "" */))
const _8b3f2238 = () => interopDefault(import('..\\pages\\settings' /* webpackChunkName: "" */))
const _7eecdf24 = () => interopDefault(import('..\\pages\\editor' /* webpackChunkName: "" */))
const _d4ed83d6 = () => interopDefault(import('..\\pages\\article' /* webpackChunkName: "" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _674f2baa,
    children: [{
      path: "",
      component: _2cdf9fc0,
      name: "home"
    }, {
      path: "login",
      component: _48ae1c48,
      name: "login"
    }, {
      path: "register",
      component: _48ae1c48,
      name: "register"
    }, {
      path: "profile/:username",
      component: _a2820a70,
      name: "profile"
    }, {
      path: "settings",
      component: _8b3f2238,
      name: "settings"
    }, {
      path: "editor",
      component: _7eecdf24,
      name: "editor"
    }, {
      path: "article/:slug",
      component: _d4ed83d6,
      name: "article"
    }]
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}

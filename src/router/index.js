import Vue from 'vue'
import VueRouter from 'vue-router'

import RightView from '../views/RightView.vue'

Vue.use(VueRouter)

// 解决vue路由重复导航错误
// 获取原型对象上的push函数
const VueRouterPush = VueRouter.prototype.push
// 修改原型对象中的push方法
VueRouter.prototype.push = function push (to) {
  return VueRouterPush.call(this, to).catch(err => err)
}
// 获取原型对象上的replace函数
const VueRouterReplace = VueRouter.prototype.replace
// 修改原型对象中的replace方法
VueRouter.prototype.replace = function replace (to) {
  return VueRouterReplace.call(this, to).catch(err => err)
}
// 路由规则
const routes = [
  { path: '/', redirect: '/info/1' },
  // 开启props传参，通过id实现不同页面的跳转
  { path: '/info/:mid', component: RightView, props: true }
]

const router = new VueRouter({
  routes
})

export default router

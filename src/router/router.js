import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import Store from '../store/store'
import App from '../App'
import Login from '../page/Login/Index'
import Operator from '../page/Operator/Index'
import Developer from '../page/Developer/Index'

import {deviceInfo} from "../util/device"
import {setCookie,getCookie} from '../util/utils'

import {MessageChange} from "../util/utils"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: App,
    children: [
    {path: '/Login', name: '登录', component: Login},
    {path: '/Operator', name: '运营者平台', component: Operator},
    {path: '/Developer', name: '开发者平台', component: Developer},
    // {path: '/ArticleDetail/:id', name: '详情', component: ArticleDetail,meta: {requireAuth: false}},

      {path:'*', redirect: '/Operator'}
      // {path: '/article/:id', name: 'article', component: Article},
    ]
  }
]
const router = new VueRouter({
  routes: routes, // short for routes: routes
  //linkActiveClass: 'active',  // router-link的选中状态的class，也有一个默认的值
  saveScrollPosition: true ,//记住页面的滚动位置 html5模式适用
  //mode: 'history',
  //ashbang: false,
  history: true
})
//登录控制
// router.beforeEach((to, from, next) => {
//     if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
//         if (getCookie('btsby_cookie')) {  // 通过vuex state获取当前的token是否存在
//             next()
//         }
//         else {
//             localStorage.clear();
//             Store.state.userInfo.username = ''
//             Store.state.userInfo.member_id = ''
//             Store.state.ifLogined = false
//             next({
//                 path: '/Login',
//             })
//         }
//     }
//     else {
//         next();
//     }
// })
//导航显示当前路由名称
router.afterEach((to, from, next) => {
  var ISMobile = deviceInfo()
  Store.state.activeRoute=to.name;
  Store.state.isMobile=ISMobile;
  document.title = to.name;
  Store.commit('ROUTE_CHANGE',{activeRoute: to.name})
  //获取消息通知
  MessageChange()
})
export default router

import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Menu from '@/components/Menu'
import Admin from '@/components/Admin'
import Login from '@/components/Login'
import Register from '@/components/Register'
import About from '@/components/about/About'

// 二级路由
import Contact from "@/components/about/Contact"
import Delivery from "@/components/about/Delivery"
import History from "@/components/about/History"
import OrderingGuide from "@/components/about/OrderingGuide"

// 三级路由
import Phone from "@/components/about/contact/Phone"
import PersonName from "@/components/about/contact/PersonName"


Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',name: "homeLink",components: {
      default: Home, // 显示在默认 <router-view/> 中的内容
      'orderingGuide': OrderingGuide, // 显示在 name 为 orderingGuide 的 <router-view/> 中的内容
      'delivery': Delivery,
      'history': History
    }},
    {path: '/menu',name: "menuLink",component: Menu},
    // 路由独享守卫的用法和全局守卫一样   守卫  ==>  拦截
    {path: '/admin',name: "adminLink",component: Admin
      ,beforeEnter:(to,from,next)=>{
        //alert("dafssfdf");
        // store 拿到登录状态
        next();
      }
    },
    {path: '/login',name: "loginLink",component: Login},
    {path: '/register',name: "registerLink",component: Register},
    {path: '/about',redirect: '/about/contact',name: "aboutLink",component: About,
    children:[
        {path: '/about/contact',redirect: '/about/contact/personName',name:'contactLink',component: Contact,
        children:[
                    {path: '/about/contact/phone',name: 'phoneNumber',component: Phone},
                    {path: '/about/contact/personName',name: 'personName',component: PersonName}
                ]},
        {path: '/about/delivery',name:'deliveryLink',component: Delivery},
        {path: '/about/history',name:'historyLink',component: History},
        {path: '/about/orderingGuide',name:'orderingGuideLink',component: OrderingGuide}
      ]},
    // default
    {path: '*',redirect: '/'}
  ],
  mode: 'history',
  scrollBehavior(to,from,savedPosition){
    //return {x:0, y:100}; // 控制路由的 滚动展示范围
    //return {selector: '.btn'} // 返回页面滚动到 第一个 class = 'btn' 的标签
    if (savedPosition){
      //  savedPosition 只有当使用浏览器的前进后退按钮时才会触发
      // 如果当触发了浏览器的前进后退按钮时，会回退到上次浏览的位置
      return savedPosition;
    }else{
      return {x:0, y:0};
    }
  }
})

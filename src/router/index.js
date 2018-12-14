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
    {path: '/',name: "homeLink",component: Home},
    {path: '/menu',name: "menuLink",component: Menu},
    {path: '/admin',name: "adminLink",component: Admin},
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
  mode: 'history'
})

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

// 全局守卫
// router.beforeEach((to,from,next)=>{
//   // to 去哪
//   // from 从哪个路由离开
//   // alert("还没有登录，请先登录！");
//   // next(); // 继续执行

//   // 判断 store.gettes.isLogin === false
//   if (to.path == '/login' || to.path == '/register'){// 拦截除了登录和注册以外的界面
//     next();
//   }else{
//     alert("还没有登录，请先登录！");
//     next('/login');
//   }
//   //console.log(to);
// })

// 后置钩子
// router.afterEach((to,from)=>{
//   // alert("after each");
// })


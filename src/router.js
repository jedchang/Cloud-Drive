import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Starred from './views/Starred.vue';
import Trash from './views/Trash.vue';

Vue.use(Router);

export default new Router({
  // mode: 'history',   // 部署 GitHub Pages 禁用 history mode
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/starred',
      name: 'starred',
      component: Starred
    },
    {
      path: '/trash',
      name: 'trash',
      component: Trash
    },
    {
      path: '*',
      redirect: '/' // 路由錯誤自動導向到跟目錄
    }
  ]
});

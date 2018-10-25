import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
      ,children: [
        {
          path: '/home/:id',
          name: 'detailVideo',
          component: () => import(/* webpackChunkName: "about" */ './components/VideoList.vue')
        }
      ]
    },
    {
      path: '/trending',
      name: 'trending',
      component: () => import(/* webpackChunkName: "about" */ './views/Trending.vue')
    },
    {
      path: '/liked',
      name: 'liked',
      component: () => import(/* webpackChunkName: "about" */ './views/Liked.vue')
    }
  ]
})

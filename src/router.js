import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from './page/Index.vue'
import List from './page/List.vue'
import Detail from './page/Detail.vue'
import Gif from './page/Gif.vue'
import Duanzi from './page/Duanzi.vue'
import Heighlights from './page/Heighlights.vue'

Vue.use(VueRouter)

const routes = [
  {path: '/index',
    component: Index,
    children: [
      { path: 'gif', component: Gif },
      { path: 'duanzi', component: Duanzi },
      { path: 'heighlights', component: Heighlights }
    ]},
  {path: '/list', component: List},
  {path: '/detail', component: Detail}
]

export const router = new VueRouter({
  routes
})
export const routeDeep = ['/index', '/list', '/detail']

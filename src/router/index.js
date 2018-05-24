import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Goods from '@/components/Goods'
import Upload from '@/components/upload'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/goods',
      name: 'Goods',
      component: Goods
    },
    {
      path: '/upload',
      name: 'upload',
      component: Upload
    }
  ]
})

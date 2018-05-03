import Vue from 'vue'
import Router from 'vue-router'
import about from '@/components/about'
import contact from '@/components/contact'
import galerija from '@/components/galerija'
import workshop from '@/components/workshop'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/contact',
      name: 'contact',
      component: contact
    },
    {
      path: '/gallery',
      name: 'galerija',
      component: galerija
    },
    {
      path: '/workshop',
      name: 'workshop',
      component: workshop
    }
  ]
})

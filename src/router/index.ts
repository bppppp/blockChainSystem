import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/Login.vue'),
    },
    {
      path: '/message',
      component: () => import('../views/Message.vue'),
      children: [
        {
            path: 'dateHandle',
            component: () => import('../components/dateHandle/DataHandle.vue')
        },
        {
            path: 'dataDetail',
            component: () => import('../components/dateManagement/DataDatail.vue')
        },
        {
            path: 'dataAuthorization',
            component: () => import('../components/dateManagement/DataAuthorization.vue')
        },
        {
            path: 'dateShare',
            component: () => import('../components/dateShare/DataShare.vue')
        },
      ]
    }
  ]
})

export default router

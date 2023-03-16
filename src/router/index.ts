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
            component: () => import('../components/dataHandle/DataHandle.vue')
        },
        {
            path: 'dataDetail',
            component: () => import('../components/dataManagement/DataDatail.vue')
        },
        {
            path: 'dataAuthorization',
            component: () => import('../components/dataManagement/DataAuthorization.vue')
        },
        {
            path: 'dataShare',
            component: () => import('../components/dataShare/DataShare.vue')
        },
        {
            path: 'authorizationDetail/:name',
            component: () => import('../components/dataManagement/SingleDataAuthorization.vue')
        }
      ]
    }
  ]
})

export default router

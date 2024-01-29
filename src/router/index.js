import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/Home.vue'
import BillPage from '../views/Bill.vue'
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/ingresos',
      name: 'Home',
      component: HomePage
    },
    {
      path: '/gastos',
      name: 'gastos',
      component: BillPage
    }
  ]
})

export default router

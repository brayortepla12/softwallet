import { createRouter, createWebHistory } from "vue-router"
import HomePage from "../views/Home.vue"
import Income from "../views/Income.vue"
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomePage,
    },
    {
      path: "/ingresos",
      name: "Ingresos",
      component: Income,
    },
  ],
})

export default router

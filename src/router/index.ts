import { createRouter, createWebHistory } from 'vue-router'
import AttendeesView from '../views/AttendeesView.vue'
import ImamView from '../views/ImamView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/attendees',
      name: 'attendees',
      component: AttendeesView
    },
    {
      path: '/imam',
      name: 'imam',
      component: ImamView
    }
  ]
})

export default router

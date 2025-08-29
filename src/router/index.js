import { createRouter, createWebHistory } from 'vue-router'
import EventListView from '../views/EventListView.vue'
import EventDetailsView from '../views/EventDetailsView.vue'
import AboutView from '../views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'event-list',
      component: EventListView,
    },
    {
      // Takto zadám DYNAMIC SEGMENT do local PATH
      path: '/event/:id',
      name: 'event-details',
      // Aby ID bylo dynamické, tak ho musím dostat jako PROPS z EventCard.vue
      // Tady dostanu ID z EventCard.vue, kde jsem ho předal jako PARAMS
      props: true,
      component: EventDetailsView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
  ],
})

export default router

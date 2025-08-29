<script setup>
import { ref, onMounted } from 'vue'
import EventService from '@/services/EventService.js'

// Aby ID bylo dynamické, tak ho musím dostat jako PROPS z EventCard.vue
// Tady dostanu ID z EventCard.vue, kde jsem ho předal jako PARAMS
const props = defineProps({
  id: {
    required: true,
  },
})

const event = ref(null)

// Až poté co je komponenta namontována, tak se spustí tato metoda a stáhne konkrétní event podle ID.
onMounted(() => {
  // Zde použiji metodu getEvent(id) z EventService.js (AXIOS), kde dám jako argument ID, co jsem dostal jako PROPS z EventCard.vue. A tato metoda mi vrátí konkrétní event podle ID. Volá podobně jako v EventListView.vue, ale tady volám konkrétní event podle ID.
  EventService.getEvent(props.id)
    .then((response) => {
      event.value = response.data
    })
    .catch((error) => {
      console.log(error)
    })
})
</script>

<template>
  <!-- Musím dát v-if , páč GET z axios je asynchronní metoda -->
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p>{{ event.description }}</p>
  </div>
</template>

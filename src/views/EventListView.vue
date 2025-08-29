<script setup>
import { ref, onMounted } from 'vue'
import EventCard from '@/components/EventCard.vue'
import EventService from '@/services/EventService.js'

// Používám zde klasik ref proměnnou, páč ji zde používám a taky ji naplním hodnotou zde. Netřeba tedy PROPS.
const events = ref(null)
// Stáhne všechny events z https://my-json-server.typicode.com/Code-Pop/Real-World_Vue-3/events
onMounted(() => {
  EventService.getEvents()
    .then((response) => {
      events.value = response.data
    })
    .catch((error) => {
      console.log(error)
    })
})
</script>

<template>
  <h1>Events For Good</h1>
  <!-- Zobrazíme jednotlivé eventy pomocí componenty EventCard
   Daný event je PROPS a tu nasypeme do EventCard. Každý event do jednoho
   EventCard -->
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

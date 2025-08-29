<script setup>
// Zde musí být PROPS, páč tady nic nestahuji, ale dostávám hodnotu zvenku.
// Tady dostávám jednotlivý event z EventListView.vue
defineProps({
  event: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <!-- Zde vytvořím local link (Path) do daného EventDetailsView pomocí name= event-details, co je zadaný v definici ROUTES v index.js. A pomocí params zadám ID abych docílil takovou Path: '/event/:id'. A předám id jako PROPS do EventDetailsView -->
  <!-- Zde to :to znamená, že dynamicky připojím proměnnou (objekt) a díky němu získám dynamicky potřebnou ROUTE PATH. Tj. už nejde o natvrdo přiřazenou hodnotu. -->
  <!-- Díky  props: true uvnitř routes (v index.js) pro path: '/event/:id' 
  zařídím že pošlu route params ID jako PROPS z EventCard.vue  -->
  <RouterLink class="event-link" :to="{ name: 'event-details', params: { id: event.id } }">
    <div class="event-card">
      <h2>{{ event.title }}</h2>
      <span>@{{ event.time }} on {{ event.date }}</span>
    </div>
  </RouterLink>
</template>

<style scoped>
.event-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}

.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}

.event-link {
  color: #2c3e50;
  text-decoration: none;
}
</style>

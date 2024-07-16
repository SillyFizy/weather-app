<template>
  <div class="w-full flex justify-center items-center bg-white rounded-xl p-2 shadow-2xl my-3 lg:flex-col lg: lg:p-0 lg:mx-1 cursor-pointer hover:transition-all duration-200 ease-in hover:scale-105">
    <img :src="forecast.day.condition.icon" alt="">
    <div class="w-full flex flex-col text-xl lg:items-center">
      <h1>{{ new Date(forecast.date).toLocaleDateString('en-US', {weekday: 'long'}).slice(0,3) }}</h1>
      <div class="flex gap-1">
        <h1>{{ forecast.day.maxtemp_c.toFixed(0) }}°</h1>
        <h1 class="opacity-50">{{ forecast.day.mintemp_c.toFixed(0) }}°</h1>
      </div>
    </div>
  </div>
</template>
<script setup>

const props = defineProps({
  forecast: Object,
})


</script>
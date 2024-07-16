<template>
  <section class="w-full flex flex-col items-center justify-center lg:gap-6">
    <img :src="img" alt="">
    <div class="flex flex-col items-center justify-center mb-4">
      <div class="flex my-3">
        <h1 class="text-6xl xl:text-8xl">{{temp.split('.')[0]}}</h1>
        <h1 class="xl:text-4xl -mt-1">°C</h1>
      </div>
      <div class="flex">
        <p class="flex items-center">Feels like <span class="text-xl ml-1">{{feelsLike.split('.')[0]}}</span><span
            class="opacity-50 text-xs self-start"> °C</span></p>
      </div>
    </div>
    <div class="w-[40%] mr-2 sm:w-[30%] md:w-[20%] lg:w-full flex flex-col items-center">
      <h1 class="text-2xl xl:text-3xl text-[#666464] font-light">{{ day }}</h1>
      <div class="w-full content-none h-[1px] bg-[#929292] my-2 "></div>
    </div>
    <div class="w-[50%] mt-5 lg:w-full">
      <div class="flex items-center justify-center my-2">
        <svg width="30" height="30" class="mr-3 self-start" viewBox="0 0 30 23" fill="none"
             xmlns="http://www.w3.org/2000/svg">
          <path
              d="M24.9975 10.35C25.0278 9.3837 24.7003 8.44125 24.0804 7.71105C23.4605 6.98084 22.5939 6.51666 21.6537 6.41127C21.2422 4.58513 20.2359 2.95609 18.7998 1.79122C17.3638 0.626353 15.5832 -0.00522253 13.75 3.25304e-05C9.26999 3.25304e-05 5.62499 3.72603 5.62499 8.30558C5.62499 8.55091 5.63749 8.80071 5.66249 9.05946C2.43875 9.65107 0 12.5663 0 15.9722C0 19.8471 3.08437 23 6.87499 23H23.75C27.1962 23 30 20.1339 30 16.6111C30.0054 15.1365 29.5094 13.7058 28.5969 12.5637C27.6844 11.4216 26.412 10.6391 24.9975 10.35ZM23.75 21.7222H6.87499C3.77312 21.7222 1.25 19.1424 1.25 15.9722C1.25 13.0008 3.51937 10.4855 6.41687 10.2465L7.09874 10.1903L6.98249 9.50157C6.91354 9.10675 6.87758 8.70664 6.87499 8.30558C6.87499 4.43072 9.95936 1.27781 13.75 1.27781C17.1206 1.27781 19.9687 3.74519 20.5225 7.14408L20.6131 7.70055L21.1643 7.67755C21.1932 7.67797 21.2221 7.67431 21.25 7.66669C22.6287 7.66669 23.75 8.81285 23.75 10.2222C23.75 10.396 23.7312 10.5755 23.6931 10.7557L23.5462 11.4559L24.2431 11.5256C25.4795 11.6458 26.6274 12.2341 27.4612 13.175C28.2951 14.1159 28.7548 15.3415 28.75 16.6111C28.75 19.4293 26.5068 21.7222 23.75 21.7222Z"
              fill="#AFAFAF"/>
        </svg>
        <h2>{{condition}}</h2>
      </div>
      <div class="flex items-center justify-center my-2">
        <svg width="30" height="30" class="mr-3" viewBox="0 0 28 31" fill="none"
             xmlns="http://www.w3.org/2000/svg">
          <path d="M2 2L2 11.9184" stroke="#4151D2" stroke-width="4" stroke-linecap="round"/>
          <path d="M10 2L10 18.5306" stroke="#4151D2" stroke-width="4" stroke-linecap="round"/>
          <path d="M18 2L18 25.1429" stroke="#4151D2" stroke-width="4" stroke-linecap="round"/>
          <path d="M26 2L26 29" stroke="#4151D2" stroke-width="4" stroke-linecap="round"/>
        </svg>
        <h2>Rain - {{ rain }}%</h2>
      </div>
    </div>
    <div class="text-lg mt-5 mb-3">
      <h1>{{ city }}, {{ country }}</h1>
    </div>
  </section>
</template>
<script setup>

const props = defineProps({
  temp: String,
  feelsLike: String,
  img:String,
  day: String,
  condition: String,
  city: String,
  country: String,
  rain:Number
})


</script>


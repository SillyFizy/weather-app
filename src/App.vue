<template>
  <div class="w-full h-full flex justify-center">
    <div class="bg-[#DADADA] w-[90%] h-[90%] rounded-3xl flex flex-col items-center overflow-clip my-4 lg:flex-row">
      <main class="w-full bg-[#FFFFFF] flex items-center flex-col lg:h-[100vh] lg:w-1/3">
        <header
            class="relative bg-[#D9D9D9] flex items-center w-[80%] justify-between rounded-3xl shadow-inner p-3 my-5">
          <svg width="20" height="20" class="" viewBox="0 0 21 20" fill="none"
               xmlns="http://www.w3.org/2000/svg">
            <path
                d="M19.7309 18.3109L16.0209 14.6309C17.461 12.8353 18.1584 10.5562 17.9697 8.2622C17.781 5.9682 16.7206 3.83368 15.0064 2.29754C13.2923 0.761407 11.0547 -0.0595894 8.75382 0.00337096C6.45294 0.0663314 4.26362 1.00846 2.63604 2.63604C1.00846 4.26362 0.0663314 6.45294 0.00337096 8.75382C-0.0595894 11.0547 0.761407 13.2923 2.29754 15.0064C3.83368 16.7206 5.9682 17.781 8.2622 17.9697C10.5562 18.1584 12.8353 17.461 14.6309 16.0209L18.3109 19.7009C18.4039 19.7946 18.5145 19.869 18.6363 19.9198C18.7582 19.9706 18.8889 19.9967 19.0209 19.9967C19.1529 19.9967 19.2836 19.9706 19.4055 19.9198C19.5273 19.869 19.6379 19.7946 19.7309 19.7009C19.9111 19.5144 20.0119 19.2652 20.0119 19.0059C20.0119 18.7466 19.9111 18.4974 19.7309 18.3109ZM9.0209 16.0209C7.63643 16.0209 6.28305 15.6104 5.13191 14.8412C3.98076 14.072 3.08356 12.9788 2.55374 11.6997C2.02393 10.4206 1.88531 9.01314 2.1554 7.65527C2.4255 6.2974 3.09219 5.05012 4.07115 4.07115C5.05012 3.09219 6.2974 2.4255 7.65527 2.1554C9.01314 1.88531 10.4206 2.02393 11.6997 2.55374C12.9788 3.08356 14.072 3.98076 14.8412 5.13191C15.6104 6.28305 16.0209 7.63643 16.0209 9.0209C16.0209 10.8774 15.2834 12.6579 13.9706 13.9706C12.6579 15.2834 10.8774 16.0209 9.0209 16.0209Z"
                fill="black"/>
          </svg>
          <input v-model="query" @input="citySearchDebounced" type="text" placeholder="Search for places ...."
                 class="outline-none text-black opacity-100 bg-[#D9D9D9] w-[80%]">
          <svg width="20" height="20" class="cursor-pointer " @click="fetchLocalWeather" viewBox="0 0 22 22" fill="none"
               xmlns="http://www.w3.org/2000/svg">
            <path
                d="M11 0C4.925 0 0 4.925 0 11C0 17.0753 4.925 22 11 22C17.0753 22 22 17.0753 22 11C22 4.925 17.0753 0 11 0ZM12 19.9433V17C12 16.7348 11.8946 16.4804 11.7071 16.2929C11.5196 16.1054 11.2652 16 11 16C10.7348 16 10.4804 16.1054 10.2929 16.2929C10.1054 16.4804 10 16.7348 10 17V19.9433C5.82875 19.482 2.518 16.1715 2.057 12H5C5.26522 12 5.51957 11.8946 5.70711 11.7071C5.89464 11.5196 6 11.2652 6 11C6 10.7348 5.89464 10.4804 5.70711 10.2929C5.51957 10.1054 5.26522 10 5 10H2.057C2.518 5.82875 5.82875 2.518 10 2.057V5C10 5.26522 10.1054 5.51957 10.2929 5.70711C10.4804 5.89464 10.7348 6 11 6C11.2652 6 11.5196 5.89464 11.7071 5.70711C11.8946 5.51957 12 5.26522 12 5V2.057C16.1715 2.518 19.482 5.82875 19.9433 10H17C16.7348 10 16.4804 10.1054 16.2929 10.2929C16.1054 10.4804 16 10.7348 16 11C16 11.2652 16.1054 11.5196 16.2929 11.7071C16.4804 11.8946 16.7348 12 17 12H19.9433C19.482 16.1715 16.1715 19.482 12 19.9433Z"
                fill="black"/>
          </svg>
          <Transition name="slide-fade">
            <div v-if="isSearching && query"
                 class="absolute top-full z-10 left-4  w-[90%] bg-[#D9D9D9] flex flex-col p-3 rounded-3xl rounded-t-none">
              <div class="flex-grow flex-col my-1 bg-[#BBB9B9] rounded-l p-1 cursor-pointer"
                   v-for="city in searchResults" :key="city.id"
                   @click="getQueryWeather(city)">
                {{ city.country }}, {{ city.name }}
              </div>
              <div v-if="searchResults !== '' && searchResults.length === 0">
                <h1>No Results</h1>
              </div>
            </div>
          </Transition>
        </header>
        <div>
          <BasicStatus v-if="isLg" :temp="temp" :feelsLike="feelsLike" :day="day" :img="img" :condition="condition"
                       :city="city" :country="country" :rain="rain"/>
        </div>
        <carousel class="w-full" v-if="!isLg">
          <slide v-for="(component,index) in slides" :key="index">
            <component :is="component" :temp="temp" :feelsLike="feelsLike" :day="day" :img="img" :condition="condition"
                       :city="city" :country="country" :uv="uv" :humidity="humidity" :wind_kph="wind_kph"
                       :wind_dir="wind_dir" :vis_km="visibility" :pressure="pressure" :sunrise="sunrise"
                       :sunset="sunset" :rain="rain"/>
          </slide>
          <template #addons>
            <pagination/>
          </template>
        </carousel>
      </main>
      <section class="w-[70%] flex flex-col items-center sm:w-[60%] lg:justify-center lg:w-[80%] mx-5 xl:gap-4">
        <div class="w-full flex flex-col items-center mt-6 mb-6 lg:ml-5">
          <h1 class="text-2xl lg:self-start">7 Days Forecast</h1>
          <div class="w-[85%] h-[1px] bg-black lg:w-[30%] lg:self-start"></div>
        </div>
        <div class="w-full lg:flex lg:items-center">
          <ForecastCard class="" v-for="(forecast,index) in forecastWeather" :forecast="forecast"
                        :key="index"></ForecastCard>
        </div>
        <div v-if="isLg" class="w-full">
          <DetailedStatus :uv="uv" :humidity="humidity" :wind_kph="wind_kph"
                          :wind_dir="wind_dir" :vis_km="visibility" :pressure="pressure" :sunrise="sunrise"
                          :sunset="sunset"/>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import {computed, onMounted, ref, shallowRef} from "vue";
import axios from './http.js'
import {debounce} from "lodash";
import ForecastCard from "./components/ForecastCard.vue";
import {Carousel, Slide, Navigation, Pagination} from "vue3-carousel";
import 'vue3-carousel/dist/carousel.css'
import BasicWeather from "./components/BasicStatus.vue";
import DetailedStatus from "./components/DetailedStatus.vue";
import {useMediaQuery} from "@vueuse/core";
import BasicStatus from "./components/BasicStatus.vue";

const slides = shallowRef([BasicWeather, DetailedStatus]);
const currentWeather = ref([]);
const forecastWeather = ref([]);
const query = ref('');
const searchResults = ref('');
const temp = ref('');
const feelsLike = ref('');
const day = ref('');
const img = ref('');
const condition = ref('');
const country = ref('');
const city = ref('');
const uv = ref();
const humidity = ref();
const wind_kph = ref();
const wind_dir = ref('');
const visibility = ref();
const pressure = ref();
const sunrise = ref('');
const sunset = ref('');
const rain = ref()

const isLg = useMediaQuery('(min-width: 1024px)')

const isSearching = computed(() => {
  return searchResults.value !== '';
})
const getQueryWeather = async (city) => {
  const {latitude, longitude} = {
    latitude: city.lat,
    longitude: city.lon
  }

  await fetchCurrentWeather(latitude, longitude)
  searchResults.value = ''
  query.value = '';
}
const getCurrentLocation = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition((position) => {
          resolve({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          });
        }, () => {
          country.value = "N/A";
          city.value ="N/A";
          temp.value = "N/A";
          feelsLike.value = "N/A";
          day.value = "N/A";
          img.value = "N/A";
          condition.value = "N/A";
          uv.value = "N/A";
          humidity.value = "N/A";
          wind_kph.value = "N/A";
          wind_dir.value = "N/A";
          visibility.value = "N/A";
          pressure.value = "N/A";
          sunrise.value = "N/A";
          sunset.value = "N/A";
          console.error("Location is blocked or error occurred while getting the location")
        }, {
          timeout: 5000
        }
    )
  })
}

const fetchCurrentWeather = async (latitude, longitude) => {
  try {
    const {data} = await axios.get("/forecast.json", {
      params: {
        q: `${latitude.toFixed(4)},${longitude.toFixed(4)}`,
        days: 7
      }
    })
    currentWeather.value = data.current;
    country.value = data.location.country;
    city.value = data.location.name;
    temp.value = currentWeather.value.temp_c.toString();
    feelsLike.value = currentWeather.value.feelslike_c.toString();
    day.value = new Date(currentWeather.value.last_updated.split(' ')[0]).toLocaleDateString('en-Us', {weekday: 'long'});
    img.value = currentWeather.value.condition.icon.replace('64x64', ('128x128'))
    condition.value = currentWeather.value.condition.text
    uv.value = currentWeather.value.uv;
    humidity.value = currentWeather.value.humidity;
    wind_kph.value = currentWeather.value.wind_kph;
    wind_dir.value = currentWeather.value.wind_dir;
    visibility.value = currentWeather.value.vis_km;
    pressure.value = currentWeather.value.pressure_mb;
    sunrise.value = data.forecast.forecastday[0].astro.sunrise
    rain.value = data.forecast.forecastday[0].day.daily_chance_of_rain;
    sunset.value = data.forecast.forecastday[0].astro.sunset
    forecastWeather.value = data.forecast.forecastday;
  } catch (e) {
    console.log("Error while fetching weather data", e)
  }
}

const fetchLocalWeather = async () => {
  const {latitude, longitude} = await getCurrentLocation();
  await fetchCurrentWeather(latitude, longitude)
}
const searchCity = async () => {
  try {
    const {data} = await axios.get("/search.json", {
      params: {
        q: `${query.value}`
      }
    })
    searchResults.value = data;
  } catch (e) {

  }
}
const citySearchDebounced = debounce(searchCity, 500)

onMounted(async () => {
  try {
    const {latitude, longitude} = await getCurrentLocation();
    await fetchCurrentWeather(latitude, longitude)
  } catch (error) {
    console.log(error)
  }
})
</script>

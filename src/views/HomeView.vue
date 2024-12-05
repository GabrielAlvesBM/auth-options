<script setup lang="ts">
import HomeTitle from '../components/HomeTitle.vue'
import ShowInfos from '../components/ShowInfos.vue'
import axios from 'axios'
import { ref, onMounted } from 'vue'

const isLogged = ref<boolean>(false)

onMounted(() => {
  axios
    .get('http://localhost:3000/api/session', {
      withCredentials: true,
    })
    .then((res) => {
      if (res.data) {
        isLogged.value = true
      }
    })
    .catch((error) => {
      console.error(error)
    })
})
</script>

<template>
  <main>
    <h1>Auth Options</h1>

    <ShowInfos v-if="isLogged" />
    <HomeTitle v-if="!isLogged" />
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 0 20px;
}

h1 {
  font-size: 3rem;
  background-color: var(--primary-color);
}
</style>

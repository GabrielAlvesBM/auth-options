<script setup lang="ts">
import axios from 'axios'
import { ref, onMounted } from 'vue'

const sessionData = ref<object>({})

onMounted(() => {
  axios
    .get('http://localhost:3000/api/session', {
      withCredentials: true,
    })
    .then((res) => {
      sessionData.value = res.data
    })
    .catch((error) => {
      console.error(error)
    })
})
</script>

<template>
  <section>
    <pre>
      {{ sessionData }}
    </pre>
  </section>
</template>

<style scoped></style>

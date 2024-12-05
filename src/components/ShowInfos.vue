<script setup lang="ts">
import axios from 'axios'
import { ref, onMounted } from 'vue'

interface UserSession {
  id: number
  name: string
  email: string
  bio: string
}

const userSession = ref<UserSession>({
  id: 0,
  name: '',
  email: '',
  bio: '',
})

onMounted(() => {
  axios
    .get('http://localhost:3000/api/session', {
      withCredentials: true,
    })
    .then((res) => {
      userSession.value = res.data
    })
    .catch((error) => {
      console.error(error)
    })
})
</script>

<template>
  <section>
    <ul class="infos">
      <li><span class="info-name">Id:</span> {{ userSession.id }}</li>
      <li><span class="info-name">Nome:</span> {{ userSession.name }}</li>
      <li><span class="info-name">E-mail:</span> {{ userSession.email }}</li>
      <li><span class="info-name">Biografia:</span> {{ userSession.bio }}</li>
    </ul>
  </section>
</template>

<style scoped>
.infos {
  padding: 0;

  list-style-type: none;
}

.info-name {
  color: var(--accent-color);
}
</style>

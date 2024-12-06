<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'

const router = useRouter()
const errorMessage = ref<string>('')

const handleSubmit = async (event: Event) => {
  const form = event.target as HTMLFormElement
  const formData = new FormData(form)

  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  axios
    .post('http://localhost:3000/api/login', data, {
      withCredentials: true,
    })
    .then(() => {
      router.push('/').then(() => {
        window.location.reload()
      })
    })
    .catch((error) => {
      errorMessage.value = error.response.data
    })
}
</script>

<template>
  <div v-if="errorMessage" class="error-card">
    <p>{{ errorMessage }}</p>
  </div>

  <form @submit.prevent="handleSubmit">
    <input type="email" name="email" id="email" placeholder="E-mail" autocomplete="off" required />
    <input
      type="password"
      name="password"
      id="password"
      placeholder="Senha"
      autocomplete="off"
      required
      minlength="4"
      maxlength="100"
    />

    <button type="submit">Enviar</button>
  </form>
</template>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  width: 100%;
  max-width: 400px;

  padding: 0 20px;
}

input,
button {
  width: 100%;
  padding: 12.5px;
  border: none;
}

input {
  border-radius: 7.5px;
}

button {
  margin-top: 1em;

  border-radius: 90000px;

  color: var(--color-text);
  background-color: var(--primary-color);

  transition: background-color 0.3s ease;
}

button:hover {
  background-color: var(--secondary-color);
}

.error-card {
  padding: 10px 15px;
  background-color: #f8d7da;
  color: #721c24;
  border-radius: 5px;
  margin: 0 10px 10px 10px;
}

.error-card p {
  margin: 0px;
}

@media (max-width: 500px) {
  body {
    margin: 10px !important;
  }
}
</style>

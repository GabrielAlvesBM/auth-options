<script setup lang="ts">
import axios from 'axios'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const errorMessage = ref<string>('')

const handleSubmit = async (event: Event) => {
  const form = event.target as HTMLFormElement
  const formData = new FormData(form)

  if (!(form instanceof HTMLFormElement)) {
    errorMessage.value = 'Erro ao enviar o formulário.'
    return
  }

  const data = {
    name: formData.get('name') as string,
    email: formData.get('email') as string,
    password: formData.get('password') as string,
    confirmPassword: formData.get('confirmPassword') as string,
    bio: formData.get('bio') as string,
  }

  if (!data.name || !data.email || !data.password) {
    errorMessage.value = 'Os campos Nome, Email e Senha são obrigatórios.'
    return
  }

  if (data.password !== data.confirmPassword) {
    errorMessage.value = 'As senhas não coincidem.'
    return
  }

  axios
    .post('http://localhost:3000/api/register', data)
    .then(() => {
      router.push('/')
    })
    .catch((error) => {
      console.error(error)
      errorMessage.value = 'Erro ao interagir com o servidor.'
    })
}
</script>

<template>
  <div v-if="errorMessage" class="error-card">
    <p>{{ errorMessage }}</p>
  </div>

  <form @submit.prevent="handleSubmit">
    <input
      type="text"
      name="name"
      id="name"
      placeholder="Nome"
      autocomplete="off"
      required
      minlength="2"
    />
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
    <input
      type="password"
      name="confirmPassword"
      id="confirmPassword"
      placeholder="Repita a sua Senha"
      autocomplete="off"
      required
      minlength="4"
      maxlength="100"
    />

    <textarea
      name="bio"
      id="bio"
      placeholder="Breve Biografia"
      autocomplete="off"
      minlength="10"
      maxlength="255"
    ></textarea>

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
textarea,
button {
  padding: 12.5px;
  width: 100%;
  border: none;
}

input {
  border-radius: 7.5px;
}

textarea {
  min-height: 50px;
  max-height: 250px;

  resize: vertical;
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
</style>

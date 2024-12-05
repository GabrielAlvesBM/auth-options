<script setup lang="ts">
import LoginForm from '../components/LoginForm.vue'
</script>

<template>
  <main>
    <LoginForm />
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100dvh - 100px);
}
</style>

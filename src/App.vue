<script setup lang="ts"></script>

<template>
  <header>
    <nav class="nav">
      <RouterLink to="/">Página Inicial</RouterLink>
      <RouterLink to="/login">Entrar</RouterLink>
      <RouterLink to="/register">Registrar</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped></style>

<template>
  <h1>Auth Options</h1>

  <p>
    Sistema de autenticação usando VueJS, Express e Axios. Com opções de login pelas redes sociais.
  </p>

  <p class="pitch">
    <RouterLink to="/login">Entre</RouterLink> ou
    <RouterLink to="/register">Se Registre</RouterLink>
  </p>
</template>

<style scoped>
h1 {
  font-size: 3rem;
  background-color: var(--primary-color);
}

p {
  text-align: center;
}

.pitch {
  margin-top: 150px;
  font-size: 1.4rem;
}

.pitch a {
  font-size: 1.6rem;
}
</style>

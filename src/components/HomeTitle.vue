<template>
  <p>
    Sistema de autenticação usando VueJS, Express e Axios. Com opções de login pelas redes sociais.
  </p>

  <p class="pitch">
    <RouterLink to="/login">Entre</RouterLink> ou
    <RouterLink to="/register">Se Registre</RouterLink>
  </p>
</template>

<style scoped>
p {
  text-align: center;
}

.pitch {
  margin-top: 150px;
  font-size: 1.4rem;
}

.pitch a {
  font-size: 1.6rem;
  color: var(--primary-color)
}
</style>

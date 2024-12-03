<template>
  <nav class="nav">
    <RouterLink to="/">Página Inicial</RouterLink>
    <RouterLink to="/login">Entrar</RouterLink>
    <RouterLink to="/register">Registrar</RouterLink>
  </nav>
</template>

<style scoped>
.nav {
  padding: 25px 7.5px 10px 7.5px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 25px;
}

a {
  text-decoration: none;

  font-size: 1.1rem;

  color: var(--accent-color);

  transition: transform 0.2s ease-in-out;
  transition: padding 0.45s ease;
}

a:hover {
  padding: 0 15px;
  transform: scale(1.1);
}
</style>

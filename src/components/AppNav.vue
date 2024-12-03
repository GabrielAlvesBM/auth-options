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
  will-change: transform, padding;

  transition:
    transform 0.2s ease-in-out,
    padding 0.45s ease;
}

a:hover {
  padding: 0 15px;
  transform: scale(1.1);
}

@media (max-width: 540px) {
  .nav {
    flex-direction: column;
    align-content: center;
    align-items: center;
    gap: 15px;
  }

  a:hover {
    padding: 15px 0;
  }
}
</style>

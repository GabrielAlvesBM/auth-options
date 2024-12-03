<template>
  <form action="#">
    <input type="email" name="email" id="email" placeholder="E-mail" autocomplete="off" required />
    <input
      type="password"
      name="password"
      id="password"
      placeholder="Senha"
      autocomplete="off"
      required
      minlength="4"
      maxlength="255"
    />

    <button type="submit">Enviar</button>
  </form>
</template>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

input {
  width: 400px;
  padding: 12.5px;

  border-radius: 7.5px;
  border: none;
}

button {
  padding: 12.5px;
  margin-top: 1em;

  border-radius: 90000px;
  border: none;

  color: var(--color-text);
  background-color: var(--primary-color);

  transition: background-color 0.3s ease;
}

button:hover {
  background-color: var(--secondary-color);
}
</style>

<template>
  <form action="#" method="POST">
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
    ></textarea>

    <button type="submit">Enviar</button>
  </form>
</template>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 10px;

  width: 100%;
  max-width: 400px;

  padding: 0 35px 0 10px;
}

input,
textarea,
button {
  padding: 12.5px;
  border: none;
  width: 100%;
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
</style>

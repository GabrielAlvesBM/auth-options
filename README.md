# Auth Options
Sistema de Autenticação com Vue.js, Express e Axios

## 📝 Descrição

Este projeto é um sistema de autenticação que utiliza **Vue.js** no front-end, **Express** no back-end e **Axios** para comunicação entre as camadas. Ele oferece suporte para autenticação via email e senha, além de login pelas redes sociais, como Google e Facebook, garantindo uma experiência de login rápida e segura.

## 🛠️ Tecnologias Utilizadas

- **Front-end**: Vue.js
- **Back-end**: Express
- **Comunicação**: Axios
- **Autenticação Social**: OAuth2 (Google, Facebook, etc...)
<!-- - **Persistência de Dados**: <BandoDeDados> -->
- **Gerenciamento de Estado**: Vuex

## 🎯 Funcionalidades

- Login e registro com email e senha.
- Integração com redes sociais (Google, Facebook).
- Validação de dados no front-end e no back-end.
- Persistência segura de tokens de autenticação (JWT).
- Tela de logout e gerenciamento de sessões.

<!-- 

## 🚀 Como Executar o Projeto

### Pré-requisitos

- Node.js instalado na máquina.
- <BancoDeDados> configurado.
- Credenciais para APIs das redes sociais (Google, Facebook).

### Passo a Passo

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/seu-usuario/sistema-autenticacao.git
   cd sistema-autenticacao
   ```

2. **Configuração do back-end:**

   - Acesse a pasta `backend`:
     ```bash
     cd backend
     ```
   - Instale as dependências:
     ```bash
     npm install
     ```
   - Crie um arquivo `.env` com as variáveis:
     ```
     PORT=5000
     MONGO_URI=sua-uri-do-mongodb
     GOOGLE_CLIENT_ID=seu-id-google
     GOOGLE_CLIENT_SECRET=seu-segredo-google
     FACEBOOK_APP_ID=seu-id-facebook
     FACEBOOK_APP_SECRET=seu-segredo-facebook
     JWT_SECRET=sua-chave-secreta
     ```
   - Inicie o servidor:
     ```bash
     npm start
     ```

3. **Configuração do front-end:**

   - Acesse a pasta `frontend`:
     ```bash
     cd ../frontend
     ```
   - Instale as dependências:
     ```bash
     npm install
     ```
   - Inicie o servidor de desenvolvimento:
     ```bash
     npm run serve
     ```

4. **Acesse a aplicação:**

   - Front-end: `http://localhost:8080`
   - Back-end: `http://localhost:5000`

## 🌐 Endpoints da API

- **POST /auth/register**: Registro de usuários.
- **POST /auth/login**: Login com email e senha.
- **GET /auth/google**: Login com Google.
- **GET /auth/facebook**: Login com Facebook.
- **POST /auth/logout**: Logout do sistema.

-->

## 🧑‍💻 Contribuidores

- [Gabriel Alves](https://github.com/GabrielAlvesBM) – Desenvolvedor.

import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import session from 'express-session'
import userRoutes from './routes/user.js'

const app = express()
const PORT = process.env.PORT
dotenv.config()

app.use(express.json())
app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true,
  }),
)

app.use(
  session({
    secret: 'seu-segredo-para-sessao',
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false,
      httpOnly: true,
      maxAge: 1000 * 60 * 60,
    },
  }),
)

app.use('/api', userRoutes)

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`)
})

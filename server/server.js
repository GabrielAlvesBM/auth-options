import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import userRoutes from './routes/user.js'

const app = express()
const PORT = process.env.PORT
dotenv.config()

app.use(express.json())
app.use(
  cors({
    origin: 'http://localhost:5173',
  }),
)

app.use('/api', userRoutes)

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`)
})

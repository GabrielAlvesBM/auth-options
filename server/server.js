import express from 'express'
import cors from 'cors'

const app = express()
const PORT = 3000

app.use(express.json())
app.use(
  cors({
    origin: 'http://localhost:5173',
  }),
)

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from Express!' })
})

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`)
})

import { Router } from 'express'
import db from '../config/db.js'

const router = Router()

router.get('/users', async (req, res) => {
  try {
    const [rows] = await db.execute('SELECT * FROM users')
    res.json(rows)
  } catch (error) {
    console.error('Erro ao buscar usuarios: ', error)
    res.status(500).send('Erro ao buscar usuarios: ', error)
  }
})

export default router

import express from 'express'
import { Router } from 'express'
import db from '../config/db.js'

const router = Router()

router.use(express.urlencoded({ extended: true }))

router.post('/register', async (req, res) => {
  try {
    const { name, email, password, confirmPassword, bio } = req.body

    if (!name || !email || !password) {
      return res.status(400).send('Os campos Nome, Email e Senha são obrigatórios.')
    }

    if (password !== confirmPassword) {
      return res.status(400).send('As senhas não coincidem')
    }

    const userBio = bio ? bio.trim() : '0 Historias pra contar.'

    const query = `
      INSERT INTO users (name, email, password, bio)
      VALUES (?, ?, ?, ?)
    `

    await db.execute(query, [name, email, password, userBio])

    return res.status(201).send('Usuário registrado com sucesso!')
  } catch (error) {
    console.error(`Erro: ${error}`)
    return res.send(`Erro: ${error}`)
  }
})

router.get('/users', async (req, res) => {
  try {
    const [rows] = await db.execute('SELECT * FROM users')
    return res.json(rows)
  } catch (error) {
    console.error(`Erro ao buscar usuarios: ${error}`)
    return res.status(500).send(`Erro ao buscar usuarios: ${error}`)
  }
})

export default router

import express from 'express'
import { Router } from 'express'
import bcrypt from 'bcryptjs'
import db from '../config/db.js'

const router = Router()

router.use(express.urlencoded({ extended: true }))

router.get('/session', (req, res) => {
  const userSession = req.session.user

  if (!userSession) {
    return res.status(200).send(null)
  }

  return res.status(200).json(userSession)
})

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body

    const [user] = await db.execute('SELECT * FROM users WHERE email = ?', [email])

    if (!user[0]) {
      return res.status(400).send('Usuário não encontrado')
    }

    const isPasswordCorrect = await bcrypt.compare(password, user[0].password)

    if (!isPasswordCorrect) {
      return res.status(400).send('Senha incorreta')
    }

    req.session.user = {
      id: user[0].id,
      name: user[0].name,
      email: user[0].email,
      bio: user[0].bio,
    }

    return res.status(200).send('Login bem-sucedido')
  } catch (error) {
    console.error(`Erro no login: ${error}`)
    return res.status(500).send('Erro no login.')
  }
})

router.post('/register', async (req, res) => {
  try {
    const { name, email, password, bio } = req.body

    const [existingUser] = await db.execute('SELECT * FROM users WHERE email = ?', [email])

    if (existingUser.length > 0) {
      return res.status(400).send('O email já está em uso')
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const userBio = bio ? bio.trim() : '0 Historias pra contar.'

    const query = `
      INSERT INTO users (name, email, password, bio)
      VALUES (?, ?, ?, ?)
    `

    await db.execute(query, [name, email, hashedPassword, userBio])

    return res.status(201).send('Registro realizado com sucesso!')
  } catch (error) {
    console.error(`Erro no registro: ${error}`)
    return res.send('Erro no registro.')
  }
})

router.get('/users', async (req, res) => {
  try {
    const [rows] = await db.execute('SELECT * FROM users')
    return res.json(rows)
  } catch (error) {
    console.error(`Erro ao buscar usuarios: ${error}`)
    return res.status(500).send('Erro ao buscar usuarios.')
  }
})

router.get('/logout', (req, res) => {
  if (!req.session) {
    res.status(400).send('Nenhuma sessão ativa encontrada.')
  }

  req.session.destroy((error) => {
    if (error) {
      return res.status(500).send(`Erro ao realizar logout: ${error}`)
    }

    res.clearCookie('connect.sid')
    res.status(200).send('Logout realizado com sucesso!')
  })
})

export default router

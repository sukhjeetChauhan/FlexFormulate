import { Router } from 'express'

import * as db from '../db/db'

const router = Router()

// /api/v1/users

router.get('/', async (req, res) => {
  try {
    const users = await db.getAllUsers()

    res.json(users)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.get('/:id', async (req, res) => {
  try {
    cosnt
    const users = await db.getUserById(id)

    res.json(users)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.post('/', async (req, res) => {
  try {
    const data = req.body
    await db.addUser(data)

    res.sendStatus(200)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

export default router

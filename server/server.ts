import express from 'express'
import * as Path from 'node:path'
import users from './routes/users'
import schedules from './routes/schedules'
import calories from './routes/calories'

const server = express()

server.use(express.json())
server.use('/api/v1/users', users)
server.use('/api/v1/schedules', schedules)
server.use('/api/v1/calories', calories)

if (process.env.NODE_ENV === 'production') {
  server.use(express.static(Path.resolve('public')))
  server.use('/assets', express.static(Path.resolve('./dist/assets')))
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve('./dist/index.html'))
  })
}

export default server

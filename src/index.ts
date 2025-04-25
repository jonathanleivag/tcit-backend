import express from 'express'
import { getEnv } from './utils/env.util'
import { ENV } from './enum'
import PostRouter from './routers/post.router'

const app = express()
const port = getEnv(ENV.PORT)

app.get('/', (_req, res) => {
  res.send('Hello World')
})

app.use('/api/post', PostRouter)

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})

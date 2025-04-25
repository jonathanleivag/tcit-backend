import express from 'express'
import { getEnv } from './utils/env.util'
import { ENV } from './enum'
import PostRouter from './routers/post.router'
import helmet from 'helmet'

const app = express()
const port = getEnv(ENV.PORT)

app.use(express.json())
app.use(helmet())

app.get('/', (_req, res) => {
  res.send('Hello World')
})

app.use('/api/post', PostRouter)

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})

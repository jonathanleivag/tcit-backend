import express from 'express'
import { getEnv } from './utils/env.util'
import { ENV } from './enum'
import PostRouter from './routers/post.router'
import helmet from 'helmet'
import cors from 'cors'
import { setupSwagger } from './utils/swagger.util'

const app = express()
const port = getEnv(ENV.PORT)
setupSwagger(app)
app.use(express.json())
app.use(helmet())
app.use(cors())

app.get('/', (_req, res) => {
  res.send('Hello World')
})

app.use('/api/post', PostRouter)

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})

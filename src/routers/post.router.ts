import { Response, Router } from 'express'

const router = Router()

router.get('/', (_req, res: Response) => {
  res.send('get all posts')
})

export default router

import { Request, Response, Router } from 'express'
import { Post, PostReqBody, Res } from '../type'
import { create } from '../services/post.service'

const router = Router()

router.get('/', (_req, res: Response) => {
  res.send('get all posts')
})

router.post(
  '/',
  async (req: Request<{}, {}, PostReqBody>, res: Response<Res<Post>>) => {
    const createPost = await create(req.body)
    res.status(createPost.status).json(createPost)
  }
)

export default router

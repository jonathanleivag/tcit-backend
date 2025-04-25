import { Request, Response, Router } from 'express'
import { Post, PostReqBody, Res } from '../type'
import { create, getAll } from '../services/post.service'

const router = Router()

router.get('/', async (_req, res: Response<Res<Post[]>>) => {
  const getAllPosts = await getAll()
  res.status(getAllPosts.status).json(getAllPosts)
})

router.post(
  '/',
  async (req: Request<{}, {}, PostReqBody>, res: Response<Res<Post>>) => {
    const createPost = await create(req.body)
    res.status(createPost.status).json(createPost)
  }
)

export default router

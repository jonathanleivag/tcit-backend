import { Request, Response, Router } from 'express'
import { Post, PostReqBody, Res } from '../type'
import {
  createPost,
  deletePost,
  getAllPosts,
  getPostById
} from '../services/post.service'

const router = Router()

router.get('/', async (_req, res: Response<Res<Post[]>>) => {
  const getAll = await getAllPosts()
  res.status(getAll.status).json(getAll)
})

router.get(
  '/:id',
  async (req: Request<{ id: string }>, res: Response<Res<Post>>) => {
    const getOne = await getPostById(Number(req.params.id))
    res.status(getOne.status).json(getOne)
  }
)

router.post(
  '/',
  async (req: Request<{}, {}, PostReqBody>, res: Response<Res<Post>>) => {
    const create = await createPost(req.body)
    res.status(create.status).json(create)
  }
)

router.delete(
  '/:id',
  async (req: Request<{ id: string }>, res: Response<Res<Post>>) => {
    const remove = await deletePost(Number(req.params.id))
    res.status(remove.status).json(remove)
  }
)

export default router

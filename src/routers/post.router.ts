import { Request, Response, Router } from 'express'
import { Post, PostReqBody, Res } from '../type'
import { createPost, deletePost, getAllPosts } from '../services/post.service'

const router = Router()

/**
 * @openapi
 * /api/post:
 *   get:
 *     tags:
 *       - POST
 *     description: Obtener todos los posts
 *     responses:
 *       200:
 *         description: Lista de posts
 */
router.get('/', async (_req, res: Response<Res<Post[]>>) => {
  const getAll = await getAllPosts()
  res.status(getAll.status).json(getAll)
})

/**
 * @openapi
 * /api/post:
 *   post:
 *     tags:
 *       - POST
 *     description: Crear un nuevo post.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/PostReqBody'
 *     responses:
 *       201:
 *         description: Post creado exitosamente
 */
router.post(
  '/',
  async (req: Request<{}, {}, PostReqBody>, res: Response<Res<Post>>) => {
    const create = await createPost(req.body)
    res.status(create.status).json(create)
  }
)

/**
 * @openapi
 * /api/post/{id}:
 *   delete:
 *     tags:
 *       - POST
 *     description: Eliminar un post por ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del post
 *     responses:
 *       200:
 *         description: Post eliminado correctamente
 */
router.delete(
  '/:id',
  async (req: Request<{ id: string }>, res: Response<Res<Post>>) => {
    const remove = await deletePost(Number(req.params.id))
    res.status(remove.status).json(remove)
  }
)

export default router

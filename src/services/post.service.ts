import { PrismaClient } from '../generated/prisma'
import { Post, PostReqBody, Res } from '../type'

const prisma = new PrismaClient()

export const getAll = async (): Promise<Res<Post[]>> => {
  try {
    const data = await prisma.post.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    })

    return {
      message: 'Posts fetched successfully',
      success: true,
      status: 200,
      data
    }
  } catch (error) {
    return {
      message: 'Failed to fetch posts',
      success: false,
      status: 500
    }
  }
}

export const create = async (post: PostReqBody): Promise<Res<Post>> => {
  try {
    const data = await prisma.post.create({
      data: {
        name: post.name,
        description: post.description
      }
    })

    return {
      message: 'Post created successfully',
      success: true,
      status: 201,
      data
    }
  } catch (error) {
    return {
      message: 'Failed to create post',
      success: false,
      status: 500
    }
  }
}

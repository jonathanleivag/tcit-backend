/* eslint-disable @typescript-eslint/indent */
export interface PostReqBody {
  name: string
  description: string
}

export type Res<T> =
  | {
      success: true
      message: string
      status: number
      data: T
    }
  | {
      success: false
      status: number
      message: string
    }

export interface Post {
  id: number
  name: string
  description: string
  createdAt: Date
  updatedAt: Date
}

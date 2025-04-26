import swaggerJsdoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'
import { Express } from 'express'
import { getEnv } from './env.util'
import { ENV } from '../enum'

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API TCIT',
      version: '1.0.0',
      description: 'Documentación de la API del proyecto TCIT'
    },
    servers: [{ url: getEnv(ENV.SERVER_URL) }],
    components: {
      schemas: {
        PostReqBody: {
          type: 'object',
          properties: {
            name: {
              type: 'string',
              example: 'Nombre del post'
            },
            description: {
              type: 'string',
              example: 'Descripción detallada del post'
            }
          },
          required: ['name', 'description']
        },
        Post: {
          type: 'object',
          properties: {
            id: {
              type: 'integer',
              example: 1
            },
            name: {
              type: 'string',
              example: 'Nombre del post'
            },
            description: {
              type: 'string',
              example: 'Descripción detallada del post'
            },
            createdAt: {
              type: 'string',
              format: 'date-time',
              example: '2024-04-25T14:48:00.000Z'
            },
            updatedAt: {
              type: 'string',
              format: 'date-time',
              example: '2024-04-25T15:00:00.000Z'
            }
          }
        }
      }
    }
  },
  apis: ['./src/routers/*.ts']
}

const swaggerSpec = swaggerJsdoc(options)

export const setupSwagger = (app: Express): void => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
}

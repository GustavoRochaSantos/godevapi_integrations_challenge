import 'dotenv/config'
import { Router } from 'express'
import integrationsRouter from './integrations'

const routes = Router()

routes.get("/", (req, res) => {
  /*
    #swagger.tags = ['Root']
    #swagger.responses[200] = {
      schema: { 
        message: 'All services are running!'
      }
    } 
  */ 
  res.send("All services are running!")
})

routes.use('/integrations', integrationsRouter)

export default routes
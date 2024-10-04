import { Router } from 'express'
import googleHubRouter from './google-hub'
import hubSpotRouter from './hubspot'

const integrationsRouter = Router()

integrationsRouter.get('/', (req, res) => {
  /*
    #swagger.tags = ['Integrations']
    #swagger.responses[200] = {
      schema: { 
        message: 'Integrations are running fast!'
      }
    } 
  */ 

  res.send('Integrations are running fast!')
})

integrationsRouter.use('/google-hub', googleHubRouter)
integrationsRouter.use('/hubspot', hubSpotRouter)



export default integrationsRouter
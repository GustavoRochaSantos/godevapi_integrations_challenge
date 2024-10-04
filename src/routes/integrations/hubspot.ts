import { Router } from 'express'
import { HubSpotServices } from '@/services'

const hubSpotRouter = Router()
const hubSpotServices = new HubSpotServices()

hubSpotRouter.get('/', (req, res) => {
  /*
    #swagger.tags = ['Integrations']
    #swagger.responses[200] = {
      schema: { 
        message: 'Hubspot Integration!'
      }
    } 
  */ 
  res.send('Hubspot Integration')
})

hubSpotRouter.get('/contact', async (req, res) => {
  /*
    #swagger.tags = ['Integrations']
    #swagger.responses[200] = {
      schema: { $ref: "#/definitions/Contacts" }     }
    } 
  */ 
  const data = await hubSpotServices.getContacts()
  res.json(data)
})

export default hubSpotRouter
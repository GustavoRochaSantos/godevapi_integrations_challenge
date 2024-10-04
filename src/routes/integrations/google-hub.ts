import { Router } from 'express'
import { GoogleHubServices } from '@/services'

const googleHubRouter = Router()

googleHubRouter.post('/', (req, res) => {
  /*
    #swagger.tags = ['Integrations', 'Google Sheets]
    #swagger.responses[400] = {
      schema: { message: 'Sheet ID is required' }
    } 
  */ 
  res.status(400).send('Sheet ID is required')
})

googleHubRouter.post('/:sheetId', async (req, res) => {
  /*
    #swagger.tags = ['Integrations', 'Google Sheets]
    #swagger.responses[200] = {
      schema: { $ref: "#/definitions/GoogleHubImport" }     }
    } 
  */ 
  const sheetId = req.params.sheetId
  const googleHubServices = new GoogleHubServices()
  const data = await googleHubServices.importData(sheetId)
  res.json(data)
})

export default googleHubRouter
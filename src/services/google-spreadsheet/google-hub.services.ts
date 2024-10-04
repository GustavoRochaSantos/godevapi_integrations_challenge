
import { publicDomains } from "@/utils/constants";
import { GoogleSpreedsheet } from "@/utils/libs/google-spreedsheet";
import { HubSpot } from "@/utils/libs/hubspot";
import { SimplePublicObjectInputForCreate } from "@hubspot/api-client/lib/codegen/crm/companies";

interface ImportError { 
  body: {
    category: string 
  }

}
export class GoogleHubServices {
  constructor() { }
  
  private googleSpreadsheetService = new GoogleSpreedsheet()
  private hubSpot = new HubSpot()

  public async importData(sheetId: string){ 


    const rows = await this.googleSpreadsheetService.readData(sheetId)

    let qtdContactsImported = 0
    let qtdContactsAlreadyExist = 0
    let qtdContactsExcludedDomain = 0
    let qtdContactsErrorApi = 0

    for (let i = 0; i < rows.length; i++) {
      const email =  rows[i].get('Email')

      if (!email || publicDomains.includes(email.split('@')[1])) {
        qtdContactsExcludedDomain += 1
        continue
      }

      const names = rows[i].get('Contato').split(' ')
      const firstname = names[0]
      const lastname = names[names.length - 1]
      const company =  rows[i].get('Empresa')
      const phone =  rows[i].get('Telefone')
      const website =  rows[i].get('Website')

      const payload = {
        properties: {
          firstname,
          lastname,
          company,
          email,
          phone,
          website
        }
      } as SimplePublicObjectInputForCreate
  
      try {
        await this.hubSpot.createContact(payload)
        qtdContactsImported ++
      } catch (error: unknown) {
        const err = error as ImportError

        switch (err.body.category) {
          case 'CONFLICT':
            qtdContactsAlreadyExist++
            break;
          default:
            qtdContactsErrorApi ++
        }
      }
    }

    return {
      qtdContactsImported,
      qtdContactsAlreadyExist,
      qtdContactsExcludedDomain,
      qtdContactsErrorApi
    }

  }
}
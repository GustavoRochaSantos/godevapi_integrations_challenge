import { Client } from '@hubspot/api-client';
import { CollectionResponseSimplePublicObjectWithAssociationsForwardPaging, SimplePublicObject, SimplePublicObjectInput, SimplePublicObjectInputForCreate } from '@hubspot/api-client/lib/codegen/crm/companies';

export class HubSpot { 
  constructor(){ }

  private hubspotClient = new Client({ accessToken: process.env.HUB_API_KEY })

  async getContacts(): Promise<CollectionResponseSimplePublicObjectWithAssociationsForwardPaging> { 
    const contacts = await this.hubspotClient.crm.contacts.basicApi.getPage(100)
    return contacts
  }

  async createContact(contact: SimplePublicObjectInputForCreate): Promise<SimplePublicObject> { 
    const newContact = await this.hubspotClient.crm.contacts.basicApi.create(contact)
    return newContact
  }

  async updateContact(id: string, contact: SimplePublicObjectInput): Promise<SimplePublicObject> {
    if (!id){
      throw new Error('Contact ID is required')
    }
    const updatedContact = await this.hubspotClient.crm.contacts.basicApi.update(id, contact)
    return updatedContact
  }
  async deleteContact(id: string): Promise<void> {
    const deletedContact = await this.hubspotClient.crm.contacts.basicApi.archive(id)
    return deletedContact
  }

}
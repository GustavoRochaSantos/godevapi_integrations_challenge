import { HubSpot } from "@/utils/libs/hubspot";

export class HubSpotServices {
  constructor() { }
  
  private hubSpot = new HubSpot()

  async getContacts() {
    const contacts = await this.hubSpot.getContacts()
    return contacts
  }
}
import { HubSpot } from "@/utils/libs/hubspot";
import { HubSpotServices } from "./hubspot.services";
import { mockContacts, mockContactsEmpty } from '@/mocks/hubspot/contacts';

describe('HubspotService', () => {  

  it('should return a list of contacts when getContacts is called', async () => {

    const hubSpotMock = jest.spyOn(HubSpot.prototype, 'getContacts').mockResolvedValue(mockContacts);

    const hubSpotServices = new HubSpotServices();
    const contacts = await hubSpotServices.getContacts();

    expect(hubSpotMock).toHaveBeenCalled();
    expect(contacts).toEqual(mockContacts);

    hubSpotMock.mockRestore();
  });

  it('should handle empty contact list when getContacts is called', async () => {
    const hubSpotMock = jest.spyOn(HubSpot.prototype, 'getContacts').mockResolvedValue(mockContactsEmpty);

    const hubSpotServices = new HubSpotServices();
    const contacts = await hubSpotServices.getContacts();

    expect(hubSpotMock).toHaveBeenCalled();
    expect(contacts.results).toHaveLength(0);

    hubSpotMock.mockRestore();
  });
  
})
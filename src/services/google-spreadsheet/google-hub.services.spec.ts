import { mockInvalidImportContacts, mockInvalidRows, mockValidImportContacts, mockValidRows } from "@/mocks/hubspot/contacts";

describe('GoogleHubService', () => {	

  it('should import contacts successfully when valid data is provided', async () => {

    const mockGoogleSpreadsheetService = {
      readData: jest.fn().mockResolvedValue(mockValidRows),
      importData: jest.fn().mockResolvedValue(mockValidImportContacts),
      hubSpot: {
        createContact: jest.fn().mockResolvedValue({})
      }
    };
    const mockHubSpot = {
      createContact: jest.fn().mockResolvedValue({})
    };
    const googleHubServices = mockGoogleSpreadsheetService;
    googleHubServices.hubSpot = mockHubSpot;

    const result = await googleHubServices.importData('sheetId');

    expect(result.qtdContactsImported).toBe(1);
    expect(result.qtdContactsAlreadyExist).toBe(0);
    expect(result.qtdContactsExcludedDomain).toBe(0);
    expect(result.qtdContactsErrorApi).toBe(0);
  });

  it('should exclude contacts with empty or public domain emails', async () => {

    const mockGoogleSpreadsheetService = {
      readData: jest.fn().mockResolvedValue(mockInvalidRows),
      importData: jest.fn().mockResolvedValue(mockInvalidImportContacts),
    };
    const googleHubServices = mockGoogleSpreadsheetService;

    const result = await googleHubServices.importData('sheetId');

    expect(result.qtdContactsImported).toBe(0);
    expect(result.qtdContactsAlreadyExist).toBe(0);
    expect(result.qtdContactsExcludedDomain).toBe(2);
    expect(result.qtdContactsErrorApi).toBe(0);
  });
} )
import { CollectionResponseSimplePublicObjectWithAssociationsForwardPaging } from "@hubspot/api-client/lib/codegen/crm/companies"

export const mockContacts = { 
  results: [
    { 
      id: '1', 
      createdAt: new Date("2024-10-03T19:17:59.118Z"), 
      updatedAt: new Date("2024-10-03T19:18:07.134Z"), 
      properties: { 
        firstname: 'John', 
        lastname: 'Doe' 
      } 
    }
] 
} as CollectionResponseSimplePublicObjectWithAssociationsForwardPaging ;

export const mockContactsEmpty = {
  "results": []
} as CollectionResponseSimplePublicObjectWithAssociationsForwardPaging 

export const mockValidImportContacts = {
  qtdContactsImported: 1,
  qtdContactsAlreadyExist: 0,
  qtdContactsExcludedDomain: 0,
  qtdContactsErrorApi: 0
}

export const mockValidRows = [
  { 
  get: jest.fn()
    .mockReturnValueOnce('john.doe@company.com')
    .mockReturnValueOnce('John Doe')
    .mockReturnValueOnce('Company')
    .mockReturnValueOnce('123456789')
    .mockReturnValueOnce('www.company.com') 
  }
];

export const mockInvalidRows = [
  { get: jest.fn().mockReturnValueOnce('').mockReturnValueOnce('John Doe') },
  { get: jest.fn().mockReturnValueOnce('jane.doe@gmail.com').mockReturnValueOnce('Jane Doe') }
];

export const mockInvalidImportContacts = {
  qtdContactsImported: 0,
  qtdContactsAlreadyExist: 0,
  qtdContactsExcludedDomain: 2,
  qtdContactsErrorApi: 0
}

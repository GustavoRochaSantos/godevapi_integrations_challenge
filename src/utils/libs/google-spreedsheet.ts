
import { JWT } from 'google-auth-library';
import gs from 'google-spreadsheet';
import credentials from '@/config/credentials/credentials.json'
export class GoogleSpreedsheet { 

    constructor() { }

    private serviceAccountAuth = new JWT({
        email: credentials.client_email,
        key: credentials.private_key,
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    async getSheet(fileId: string) { 
        if (!fileId) { 
            throw new Error('FileId is required');
        }

        const doc = new gs.GoogleSpreadsheet(fileId, this.serviceAccountAuth);
        await doc.loadInfo();
        return doc
    }
    
    public async readData(sheetId: string): Promise<Array<gs.GoogleSpreadsheetRow<Record<string, unknown>>>> {
        const googleSpreadsheetService = new GoogleSpreedsheet()

        const doc = await googleSpreadsheetService.getSheet(sheetId)

        const sheet = doc.sheetsByIndex[0]

        const rows = await sheet.getRows()

        return rows
    }

    updateSheet() { 
        console.log('GoogleSpreedsheet updateSheet');
    }

    deleteSheet() { 
        console.log('GoogleSpreedsheet deleteSheet');
    }

    createSheet() { 
        console.log('GoogleSpreedsheet createSheet');
    }

    getSheetList() { 
        console.log('GoogleSpreedsheet getSheetList');
    }
}
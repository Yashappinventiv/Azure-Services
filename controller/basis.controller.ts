import { AbortController } from '@azure/abort-controller'
import {
    StorageSharedKeyCredential,
    BlobServiceClient
    } from '@azure/storage-blob'

const azureStorage = require('azure-storage');
const fs = require("fs");
const path = require("path");
const { DefaultAzureCredential } = require("@azure/identity");


const STORAGE_ACCOUNT_NAME = process.env.AZURE_STORAGE_ACCOUNT_NAME;
const ACCOUNT_ACCESS_KEY = process.env.AZURE_STORAGE_ACCOUNT_ACCESS_KEY;

export class BasicAzureCredentials {
    
    private containerClient : any
    private blobServiceClient : any

    constructor() {
        
        const defaultAzureCredential = new DefaultAzureCredential();
        const credentials = new StorageSharedKeyCredential("bloobstorage", "2JnjQ7U6rC4mFobPG6oq2ycUM/tr7zGmGH3GieJ+F3QEHxG6+XSPH3mPnYs3JlAB1TJoLT8KoJcrrlJsp7FP3A==");
        this.blobServiceClient  = new BlobServiceClient(`https://${'bloobstorage'}.blob.core.windows.net`, credentials   );
        this.containerClient = this.blobServiceClient.getContainerClient('americana2');
        
    }

async addNewConatiner(){
    await this.containerClient.create();
   // await showBlobNames(aborter, containerClient);
}

async showContainerNames() {
    const aborter = AbortController.timeout(30 * 60 * 1000) ;
    let iter = await this.blobServiceClient.listContainers(aborter);
    for await (const container of iter) {
      console.log(` - ${container.name}`);
    }
}


async  showBlobNames( ) {
    const aborter = AbortController.timeout(30 * 60 * 1000) ;
    let iter = await this.containerClient.listBlobsFlat(aborter);
    for await (const blob of iter) {
      console.log(` - ${blob.name}`);
    }
}
    
async getUrl(containerName : any , blobName : any ){

    const blobService = azureStorage.createBlobService('bloobstorage','2JnjQ7U6rC4mFobPG6oq2ycUM/tr7zGmGH3GieJ+F3QEHxG6+XSPH3mPnYs3JlAB1TJoLT8KoJcrrlJsp7FP3A==');
        const startDate = new Date();
        const expiryDate = new Date(startDate);
        expiryDate.setMinutes(startDate.getMinutes() + 43200);
        // startDate.setMinutes(startDate.getMinutes() - 100);
        
        const sharedAccessPolicy = {
            AccessPolicy: {
                Permissions: azureStorage.BlobUtilities.SharedAccessPermissions.READ,
                Start: startDate,
                Expiry: expiryDate
            }
        };
        
       // const token = blobService.generateSharedAccessSignature(containerName , 'images/PNG' ,  sharedAccessPolicy);
        
       // return blobService.getUrl(containerName, blobName, token);
    }
  



async uploadLocalFile(fileName : any , filePath  : any) {
    try{
         
        const filePaths = path.resolve(filePath);
      //const fileName = path.basename(filePath);
        const blobClient = this.containerClient.getBlobClient(fileName);
        const blockBlobClient = blobClient.getBlockBlobClient();
        const aborter = AbortController.timeout(30 * 60 * 1000) ;
    
        return await blockBlobClient.uploadFile(filePaths,aborter);
    }catch(e){
        console.log('..............upload basic' , e);
    }
   
}



async deleteBlockBlobClient(blobName : any){
    const blobClient = this.containerClient.getBlobClient(blobName);
    const blockBlobClient = blobClient.getBlockBlobClient();
    const aborter = AbortController.timeout(30 * 60 * 1000) ;
    await blockBlobClient.delete(aborter);
    return "Block blob blobName is deleted"
}

async deleteContainerClient(){
    
    const aborter = AbortController.timeout(30 * 60 * 1000) ;
    await this.containerClient.delete(aborter);
    return "Container ContainerName is deleted"
}


async getUrl1(){
    const blobService = azureStorage.createBlobService('bloobstorage','2JnjQ7U6rC4mFobPG6oq2ycUM/tr7zGmGH3GieJ+F3QEHxG6+XSPH3mPnYs3JlAB1TJoLT8KoJcrrlJsp7FP3A==');
    var containerName = 'americana2';
var hostName = 'https://bloobstorage.blob.core.windows.net';

var url = blobService.getUrl(containerName, 'images/PNG', null, hostName);
console.log(url);
}

}


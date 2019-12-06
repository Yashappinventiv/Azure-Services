const CRUD = require('../azure-storage-js-v10-quickstart/azure-storage-js-v10-quickstart-v12/index');
const { AbortController } = require('@azure/abort-controller');


const blockBlobClient
const aborter 
const containerClient

async function executeAzure() {
    const containerName = "bloobstorage";
    const blobName = "quickstart.txt";
    const content = "images_americana";
    

    const credentials = new StorageSharedKeyCredential("bloobstorage", "2JnjQ7U6rC4mFobPG6oq2ycUM/tr7zGmGH3GieJ+F3QEHxG6+XSPH3mPnYs3JlAB1TJoLT8KoJcrrlJsp7FP3A==");

    const blobServiceClient = new BlobServiceClient(`https://${'bloobstorage'}.blob.core.windows.net`, credentials);

    containerClient = blobServiceClient.getContainerClient(containerName);
    const blobClient = containerClient.getBlobClient(blobName);
    
    blockBlobClient = blobClient.getBlockBlobClient();
    aborter = AbortController.timeout(30 * ONE_MINUTE);

    await containerClient.create();

}




async function putrequest() {
    const localFilePath  = '../images'

  await  CRUD.updateLocalFile(aborter , containerClient , localFilePath )


}


// async function getrequest(){
//     await CRUD.
// }

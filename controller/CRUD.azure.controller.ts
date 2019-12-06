import { BasicAzureCredentials } from './basis.controller';
import { Database } from '../constants/app.constant';
import path from 'path';
import fs from 'fs';
const unzipper = require('unzipper');

export class CRUD_Azure extends BasicAzureCredentials {
    constructor() {
        super();
    }

    async uploadImageAndVideo(filepath: string, mineType?: string, ) {

        //mine function
        let mineT = 'image/png';

        switch (mineT || mineType) {
            case Database.MIMETYPE.JPG: {
                this.uploadLocalFile('images/JPG', filepath)
                break;
            }
            case Database.MIMETYPE.PNG: {
                console.log("png.....................");
                console.log(filepath)
                this.uploadLocalFile('images/PNG', filepath)
                break;
            }

            case Database.MIMETYPE.VIDEO: {
                this.uploadLocalFile('video/Video', filepath)
                break;
            }

            case Database.MIMETYPE.VIDEO_MP4: {
                this.uploadLocalFile('video/videoMp4', filepath)
                break;
            }

        }


    }


    async getAllContainerNames() {
        this.showContainerNames();
    }

    async deleteConatiner() {
        let response = await this.deleteContainerClient();
        console.log(response);
    }

    async zipfiles(zipfile ?:  any) {
        const newfile = 'new' + Math.random().toString()
        await fs.createReadStream('/home/appinventiv/Desktop/azure-services/images.zip')
            .pipe(unzipper.Extract({ path: "/home/appinventiv/Desktop/azure-services/output" }))

        let file = fs.readdirSync('/home/appinventiv/Desktop/azure-services/output/images')
        console.log(file);
        file.forEach((file) => {
            let fileext = path.extname(`/home/appinventiv/Desktop/azure-services/output/images/${file}`)
            let filepath = `/home/appinventiv/Desktop/azure-services/output/images/${file}`
            this.uploadImageAndVideo(filepath.toString() , fileext.toString()  )
            console.log(fileext, filepath)
        })

    }

    async getUrlAll() {
        //  let response = await this.getUrl('americana2', 'images/PNG');
        //  console.log(response);
        this.getUrl1() ;
    }


}

export const CRUD_AzureE = new CRUD_Azure();
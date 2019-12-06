import koa from 'koa'
import  Router from 'koa-router'
import {CRUD_AzureE} from './controller'

const app = new koa() ;
const router = new Router();

router.get('/' , (ctx) => {
    CRUD_AzureE.getAllContainerNames() ;
    ctx.body = "containers are"
    
})

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3000 , () => {
    console.log('connected');
})

router.put('/updateBlob'  , (ctx , next) => {
    CRUD_AzureE.uploadImageAndVideo('path') ;
    ctx.body = "containers updated"
} )

router.get('/zip' , (ctx) => {
    CRUD_AzureE.zipfiles() ;
    ctx.body =  "zip file uploaded"
})

router.delete('/del' , (ctx) => {
    CRUD_AzureE.deleteContainerClient() ;
    ctx.body = "deleted client"
})

router.get('/url' , (ctx) => {
    CRUD_AzureE.getUrlAll() ;
    ctx.body = "response is....."
})

router.get('/add' , (ctx) => {
    CRUD_AzureE.addNewConatiner() ;
    ctx.body = "created"
})

router.get('/blob' , (ctx) => {
    CRUD_AzureE.showBlobNames() ;
    ctx.body = "done......"
})


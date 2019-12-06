"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var koa_1 = __importDefault(require("koa"));
var koa_router_1 = __importDefault(require("koa-router"));
var controller_1 = require("./controller");
var app = new koa_1.default();
var router = new koa_router_1.default();
router.get('/', function (ctx) {
    controller_1.CRUD_AzureE.getAllContainerNames();
    ctx.body = "containers are";
});
router.put('/updateBlob', function (ctx, next) {
    controller_1.CRUD_AzureE.uploadImageAndVideo('path');
    ctx.body = "containers updated";
});
router.get('/zip', function (ctx) {
    controller_1.CRUD_AzureE.zipfiles();
    ctx.body = "zip file uploaded";
});
router.delete('/del', function (ctx) {
    controller_1.CRUD_AzureE.deleteContainerClient();
    ctx.body = "deleted client";
});
router.get('/url', function (ctx) {
    controller_1.CRUD_AzureE.getUrlAll();
    ctx.body = "response is.....";
});
router.get('/add', function (ctx) {
    controller_1.CRUD_AzureE.addNewConatiner();
    ctx.body = "created";
});
router.get('/blob', function (ctx) {
    controller_1.CRUD_AzureE.showBlobNames();
    ctx.body = "done......";
});
app
    .use(router.routes())
    .use(router.allowedMethods());
app.listen(3000, function () {
    console.log('connected');
});

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var abort_controller_1 = require("@azure/abort-controller");
var storage_blob_1 = require("@azure/storage-blob");
var azureStorage = require('azure-storage');
var fs = require("fs");
var path = require("path");
var DefaultAzureCredential = require("@azure/identity").DefaultAzureCredential;
var STORAGE_ACCOUNT_NAME = process.env.AZURE_STORAGE_ACCOUNT_NAME;
var ACCOUNT_ACCESS_KEY = process.env.AZURE_STORAGE_ACCOUNT_ACCESS_KEY;
var BasicAzureCredentials = /** @class */ (function () {
    function BasicAzureCredentials() {
        var defaultAzureCredential = new DefaultAzureCredential();
        var credentials = new storage_blob_1.StorageSharedKeyCredential("bloobstorage", "2JnjQ7U6rC4mFobPG6oq2ycUM/tr7zGmGH3GieJ+F3QEHxG6+XSPH3mPnYs3JlAB1TJoLT8KoJcrrlJsp7FP3A==");
        this.blobServiceClient = new storage_blob_1.BlobServiceClient("https://" + 'bloobstorage' + ".blob.core.windows.net", credentials);
        this.containerClient = this.blobServiceClient.getContainerClient('americana2');
    }
    BasicAzureCredentials.prototype.addNewConatiner = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.containerClient.create()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    BasicAzureCredentials.prototype.showContainerNames = function () {
        var e_1, _a;
        return __awaiter(this, void 0, void 0, function () {
            var aborter, iter, iter_1, iter_1_1, container, e_1_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        aborter = abort_controller_1.AbortController.timeout(30 * 60 * 1000);
                        return [4 /*yield*/, this.blobServiceClient.listContainers(aborter)];
                    case 1:
                        iter = _b.sent();
                        _b.label = 2;
                    case 2:
                        _b.trys.push([2, 7, 8, 13]);
                        iter_1 = __asyncValues(iter);
                        _b.label = 3;
                    case 3: return [4 /*yield*/, iter_1.next()];
                    case 4:
                        if (!(iter_1_1 = _b.sent(), !iter_1_1.done)) return [3 /*break*/, 6];
                        container = iter_1_1.value;
                        console.log(" - " + container.name);
                        _b.label = 5;
                    case 5: return [3 /*break*/, 3];
                    case 6: return [3 /*break*/, 13];
                    case 7:
                        e_1_1 = _b.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 13];
                    case 8:
                        _b.trys.push([8, , 11, 12]);
                        if (!(iter_1_1 && !iter_1_1.done && (_a = iter_1.return))) return [3 /*break*/, 10];
                        return [4 /*yield*/, _a.call(iter_1)];
                    case 9:
                        _b.sent();
                        _b.label = 10;
                    case 10: return [3 /*break*/, 12];
                    case 11:
                        if (e_1) throw e_1.error;
                        return [7 /*endfinally*/];
                    case 12: return [7 /*endfinally*/];
                    case 13: return [2 /*return*/];
                }
            });
        });
    };
    BasicAzureCredentials.prototype.showBlobNames = function () {
        var e_2, _a;
        return __awaiter(this, void 0, void 0, function () {
            var aborter, iter, iter_2, iter_2_1, blob, e_2_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        aborter = abort_controller_1.AbortController.timeout(30 * 60 * 1000);
                        return [4 /*yield*/, this.containerClient.listBlobsFlat(aborter)];
                    case 1:
                        iter = _b.sent();
                        _b.label = 2;
                    case 2:
                        _b.trys.push([2, 7, 8, 13]);
                        iter_2 = __asyncValues(iter);
                        _b.label = 3;
                    case 3: return [4 /*yield*/, iter_2.next()];
                    case 4:
                        if (!(iter_2_1 = _b.sent(), !iter_2_1.done)) return [3 /*break*/, 6];
                        blob = iter_2_1.value;
                        console.log(" - " + blob.name);
                        _b.label = 5;
                    case 5: return [3 /*break*/, 3];
                    case 6: return [3 /*break*/, 13];
                    case 7:
                        e_2_1 = _b.sent();
                        e_2 = { error: e_2_1 };
                        return [3 /*break*/, 13];
                    case 8:
                        _b.trys.push([8, , 11, 12]);
                        if (!(iter_2_1 && !iter_2_1.done && (_a = iter_2.return))) return [3 /*break*/, 10];
                        return [4 /*yield*/, _a.call(iter_2)];
                    case 9:
                        _b.sent();
                        _b.label = 10;
                    case 10: return [3 /*break*/, 12];
                    case 11:
                        if (e_2) throw e_2.error;
                        return [7 /*endfinally*/];
                    case 12: return [7 /*endfinally*/];
                    case 13: return [2 /*return*/];
                }
            });
        });
    };
    BasicAzureCredentials.prototype.getUrl = function (containerName, blobName) {
        return __awaiter(this, void 0, void 0, function () {
            var blobService, startDate, expiryDate, sharedAccessPolicy;
            return __generator(this, function (_a) {
                blobService = azureStorage.createBlobService('bloobstorage', '2JnjQ7U6rC4mFobPG6oq2ycUM/tr7zGmGH3GieJ+F3QEHxG6+XSPH3mPnYs3JlAB1TJoLT8KoJcrrlJsp7FP3A==');
                startDate = new Date();
                expiryDate = new Date(startDate);
                expiryDate.setMinutes(startDate.getMinutes() + 43200);
                sharedAccessPolicy = {
                    AccessPolicy: {
                        Permissions: azureStorage.BlobUtilities.SharedAccessPermissions.READ,
                        Start: startDate,
                        Expiry: expiryDate
                    }
                };
                return [2 /*return*/];
            });
        });
    };
    BasicAzureCredentials.prototype.uploadLocalFile = function (fileName, filePath) {
        return __awaiter(this, void 0, void 0, function () {
            var filePaths, blobClient, blockBlobClient, aborter, e_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        filePaths = path.resolve(filePath);
                        blobClient = this.containerClient.getBlobClient(fileName);
                        blockBlobClient = blobClient.getBlockBlobClient();
                        aborter = abort_controller_1.AbortController.timeout(30 * 60 * 1000);
                        return [4 /*yield*/, blockBlobClient.uploadFile(filePaths, aborter)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        e_3 = _a.sent();
                        console.log('..............upload basic', e_3);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    BasicAzureCredentials.prototype.deleteBlockBlobClient = function (blobName) {
        return __awaiter(this, void 0, void 0, function () {
            var blobClient, blockBlobClient, aborter;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        blobClient = this.containerClient.getBlobClient(blobName);
                        blockBlobClient = blobClient.getBlockBlobClient();
                        aborter = abort_controller_1.AbortController.timeout(30 * 60 * 1000);
                        return [4 /*yield*/, blockBlobClient.delete(aborter)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, "Block blob blobName is deleted"];
                }
            });
        });
    };
    BasicAzureCredentials.prototype.deleteContainerClient = function () {
        return __awaiter(this, void 0, void 0, function () {
            var aborter;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        aborter = abort_controller_1.AbortController.timeout(30 * 60 * 1000);
                        return [4 /*yield*/, this.containerClient.delete(aborter)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, "Container ContainerName is deleted"];
                }
            });
        });
    };
    BasicAzureCredentials.prototype.getUrl1 = function () {
        return __awaiter(this, void 0, void 0, function () {
            var blobService, containerName, hostName, url;
            return __generator(this, function (_a) {
                blobService = azureStorage.createBlobService('bloobstorage', '2JnjQ7U6rC4mFobPG6oq2ycUM/tr7zGmGH3GieJ+F3QEHxG6+XSPH3mPnYs3JlAB1TJoLT8KoJcrrlJsp7FP3A==');
                containerName = 'americana2';
                hostName = 'https://bloobstorage.blob.core.windows.net';
                url = blobService.getUrl(containerName, 'images/PNG', null, hostName);
                console.log(url);
                return [2 /*return*/];
            });
        });
    };
    return BasicAzureCredentials;
}());
exports.BasicAzureCredentials = BasicAzureCredentials;

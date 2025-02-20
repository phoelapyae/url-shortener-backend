"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedirectUrl = exports.DeleteUrl = exports.GenerateUrl = exports.GetAll = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const handler_1 = require("../resources/handler");
const shortener_service_1 = require("../services/shortener.service");
dotenv_1.default.config();
const GetAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    (0, shortener_service_1.urlList)().then((data) => (0, handler_1.handleSuccess)(res, data))
        .catch((error) => (0, handler_1.handleError)(res, error));
});
exports.GetAll = GetAll;
const GenerateUrl = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { long_url } = req.body;
    (0, handler_1.handleCheckUrl)(long_url).then(() => (0, shortener_service_1.getByLongUrl)(long_url))
        .then((data) => (0, shortener_service_1.checkAndGenerateUrl)(data, long_url))
        .then((data) => (0, handler_1.handleSuccess)(res, data))
        .catch((error) => (0, handler_1.handleError)(res, error, 400));
});
exports.GenerateUrl = GenerateUrl;
const DeleteUrl = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    (0, shortener_service_1.getById)(id).then((data) => (0, handler_1.handleExist)(data))
        .then(() => (0, shortener_service_1.deleteById)(id))
        .then((data) => (0, handler_1.handleSuccess)(res, data))
        .catch((error) => (0, handler_1.handleError)(res, error));
});
exports.DeleteUrl = DeleteUrl;
const RedirectUrl = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { short_url } = req.params;
    (0, shortener_service_1.getByUrl)(short_url).then((data) => (0, handler_1.handleExist)(data))
        .then((currentUrl) => (0, shortener_service_1.redirectUrl)(res, currentUrl))
        .catch((error) => (0, handler_1.handleError)(res, error, 404));
});
exports.RedirectUrl = RedirectUrl;

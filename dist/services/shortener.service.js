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
exports.redirectUrl = exports.deleteById = exports.checkAndGenerateUrl = exports.generateUrl = exports.createUrl = exports.getByLongUrl = exports.getByUrl = exports.getById = exports.urlList = void 0;
const shortener_1 = __importDefault(require("../models/shortener"));
const nanoid_1 = require("../utils/nanoid");
const HOST = process.env.HOST;
const urlList = () => {
    return shortener_1.default.findAll({ order: [['createdAt', 'DESC']] });
};
exports.urlList = urlList;
const getById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield shortener_1.default.findOne({ where: { id } });
});
exports.getById = getById;
const getByUrl = (short_url) => __awaiter(void 0, void 0, void 0, function* () {
    return yield shortener_1.default.findOne({ where: { short_url } });
});
exports.getByUrl = getByUrl;
const getByLongUrl = (long_url) => __awaiter(void 0, void 0, void 0, function* () {
    return yield shortener_1.default.findOne({ where: { long_url } });
});
exports.getByLongUrl = getByLongUrl;
const createUrl = (long_url) => __awaiter(void 0, void 0, void 0, function* () {
    const short_url = (0, nanoid_1.nanoid)();
    return yield shortener_1.default.create({ short_url, long_url });
});
exports.createUrl = createUrl;
const generateUrl = (url) => {
    return `${HOST}/${url.short_url}`;
};
exports.generateUrl = generateUrl;
const checkAndGenerateUrl = (data, long_url) => __awaiter(void 0, void 0, void 0, function* () {
    if (data) {
        return generateUrl(data);
    }
    else {
        const generatedUrl = yield createUrl(long_url);
        return generateUrl(generatedUrl);
    }
});
exports.checkAndGenerateUrl = checkAndGenerateUrl;
const deleteById = (id) => {
    return shortener_1.default.destroy({ where: { id } });
};
exports.deleteById = deleteById;
const redirectUrl = (res, url) => {
    res.redirect(url.long_url);
};
exports.redirectUrl = redirectUrl;

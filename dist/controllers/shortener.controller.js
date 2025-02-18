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
exports.redirectUrl = exports.createUrl = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const shortener_1 = __importDefault(require("../models/shortener"));
dotenv_1.default.config();
const HOST = process.env.HOST;
const getUrls = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
});
const createUrl = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { long_url } = req.body;
        const currentUrl = yield shortener_1.default.findOne({ where: { long_url } });
        if (currentUrl) {
            return res.json({ short_url: `${HOST}/${currentUrl.short_url}` });
        }
        // const short_url = nanoid(6);
        const short_url = '123456';
        const url = yield shortener_1.default.create({ short_url, long_url });
        res.json({ short_url: `${HOST}/${url.short_url}` });
    }
    catch (error) {
        res.status(500).json({ error: "Internal server error." });
    }
});
exports.createUrl = createUrl;
// const getUrl = async (req: Request, res: Response) => {
// }
// const updateUrl = async (req: Request, res: Response) => {
// }
// const deleteUrl = async (req: Request, res: Response) => {
// }
const redirectUrl = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { short_url } = req.params;
        const currentUrl = yield shortener_1.default.findOne({ where: { short_url } });
        if (currentUrl) {
            res.redirect(currentUrl.long_url);
        }
        else {
            res.status(404).json({ error: 'Url not found.' });
        }
    }
    catch (error) {
        res.status(500).json({ error: 'Internal server error.' });
    }
});
exports.redirectUrl = redirectUrl;

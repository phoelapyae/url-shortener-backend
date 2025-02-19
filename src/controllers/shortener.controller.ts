import dotenv from "dotenv";
import { Request, Response } from "express";

import {
    handleCheckUrl,
    handleError,
    handleExist,
    handleSuccess
} from "../resources/handler";

import {
    checkAndGenerateUrl,
    deleteById,
    getById,
    getByLongUrl,
    getByUrl,
    redirectUrl,
    urlList
} from "../services/shortener.service";

dotenv.config();

const GetAll = async (req: Request, res: Response) => {
    urlList().then((data) => handleSuccess(res, data))
        .catch((error) => handleError(res, error))
}

const GenerateUrl = async (req: Request, res: Response) => {
    const { long_url } = req.body;

    handleCheckUrl(long_url).then(() => getByLongUrl(long_url))
        .then((data) => checkAndGenerateUrl(data, long_url))
        .then((data) => handleSuccess(res, data))
        .catch((error) => handleError(res, error));
}

const DeleteUrl = async (req: Request, res: Response) => {
    const { id } = req.params;
    
    getById(id).then((data) => handleExist(data))
        .then(() => deleteById(id))
        .then((data) => handleSuccess(res, data))
        .catch((error) => handleError(res, error));
}

const RedirectUrl = async (req: Request, res: Response) => {
    const { short_url } = req.params;

    getByUrl(short_url).then((data) => handleExist(data))
        .then((currentUrl) => redirectUrl(res, currentUrl))
        .catch((error) => handleError(res, error, 404));
}

export {
    GetAll,
    GenerateUrl,
    DeleteUrl,
    RedirectUrl
}
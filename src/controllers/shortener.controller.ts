import dotenv from "dotenv";
import { Request, response, Response } from "express";
import URL from "../models/shortener";
import { nanoid } from "nanoid";

import {
    handleError,
    handleExist,
    handleSuccess
} from "../resources/handler";

import {
    deleteById,
    getById,
    urlList
} from "../services/shortener.service";

dotenv.config();

const HOST = process.env.HOST as string;

const GetAll = async (req: Request, res: Response) => {
    urlList().then((data) => handleSuccess(res, data))
        .catch((error) => handleError(res, error))
}

const GenerateUrl = async (req: Request, res: Response) => {
    try {
        const { long_url } = req.body;
    
        const currentUrl = await URL.findOne({where: {long_url}});

        if (currentUrl)
        {
            return res.json({ short_url: `${HOST}/${currentUrl.short_url}` });
        }

        // const short_url = nanoid(6);
        const short_url = '123456';

        const url = await URL.create({ short_url, long_url });
        
        res.json({ short_url: `${HOST}/${url.short_url}` });
    }
    catch (error)
    {
        res.status(500).json({error: "Internal server error."})
    }
}

const DeleteUrl = async (req: Request, res: Response) => {
    // try {
        const { id } = req.params;

        // const url = await URL.findOne({ where: { id } });

        // if (!url)
        // {
        //     res.status(404).json({ error: 'Url not found.' });
        // }

        // await URL.destroy({where: { id }});

        // res.json({ message: 'Deleted url successfully.' });

    getById(id).then((data) => handleExist(data))
        .then(() => deleteById(id))
        .then((data) => handleSuccess(res, data))
        .catch((error) => handleError(res, error));
    
    // } 
    // catch (error)
    // {
    //     res.status(500).json({ error: 'Internal server error.' });
    // }
}

const RedirectUrl = async (req: Request, res: Response) => {
    try {
        const { short_url } = req.params;
    
        const currentUrl = await URL.findOne({ where: { short_url } });

        if (currentUrl)
        {
            res.redirect(currentUrl.long_url);
        }
        else
        {
            res.status(404).json({ error: 'Url not found.' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal server error.' });
    }
}

export {
    GetAll,
    GenerateUrl,
    DeleteUrl,
    RedirectUrl
}
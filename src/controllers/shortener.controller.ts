import dotenv from "dotenv";
import { Request, Response } from "express";
import URL from "../models/shortener";
import { nanoid } from "nanoid";

dotenv.config();

const HOST = process.env.HOST as string;

const getUrls = async (req: Request, res: Response) => {

}

const createUrl = async (req: Request, res: Response) => {
    try {
        const { long_url } = req.body;
    
        const currentUrl = await URL.findOne({where: {long_url}});

        if (currentUrl)
        {
            return res.json({ short_url: `${HOST}/${currentUrl.short_url}` });
        }

        const short_url = nanoid(6);

        const url = await URL.create({ short_url, long_url });
        
        res.json({ short_url: `${HOST}/${url.short_url}` });
    }
    catch (error)
    {
        res.status(500).json({error: "Internal server error."})
    }
}

// const getUrl = async (req: Request, res: Response) => {
    
// }

// const updateUrl = async (req: Request, res: Response) => {

// }

// const deleteUrl = async (req: Request, res: Response) => {
    
// }

const redirectUrl = async (req: Request, res: Response) => {
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
    // getUrls,
    createUrl,
    // getUrl,
    // updateUrl,
    // deleteUrl,
    redirectUrl
}
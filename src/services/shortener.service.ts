import { Response } from "express";
import URL from "../models/shortener";
import { nanoid } from "../utils/nanoid";
const HOST = process.env.HOST as string;

const urlList = async () => {
    return await URL.findAll({ order: [['createdAt', 'DESC']] });
}

const getById = async (id: string) => {
    return await URL.findOne({ where: { id } });
}

const getByUrl = async (short_url: string) => {
    return await URL.findOne({ where: { short_url } });
}

const getByLongUrl = async (long_url: string) => {
    return await URL.findOne({ where: { long_url } });
}

const createUrl = async (long_url: string) => {
    const short_url = nanoid();
    return await URL.create({ short_url, long_url });
}

const generateUrl = (url: { short_url: string }) => {
    return `${HOST}/api/${url.short_url}`
}

const checkAndGenerateUrl = async (data: any, long_url: string) => {
    if (data)
    {
        return generateUrl(data);
    }
    else
    {
        const generatedUrl = await createUrl(long_url);
        return generateUrl(generatedUrl);
    }
}

const deleteById = async(id: string) => {
    const deletedUrl = await URL.destroy({ where: { id } });

    if (deletedUrl) {
        return { 'message': 'Deleted url successfully.' }
    }
}

const redirectUrl = (res: Response, url: any) => {
    res.redirect(url.long_url);
}

export {
    urlList,
    getById,
    getByUrl,
    getByLongUrl,
    createUrl,
    generateUrl,
    checkAndGenerateUrl,
    deleteById,
    redirectUrl
}
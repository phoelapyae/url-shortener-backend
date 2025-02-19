import { Response } from "express";
import URL from "../models/shortener";

const urlList = () => {
    return URL.findAll();
}

const getById = async (id: string) => {
    return await URL.findOne({ where: { id } });
}

const deleteById = (id: string) => {
   return URL.destroy({where: { id }});
}

const redirectUrl = (res: Response, url: any) => {
    res.redirect(url.long_url);
}

export {
    urlList,
    getById,
    deleteById
}
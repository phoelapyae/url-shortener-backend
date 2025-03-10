import { Response } from "express";

const handleResponse = function (res: Response, response: any) {
    if (!res.headersSent) {
        res.status(response.status).json(response.data);
    }
}

const handleSuccess = (res: Response, data: any) => {
    let response = {
        status: 200,
        data
    }
    res.status(response.status).json(response);
}

const handleError = function (res: Response, error: any, status = 500) {
    let response = {
        status,
        data: error
    };
    handleResponse(res, response);
}

const handleNotFound = function (res: Response) {
    let response = {
        status: 404,
        data: { "error": "not found" }
    };
    
    handleResponse(res, response);
}

const handleExist = function (data: any) {
    return new Promise((resolve, reject) => {
        if (data == null)
        {
            reject({
                "status": 404,
                "error": "Not found data.",
            });
        }
        else
        {
            resolve(data);
        }
    })
}

const handleCheckUrl = (url: string) => {

    return new Promise((resolve, reject) => {
        if (url == null || url == "" || !checkUrl(url))
        {
            reject({
                "status": 400,
                "error": "Requested long_url is not valid.",
            });
        }
        else
        {
            resolve(url);
        }
    });
}

const checkUrl = (url: string) => {
    try {
        new URL(url);
        return true;
    }
    catch (e)
    {
        return false;
    }
}

export {
    handleSuccess,
    handleError,
    handleNotFound,
    handleExist,
    handleCheckUrl
}
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleCheckUrl = exports.handleExist = exports.handleNotFound = exports.handleError = exports.handleSuccess = void 0;
const handleResponse = function (res, response) {
    if (!res.headersSent) {
        res.status(response.status).json(response.data);
    }
};
const handleSuccess = (res, data) => {
    let response = {
        status: 200,
        data
    };
    res.status(response.status).json(response);
};
exports.handleSuccess = handleSuccess;
const handleError = function (res, error, status = 500) {
    let response = {
        status,
        data: error
    };
    handleResponse(res, response);
};
exports.handleError = handleError;
const handleNotFound = function (res) {
    let response = {
        status: 404,
        data: { "error": "not found" }
    };
    handleResponse(res, response);
};
exports.handleNotFound = handleNotFound;
const handleExist = function (data) {
    return new Promise((resolve, reject) => {
        if (data == null) {
            reject({
                "status": 404,
                "error": "Not found data.",
            });
        }
        else {
            resolve(data);
        }
    });
};
exports.handleExist = handleExist;
const handleCheckUrl = (url) => {
    return new Promise((resolve, reject) => {
        if (url == null || url == "" || !checkUrl(url)) {
            reject({
                "status": 400,
                "error": "Invalid url.",
            });
        }
        else {
            resolve(url);
        }
    });
};
exports.handleCheckUrl = handleCheckUrl;
const checkUrl = (url) => {
    try {
        new URL(url);
        return true;
    }
    catch (e) {
        return false;
    }
};

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const shortenerController = require("../controllers/shortener.controller");
router.post("/shorteners", shortenerController.createUrl);
router.get("/shorteners/:short_url", shortenerController.redirectUrl);
exports.default = router;

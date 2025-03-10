"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const shortenerController = require("../controllers/shortener.controller");
router.get("/shorteners", shortenerController.GetAll);
router.post("/shorteners", shortenerController.GenerateUrl);
router.delete("/shorteners/:id", shortenerController.DeleteUrl);
router.get("/shorteners/:short_url", shortenerController.RedirectUrl);
exports.default = router;

import { Router } from "express";
const router = Router();

const shortenerController = require("../controllers/shortener.controller");

router.post("/shorteners", shortenerController.createUrl);

router.get("/shorteners/:short_url", shortenerController.redirectUrl);

export default router;
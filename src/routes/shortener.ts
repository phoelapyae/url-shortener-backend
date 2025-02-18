import { Router } from "express";
const router = Router();

const shortenerController = require("../controllers/shortener.controller");

router.get("/shorteners", shortenerController.GetAll);

router.post("/shorteners", shortenerController.GenerateUrl);

router.delete("/shorteners/:id", shortenerController.DeleteUrl);

router.get("/shorteners/:short_url", shortenerController.RedirectUrl);

export default router;
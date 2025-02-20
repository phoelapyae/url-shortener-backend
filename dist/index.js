"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const models_1 = require("./models");
const PORT = process.env.PORT || 8000;
(0, models_1.syncDB)().then(() => {
    app_1.default.listen(PORT, function () {
        console.log(`Server is running at port ${PORT}.`);
    });
});

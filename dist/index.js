"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app = require('./app');
const models_1 = require("./models");
const PORT = process.env.PORT || 8000;
(0, models_1.syncDB)().then(() => {
    app.listen(PORT, function () {
        console.log(`Server is running at port ${PORT}.`);
    });
});

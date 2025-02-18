import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { syncDB } from "./models";
import routes from "./routes/shortener";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api", routes);

const PORT = process.env.PORT || 8000;

syncDB().then(() => {
    app.listen(PORT, function () {
        console.log(`Server is running at port ${PORT}.`);
    })
})
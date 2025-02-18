import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import routes from "./routes/shortener";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api", routes);

export default app;
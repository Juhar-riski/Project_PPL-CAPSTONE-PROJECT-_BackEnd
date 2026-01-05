import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import cors from "cors";
import errorHandler from "./middlewares/errorHandler.js";
import configureRoutes from "./routes/index.js";

const app = express();
app.use(morgan('combined'));
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

configureRoutes(app)

app.use(errorHandler);

dotenv.config();

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
});
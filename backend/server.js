import express from "express";
import dotenv from "dotenv";

// import db from "./config/db.js";

dotenv.config();

const app = express();
const PORT  = process.env.PORT || 5000;

app.use(express.json());

app.get("/", (req, res) => {
    return res.send("<h1>Hello, World!</h1>");
});

app.listen(PORT, () => {
    console.log("Server started at http://localhost:" + PORT);
});
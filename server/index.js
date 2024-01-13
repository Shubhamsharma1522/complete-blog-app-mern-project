import express from "express";

import dotenv from "dotenv";

import cors from "cors";

import bodyParser from "body-parser";

import Connection from "./database/db.js";

import Router from "./routes/route.js";
import { v2 as cloudinary } from "cloudinary";

dotenv.config();

const app = express();

app.use(cors());

// app.use(bodyParser.json({ extended: true }));
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb" }));
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

app.use("/", Router);

const PORT = 8000;
app.listen(PORT, () =>
  console.log(`server is running successfully on PORT ${PORT}`)
);

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

Connection(USERNAME, PASSWORD);

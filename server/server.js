require("dotenv").config({});

const express = require("express");
const connectDB = require("./db/connect");
const cors = require("cors");

const postRoutes = require("./routes/Post");
const userRoutes = require("./routes/Auth");

const app = express();
const port = 8000;

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
  })
);
app.use(express.json({ limit: "10mb" }));
app.use("/api/auth", userRoutes);
app.use("/api/post", postRoutes);

(() => connectDB(app))();

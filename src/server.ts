import express from "express";
import router from "./router";
import morgan from "morgan";
import cors from "cors";
import { protect } from "./modules/auth";
import { createNewUser, signin } from "./handlers/user";

const app = express(); // Makes an api

app.use(cors());
app.use(morgan("dev")); // For logging
app.use(express.json()); // Allows clients to send json
app.use(express.urlencoded({ extended: true })); // Allows client to add query string parameters and decodes and encodes it properlly

app.get("/", (req, res) => {
  console.log("hello from express");
  res.status(200);
  res.json({ message: "hello" });
});

app.use("/api", protect, router); // Allows you to aply some type of global configuration

app.post("/user", createNewUser);
app.post("/signin", signin);

app.use((err, req, res, next) => {
  if (err.type === "auth") {
    res.status(401).json({ message: "unauthorized" });
  } else if (err.type === "input") {
    res.status(400).json({ message: "invalid input" });
  } else {
    res.status(500).json({ message: "oops thats on us" });
  }
});

export default app;

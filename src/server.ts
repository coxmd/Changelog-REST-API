import express from "express";
import router from './router';

const app = express(); // Makes an api

app.get("/", (req, res) => {
  console.log("hello from express");
  res.status(200);
  res.json({ message: "hello" });
});

app.use('/api', router) // Allows you to aply some type of global configuration

export default app;

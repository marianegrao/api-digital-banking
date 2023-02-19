import express from "express";

export const app = express();

app.use(express.json());

app.post("/start", (req, res) => {
  return res.status(201).send();
});

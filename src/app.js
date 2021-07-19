const express = require("express");
const sendMail = require("./sendMail");
const { body, validationResult } = require("express-validator");

const app = new express();

app.use(express.json());
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.html", {
    title: "Rishi's Portfolio",
    author: "Rishikesh Dubey",
  });
});

app.post(
  "/api/mail",
  body("name").notEmpty(),
  body("email").isEmail(),
  body("message").notEmpty(),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { name, email, message } = req.body;
    try {
      await sendMail({ name, email, message });
      res.status(200).json();
    } catch (error) {
      res.status(500).json(error);
    }
  }
);

module.exports = app;

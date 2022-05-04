const express = require("express");
const UserModel = require("./models/users/users.model");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
// import { User } from "./models/users/users.model.js";
const PORT = 4000;

app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
mongoose.connect(
  "mongodb+srv://Kendallbrown1021:Wap443jih1021@cluster0.chlte.mongodb.net/Bibliolater?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);
const connection = mongoose.connection;

connection.once("open", () => {});

app.get("/getUsers", (req, res) => {
  UserModel.find({}, (err, result) => {
    if (err) {
      res.json(err.message);
    } else {
      res.json(result);
    }
  });
});

app.post("/createUser", async (req, res) => {
  const user = req.body;
  const newUser = new UserModel(user);
  await newUser.save();

  res.json(user);
  console.log(user);
});

app.listen(PORT, () => {
  console.log("The server is running: " + PORT);
});

// ROUTES

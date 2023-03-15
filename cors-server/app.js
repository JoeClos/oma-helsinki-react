// import * as dotenv from "dotenv"
// require('dotenv').config()

const axios = require("axios");
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require('mongoose');
const UserModel = require('./models/Users')

const USER = process.env.DB_USER;
const PASSWORD = process.env.DB_PASSWORD;
const port = process.env.PORT || 8000;
app.use(express.json())
app.use(cors());

// mongoose.connect('mongodb+srv://USER:PASSWORD@cluster0.agps2lc.mongodb.net/userDB?retryWrites=true&w=majority')
mongoose.connect('mongodb+srv://narik:narik@cluster0.agps2lc.mongodb.net/userDB?retryWrites=true&w=majority')




app.get("/", (req, res) => {
  res.send("Welcome to CORS server 😁");
});

app.get("/getUsers", async (req, res) => {
    const users = await UserModel.find();
    console.log(users);
    res.json(users)
});

app.post("/createUser", async (req, res) => {
  const user = req.body
  const newUser = new UserModel(user);
  await newUser.save();

  res.json(user);
})

app.get("/v2/places", (request, response) => {
  response.header({ "Access-Control-Allow-Origin": "*" });
  response.header({'Cache-control': 'public, max-age=300'})
  axios
    .get("https://open-api.myhelsinki.fi/v2/places/")
    .then((res) => {
      response.send(res.data);
      // console.log(res.data)
    })
    .catch((err) => {
      console.log(err);
    });
});
app.get("/v2/place/:id", (request, response) => {
  response.header({"Access-Control-Allow-Origin": "*" });
  response.header({'Cache-control' : 'public, max-age=300'});

  axios
  .get(`https://open-api.myhelsinki.fi/v2/place/${Number(request.params.id)}`)
  .then((res) => {
    response.send(res.data);
  })
  .catch((err) => {
    response.status(400);
    response.send(err.config.data || "Couldn't fetch data!");
    console.log(err);
  });
  console.log(request.params)
})
app.listen(port, () => {
  console.log(`Now listening on port ${port}...`);
});

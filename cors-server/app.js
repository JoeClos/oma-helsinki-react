const axios = require("axios");
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://narik:narik@cluster0.agps2lc.mongodb.net/userDB?retryWrites=true&w=majority')

const port = process.env.PORT || 8000;
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to CORS server 😁");
});
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

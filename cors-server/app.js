const axios = require('axios');
const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send('Welcome to CORS server 😁')
})
app.get('/v2/places', (request, response) => {
    response.header({'Access-Control-Allow-Origin': '*'});
    axios.get('https://open-api.myhelsinki.fi/v2/places/')
    .then(res => {
        response.send(res.data)
        // console.log(res.data)
    })
    .catch(err => {
        console.log(err)
    })
    // response.send({ "msg": "This has CORS enabled 🎈" })
    // response.json({data: "Hello World"})

    })
app.listen(8080, () => {
    console.log('listening on port 8080')
})
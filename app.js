const bodyParser = require("body-parser");
const express = require("express");
const https = require("https");
const axios = require("axios");
const app = express();


app.use(express.static("public"));
app.set('view engine', 'ejs');


app.get("/", (req, res) => {


    res.sendFile(__dirname + "/index.html");


})



app.post("/", (req, res) => {


    url = "https://api.kanye.rest/";

    https.get(url, (response) => {

        response.on("data", data => {

            const qts = JSON.parse(data);
            const q = qts.quote;

            // res.write(`"${q}"`);
            // res.send();

            var option = {

                Joke: q,

            }

            res.render('quotes', option);


        })



    })



})



app.listen(3000, () => {



    console.log("server started on port 3000");
})
require('dotenv').config();
const express = require('express')
const app = express()
const axios = require("axios");
const cors = require("cors");
const bodyParser = require("body-parser");
const port = 3001

app.use(cors());
app.use(bodyParser.json());

app.get('/hello', (req, res) => {
    res.send('HELLO!')
})

app.get('/', (req, res) => {
    // console.log('123', req.query)
    try {        
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${req.query.city}&appid=${process.env.API_KEY}&units=metric`)
            .then((response) => {
                console.log('response', response.data)

                let modifiedData = {
                    status: response.data.weather[0].main,
                    description: response.data.weather[0].description,
                    temperature: response.data.main.temp,
                    wind: response.data.wind.speed,
                    humidity: response.data.main.humidity
                };
                res.json(modifiedData)

                
                // res.json(response.data)
        })

        // res.send('Hello world')
    } catch (err) {
        res.send({err: err});
    }
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
require('dotenv').config();
const express = require('express')
const app = express()
const axios = require("axios");
const port = 3001

app.get('/', (req, res) => {
    try {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Vancouver&appid=${process.env.API_KEY}&units=metric`)
            .then((response) => {
                console.log('response', response.data)
                res.send(response.data)
            })

        // res.send('hello world')
    } catch (err) {
        res.send({err: err});
    }
//   res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
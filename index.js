const express = require('express')
const app = express()
const port = 3001
require('dotenv').config();

app.get('/', (req, res) => {
    try {
        console.log('123', process.env.API_KEY)
        res.send('Hello World!')
    } catch (err) {
        res.send({err: err});
    }
//   res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
const bodyParser = require('body-parser');
const axios = require('axios');
const Controller = require('../database/controller.js')
const db = require('../database/db.js')

app.use('/', express.static(path.join(__dirname, '../public')));
app.use(bodyParser.json());

app.post('/books', (req,res) => {
    var title = req.body.title;
    var url = `https://api.nytimes.com/svc/books/v3/reviews.json?title=${title}&api-key=iwpyEfZ1JTGBi5JFAKXY1OjYrJ6tOOEm`
    axios.get(url)
    .then((response) => {
        console.log(response.data.results[0])
    })
})

app.listen(port, () => console.log(`Listening on port: ${port}`))
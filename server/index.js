const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
const bodyParser = require('body-parser');
const axios = require('axios');
const db = require('../database/db.js')

app.use('/', express.static(path.join(__dirname, '../public')));
app.use(bodyParser.json());

app.post('/books', (req, res) => {
    var title = req.body.title;
    var url = `https://api.nytimes.com/svc/books/v3/reviews.json?title=${title}&api-key=iwpyEfZ1JTGBi5JFAKXY1OjYrJ6tOOEm`
    axios.get(url)
        .then((response) => {
           var promise = response.data.results.map((result) => {
                db.save(result)
            })
            Promise.all(promise)
            .then(() => {
                res.send('success')
            })
        })
        .catch((err) => {
            console.log('caught error', err)
        })
})

app.get('/books', (req, res) => {
    console.log('reqqqq', req.query.title)
    db.retrieve(req.query.title)
    .then((result) => {
        res.send(result);
    })
})

app.listen(port, () => console.log(`Listening on port: ${port}`))
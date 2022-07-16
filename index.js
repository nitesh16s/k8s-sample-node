const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();

app.use(cors());

app.get('/hello', (req, res) => {
    try {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(resp => {
                return res.json(resp.data)
            })
    } catch (error) {
        return res.json(error)
    }
});

app.listen(3000, () =>
    console.log(`Example app listening on port 3000!`),
);
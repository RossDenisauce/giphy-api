const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');
const axios = require('axios');

router.get('/random', (req, res) => {
    let url = `http://api.giphy.com/v1/gifs/random?api_key=${process.env.GIPHY_KEY}`;
        axios.get(url).then(function (response) {
            res.send(response.data);
        }).catch((error) => {
            console.log(error);
        });
});

router.get('/search/:searchText', (req, res) => {          
    let url = 'http://api.giphy.com/v1/gifs/search';
    let config = {
        params: {
            api_key: process.env.GIPHY_KEY,
            q: req.params.searchText
        }
    }
    axios.get(url, config).then(response => {
        res.send(response.data);
    }).catch(response => {
        console.log(error);
        res.sendStatus(500);
    });
});

module.exports = router;
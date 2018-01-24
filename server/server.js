//Bring in Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 5000;
const favoritesRouter = require('./routes/favorites.router');

//Bring in static files/body parser
app.use(express.static('./server/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//Routes
app.use('/favorites', favoritesRouter)

//Setup Port
app.listen(PORT, ()=> {
    console.log('Server up and running on port: ', PORT); 
});
const express = require('express');
 
// We create our own server named app
// Express server will be handling requests and responses
const app = express();

app.use(express.static('public'));

// our first Route:
app.get('/home', (request, response, next) => response.sendFile(__dirname + '/views/home-page.html'));

app.get('/work', (request, response, next) => response.sendFile(__dirname + '/views/Works.html'));

app.get('/about', (request, response, next) => response.sendFile(__dirname + '/views/About.html'));

app.get('/photos', (request, response, next) => response.sendFile(__dirname + '/views/PhotoGallery.html'));
 
// Server Started
app.listen(3000, () => console.log('My first app listening on port 3000! '));
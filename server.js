const express = require('express');
const hbs = require('hbs');

const app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('demo', (text) => {
    return text.toUpperCase();
});

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.render('home.hbs', {
        pageTitle: 'Home page',
        welcome: 'Welcome to home page'
    })
});

app.get('/bad', (req, res) => {
    res.send({
        errorMessage: 'Something went wrong'
    })
});

app.listen(3000);

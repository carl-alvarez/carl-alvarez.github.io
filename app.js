const express = require ('express')
const app = express();
const port = 3000;

app.use(express.static('public'));

app.listen ( 3000, () => {
    console.log('Habemus Servidore!');
});

app.get('/', (req, res) => {

    res.sendFile(__dirname + '/views/home.html');

});


app.get('/login', (req, res) => {

    res.sendFile(__dirname + '/views/login.html');

});


app.get('/register' , (req, res) => {

    res.sendFile(__dirname + '/views/register.html');

});


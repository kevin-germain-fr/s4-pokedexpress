require('dotenv').config();

const express = require('express');
const app = express();
const session = require('express-session');

app.use(session({
    secret: process.env.SECRET_SESSION,
    saveUninitialized: false,
    resave: false
}));

app.set('view engine', 'ejs');
app.set('views', './app/views');
app.use(express.static('./app/public'));
app.use(express.urlencoded({ extended: true }));

const router = require('./router');
app.use(router);

app.listen(process.env.PORT, () => {
    console.log(`Server launched on http://localhost:${process.env.PORT}`);
});
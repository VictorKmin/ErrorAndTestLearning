const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const dovtenv = require('dotenv');
dovtenv.load();

console.log('ЧИТАЙ README');
console.log('ЧИТАЙ README');
console.log('ЧИТАЙ README');
const dataBase = require('./dataBase').getInstance();
dataBase.setModels();

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE,PATCH");
    res.header("Access-Control-Allow-Headers", "*");
    next();
});

app.use(express.json());
app.use(express.urlencoded({extends: true}));

const userRouter = require('./router/userRouter');
const houseRouter = require('./router/houseRouter');

app.use('/user', userRouter);
app.use('/house', houseRouter);


app.listen(port, (err) => {
    if (err) console.log(err);
    else console.log('Listen ' + port)
});

module.exports = app;

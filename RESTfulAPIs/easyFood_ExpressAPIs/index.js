const express = require('express');
const appConfig = require('./config/appConfig');
const mongoose = require('mongoose');
const fs = require('fs');
const cors = require('cors');
const app = new express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
//socket code
//const socketIO = require('socket.io');
let routePath = './routes';
let modelsPath = './models';
//added scocket code


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use(function (req, res, next) {
    res.io=io;
    next();
});
fs.readdirSync(modelsPath).forEach(file => {
    if (~file.indexOf('.js')) {
        require(modelsPath + '/' + file)
    }
});


fs.readdirSync(routePath).forEach(file => {
    if (~file.indexOf('.js')) {
        let route = require(routePath + '/' + file)
        route.setRoute(app)
    }
});

server.listen(process.env.PORT || 3000, () => {
    console.log(`Example app listening on ${process.env.PORT}!`)
    let db = mongoose.connect(appConfig.db.uri, { useCreateIndex: true, useFindAndModify: false, useUnifiedTopology: true, useNewUrlParser: true })
});

//const io = socketIO(server);
//changed code
io.on('connection', (socket) => {
    console.log('Client connected');
    socket.on('disconnect', () => console.log('Client disconnected'));
});

mongoose.connection.on('error', (error) => {

    console.log("database connection error");
    console.log(error);

})

mongoose.connection.on('open', (err) => {
    if (err) {
        console.log("database error");
        console.log(err);
    }
    else {
        console.log("database opened succesfully");
    }
})


//changed code
setInterval(() => io.emit('time', new Date().toTimeString()), 3000);

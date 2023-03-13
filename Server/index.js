"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var express = require("express");
var user = require("./User");
var app = express();
mongoose.connect('mongodb://localhost:27017/login2023').then(function () {
    console.log('Connected to MongoDB');
    return user.getModel().findOne({ username: 'BassHound' });
}).then(function (doc) {
    if (doc) {
        console.log('The Admin User already exists');
        return;
    }
    console.log('Creating the Admin User');
    var model = user.getModel();
    var data = {
        username: 'BassHound',
        password: 'admin',
        email: 'basso.andrea.96@gmail.com',
        date: new Date()
    };
    var andrea = new model(data);
    return andrea.save();
});
// JWT token...
app.get('/', function (req, res) {
    res.status(200).json({ api_version: '1.0', author: 'BassHound' });
});
app.get('/show', function (req, res) {
    res.send("Hello World!");
});
app.listen(3000);
//# sourceMappingURL=index.js.map
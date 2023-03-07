"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var express = require("express");
var user = require("./User");
var app = express();
mongoose.connect('mongodb://localhost:27017/login2023');
app.get('/', function (req, res) {
    res.send("Hello World!");
});
app.listen(3000);
// function with express to inser users ....
var model = user.getModel();
var data = {
    username: 'BassHound',
    password: 'admin',
    email: 'basso.andrea.96@gmail.com',
    date: new Date()
};
var andrea = new model(data);
andrea.save();
//# sourceMappingURL=index.js.map
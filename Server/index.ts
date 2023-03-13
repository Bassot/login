import * as mongoose from 'mongoose';
import * as express from 'express';
import * as user from './User';
import * as bodyParser from "body-parser";
import jsonWebToken = require('jsonwebtoken');
import * as jwt from 'express-jwt';
import colors = require('colors');
colors.enabled = true;
/* FILE .ENV */
const dotenv = require('dotenv');
//import dotenv from 'dotenv';
dotenv.config();
//console.log(process.env);
/*
if (dotenv.error) {
    console.log("Unable to load \".env\" file. Please provide one to store the JWT secret key".red);
    process.exit(-1);
} else if( !process.env.JWT_SECRET ) {
    console.log("\".env\" file loaded but JWT_SECRET=<secret> key-value pair was not found".red);
    process.exit(-1);
}
*/
const app = express();
//let auth = jwt.expressjwt({secret: process.env.JWT_SECRET});

app.use(bodyParser.json());
app.get('/', function (req, res) {
    res.status(200).json({api_version: '1.0', author: 'BassHound'});
});
app.get('/show', function (req, res) {
    res.send("Hello World!");
});

app.listen(3000);

mongoose.connect('mongodb://localhost:27017/login2023').then(()=>{
    console.log('Connected to MongoDB');
    return user.getModel().findOne({username: 'BassHound'});
}).then((doc)=>{
    if(doc){
        console.log('The Admin User already exists');
        return ;
    }
    console.log('Creating the Admin User...');
    let model = user.getModel();
    let data = {
        username: 'BassHound',
        password: 'admin',
        email: 'basso.andrea.96@gmail.com',
        date: new Date()
    }
    let andrea = new model(data);
    return andrea.save();
});

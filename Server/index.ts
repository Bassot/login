import * as mongoose from 'mongoose';
import * as express from 'express';
import * as user from './User';

const app = express();
mongoose.connect('mongodb://localhost:27017/login2023');


app.get('/', function (req, res) {
    res.send("Hello World!");
});

app.listen(3000);
// function with express to inser users ....
let model = user.getModel();
let data = {
    username: 'BassHound',
    password: 'admin',
    email: 'basso.andrea.96@gmail.com',
    date: new Date()
}
let andrea = new model(data);
andrea.save();

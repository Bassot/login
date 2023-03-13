import * as mongoose from 'mongoose';
import * as express from 'express';
import * as user from './User';
import * as colors from 'colors';

const app = express();
mongoose.connect('mongodb://localhost:27017/login2023').then(()=>{
    console.log('Connected to MongoDB');
    return user.getModel().findOne({username: 'BassHound'});
}).then((doc)=>{
    if(doc){
        console.log('The Admin User already exists');
        return ;
    }
    console.log('Creating the Admin User');
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

// JWT token...

app.get('/', function (req, res) {
    res.status(200).json({api_version: '1.0', author: 'BassHound'});
});
app.get('/show', function (req, res) {
    res.send("Hello World!");
});

app.listen(3000);


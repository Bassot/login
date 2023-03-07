import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String,
    date: {type: Date, default: new Date()}
})
let model;
export function getSchema(){
    return userSchema;
}
export function getModel(){
    if (!model){
        model = mongoose.model('user', userSchema);
    }
    return model;
}

//hey

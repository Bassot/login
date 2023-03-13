"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.newUser = exports.getModel = exports.getSchema = void 0;
var mongoose_1 = require("mongoose");
var userSchema = new mongoose_1.default.Schema({
    username: String,
    password: String,
    email: String,
    date: { type: Date, default: new Date() }
});
var model;
function getSchema() {
    return userSchema;
}
exports.getSchema = getSchema;
function getModel() {
    if (!model) {
        model = mongoose_1.default.model('user', userSchema);
    }
    return model;
}
exports.getModel = getModel;
function newUser(user) {
    var u = {
        username: user.username,
        password: user.password,
        email: user.email,
        date: user.date
    };
    return new model(u);
}
exports.newUser = newUser;
//# sourceMappingURL=User.js.map
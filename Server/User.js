"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getModel = exports.getSchema = void 0;
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
//# sourceMappingURL=User.js.map
const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    nombre:String,
    correo: String,
    contrasena: String,
}, {
    timestamps: true
});


module.exports = model('User', userSchema, 'users');
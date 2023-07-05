const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

const loginSchema = new mongoose.Schema({
    nom: {
        type: String,
        required: true
    },
    mdp: {
        type: String,
        required: true
    },
})
const loginModel = mongoose.model("loginModel", loginSchema);
module.exports = loginModel ;
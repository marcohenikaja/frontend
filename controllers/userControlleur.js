const userLogin = require('../models/login');

const login = async (req, res) => {
    const nom = req.body.nom;
    const mdp = req.body.mdp;
    try {
        const mampiditra = await userLogin.create({ nom, mdp });
        return res.send({ success: true });
    } catch (error) {
        console.log(error);
    }
}
module.exports = { login };

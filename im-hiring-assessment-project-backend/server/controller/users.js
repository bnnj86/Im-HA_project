const userList = require("../models/users");
const oneUser = require("../models/user");

module.exports = {
    users: {
        get: async (req, res) => {          
            res.status(200).send(userList);
        }
    },
    user: {
        get: async (req, res) => {
            let num = req.path;
            res.status(200).send(oneUser(num));
        }
    }
}
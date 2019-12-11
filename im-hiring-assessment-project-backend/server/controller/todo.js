const todos = require("../models/todos");
const todo = require("../models/todo");

module.exports = {
    todos : {
        get: async (req, res) => {
            res.status(200).send(todos);
        }
    },
    todo : {
        get: async (req, res) => {
            let num = req.path;
            res.status(200).send(todo(num));
        }
    }

}
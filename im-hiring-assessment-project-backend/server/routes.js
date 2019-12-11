var router = require('express').Router();
const testController = require("./controller/status");
const userController = require("./controller/users");
const todoController = require("./controller/todo");


router.get('/test', testController.data.get);
router.get('/some/undefined/route', testController.noData.get);
router.get('/users', userController.users.get);
router.get('/users/:num', userController.user.get);
router.get('/todos', todoController.todos.get);
router.get('/todos/:num', todoController.todo.get);

module.exports = router;
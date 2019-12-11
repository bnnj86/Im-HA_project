let todoList = require("../data/data")

let todo = (num) => {
    let todos = todoList;
    let pathNum = String(num);
    let nums = pathNum[pathNum.length - 1];
    return todos[Number(nums) - 1];
}

module.exports = todo;
let todoList = require("../data/data")

let todo = (num) => {
    let todos = todoList;
    let pathNum = String(num);
    let nums = pathNum.slice(7,pathNum.length)
    return todos[Number(nums) - 1];
}

module.exports = todo;
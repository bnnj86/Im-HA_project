const data = require('../data/userData');

let oneUser = (num) => {
    let pathNum = String(num);
    let nums = pathNum.slice(7,pathNum.length)
    console.log(nums)
    let userList = data;
    return userList[Number(nums) - 1];
}



module.exports = oneUser;

const data = require('../data/userData');

let oneUser = (num) => {
    let pathNum = String(num);
    let nums = pathNum[pathNum.length - 1];
    let userList = data;
    return userList[Number(nums) - 1];
}



module.exports = oneUser;

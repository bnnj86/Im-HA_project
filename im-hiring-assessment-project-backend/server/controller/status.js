const responseExistMsg = require("../models/dataExist");
const responseNotExistMsg = require("../models/dataNoExist")


module.exports = {
    data: {
        get: async (req, res) => {
        
            res.status(200).send(responseExistMsg);
        }
    },
    noData: {
        get: async (req,res) => {
           
            res.status(200).send(responseNotExistMsg)
        }
    }
}
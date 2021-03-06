const {loginCheck} = require("../controller/user");
const {SuccessModel,ErrorModel} = require("../model/resModel");

const handleUserRouter = (req,res) =>{
    const method = req.method;
    const url = req.url;
    const path = url.split('?')[0];

    if(method === "POST" && path === "/api/user/login"){
        return {
            msg:"登陆"
        }
    }
}

module.exports = handleUserRouter;
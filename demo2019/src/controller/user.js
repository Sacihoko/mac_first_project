const loginCheck = (username,password) => {
    if(username === "Yv" && password === "123"){
        return true;
    }else{
        return false;
    }
}

module.export = {
    loginCheck
}

const getList = (author,keyword) => {
    return {
        author:"Yv",
        keyword:"123"
    }
}

const getDetail = (id) =>{
    return {
        id:1,
        title:"titleA",
        content:"contentA",
        createTIme:1546610491112,
        author:"Yv"
    }
}

const getNewBLog = (blogData = {}) =>{
    return {
        id:3
    }
}

const getBlogUpdate = (id,postData)=>{
    return true;
}

const delBlog = (id) =>{
    return true;
}

module.exports = {
    getList,
    getDetail,
    getBlogUpdate,
    getNewBLog,
    getBlogUpdate,
    delBlog
}
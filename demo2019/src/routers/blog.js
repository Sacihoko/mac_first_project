const {getList,getDetail,getNewBLog,delBlog,getBlogUpdate} = require('../controller/blog');
const {SuccessModel,ErrorModel} = require('../model/resModel');

const handleBlogRouter = (req,res) => {
    const method = req.method;
    const url = req.url;
    const path = req.path;
    const query = req.query;

    //获取博客列表接口
    if(method === "GET" && path === '/api/blog/list'){
        return {
            msg:"获取博客列表"
        }
    }

    //获取博客详情也接口
    if(method === 'GET' && path === '/api/blog/detail'){
        return {
            msg:"获取博客详情"
        }
    }

    //新增博客接口
    if(method === 'POST' && path === '/api/blog/new'){
        return {
            msg:"获取新增博客"
        }
    }

    //更新博客接口
    if(method === 'POST' && path === '/api/blog/update'){
        return {
            msg:"获取更新博客"
        }
    } 

    //删除博客接口
    if(method === 'POST' && path === '/api/blog/del'){
        return {
            msg:"获取删除博客"
        }
    }
}

module.exports = handleBlogRouter;
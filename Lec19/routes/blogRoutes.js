const express = require("express");
const router = express.Router(); //small -----> app

//blogs
router.post('/blogs',async(req,res)=>{
    let title=req.body.title;
    let body=req.body.body;
    let userId=req.body.userId;
    let blog={
        title:title,
        body:body,
        date:Date.now(),
        userId:userId
    }
    
    let newBlog=new Blog(blog)
    await newBlog.save()
    let user=await Users.findById(userId);
    user.blogs.push(newBlog._id)
    await user.save()

    res.json({
        success:true,
        message:"blog added successfully",
        data:newBlog
    })
})

router.delete("/blogs/:blogId",async(req,res)=>{
    let blogId=req.params.blogId;
    let userId=req.body.userId;
    let blogExists=await Blog.findById(blogId);
    if(!blogExists){
        return res.json({
            success:false,
            message:"Blog does not exist"
        })
    }
    if(blogExists.userId.toString() !== userId){
        return res.json({
            success:false,
            message:"Permission denied"
        })
    }
    await Blog.findByIdAndDelete(blogId);//hw: remove blogs column from user 
})

router.get("/blogs",async(req,res)=>{
    let allBlogs=await Blog.find()
    res.json({
        success:true,
        message:"data added successfully",
        data:allBlogs
    })
})

router.get("/blogs/:id",async(req,res)=>{
    let id=req.params.id;
    let blog=await Blog.findById(id);
    res.json({
        success:true,
        message:"blog fetched successfully",
        data:blog
    })
})


module.exports = router
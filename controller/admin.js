const path=require('path')

const express=require('express')
const rootDir=require('../util/path')
console.log("here is controller")
const User=require('../models/appointment')

/*exports.getApp=((req,res)=>{
     res.sendFile(path.join(__dirname,'../views','booking.html'))

})*/

//inserting user 

exports.addUser=(req,res,next)=>{
     //res.sendFile(path.join(__dirname,'../views','booking.html'))
    const {username,email,phone}=req.body
    console.log(req.body)
    console.log("here is add user")
    User.create({username,email,phone})
    .then(result=>{
        res.status(201).json({user:result})
        console.log(result);
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({error:'failed to create user'})
    })

}

//get all users
exports.getUsers=(req,res)=>{
    User.findAll()
    .then(result=>{
        res.status(201).json(result)
    })
    .catch(err=>console.log(err))
}

// deleting the users
exports.deleteUser=(req,res)=>{
    const id=req.params.id;
    User.destroy({where:{id}})
    .then(result=>{

    })
    .catch(err=>console.log(err))
}
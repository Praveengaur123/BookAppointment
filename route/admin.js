const path=require('path')

const express=require('express')

const router=express.Router()

const adminController=require('../controller/admin')

router.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'../views','booking.html'))
    console.log("here is routing")
})
//router.get('/admin',adminController.getApp)

// insert user
router.post('/add-user',adminController.addUser)

// get all user
router.get('/users',adminController.getUsers)

// delete user
router.delete('/delete-user/:id',adminController.deleteUser)
module.exports=router;

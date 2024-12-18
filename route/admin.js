const path=require('path')

const express=require('express')

const router=express.Router()

const adminController=require('../controller/admin')

router.get('/',adminController.getBookingpage)

// insert user
router.post('/user/add-user',adminController.addUser)

// get all user
router.get('/user/get-user',adminController.getUsers)

// delete user
router.delete('/user/delete-user/:id',adminController.deleteUser)
module.exports=router;

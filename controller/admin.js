const path=require('path')
const rootDir=require('../util/path')
console.log("here is controller")
const User=require('../models/appointment')


exports.addUser=async(req,res,next)=>{

    try{   
    const username=req.body.username;
    const phone=req.body.phone;
    const email=req.body.email;
    console.log(req.body)
    if(req.body.phone==undefined){
        throw new Error("Phone number is mandatory");
        
    }
    const data=await User.create({username:username,email:email,phone:phone})
    console.log("created user",data)
  
    return res.status(201).json({newUserDetail:data})
    
    //res.redirect('/user/add-user');
    }
    catch(err){
        console.log("error in adding user",err.message)
         return res.status(500).json({err:err.message})
    }

}

//get all users
exports.getUsers=async(req,res)=>{
    
    try{
        const users=await User.findAll()
        res.status(200).json({allNewUser:users})
    }
    catch(error){
        console.log("Get user is failed",JSON.stringify(error))
        res.status(500).json({error:error})
    }
}

// deleting the users
exports.deleteUser=async(req,res)=>{
    const id=req.params.id;
    if(id==undefined){
        return res.Status(400).json({err:"Id is missing"})
    }
    try{
    await User.destroy({where:{id}})
    res.sendStatus(200)
    } catch(err){
        console.log(err)
        res.sendStatus(500).json(err)
    }
    
}
exports.getBookingpage=(req,res)=>{
    res.sendFile(path.join(__dirname,"../views",'booking.html'))
}
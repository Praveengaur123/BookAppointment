//ensure database connection 

const Sequelize=require('sequelize');
// new Sequelize('database name','username',password',{})
const sequelize=new Sequelize('nodecomplete','root','Pra0@123',{
    dialect:'mysql',
    host:'localhost'
})
module.exports=sequelize
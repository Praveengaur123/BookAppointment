//Sequelize=datatype

const Sequelize=require('sequelize')

const sequelize=require('../util/database')
console.log("Sequelize works");

const User=sequelize.define('User',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    username:{
        type:Sequelize.STRING,
        allowNull:false    
    },
    email:{
        type:Sequelize.STRING,
        allowNull:false,
        validate:{isEmail:true}
    },
    phone:{
        type:Sequelize.INTEGER,
        allowNull:false
    }
})
module.exports=User
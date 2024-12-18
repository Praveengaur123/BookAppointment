const path=require('path');

const express=require('express')

const bodyParser=require('body-parser')

const sequelize=require('./util/database')

const adminRoute=require('./route/admin')
const cors=require('cors');
const User = require('./models/appointment');

const app=express()

app.use(cors())


// middleware to parse incoming request
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

// serve static files
app.use(express.static(path.join(__dirname,'public')))
// routes
app.use('/',adminRoute)



sequelize.sync()
.then(result=>{
    //console.log(result);
    console.log("server")
    app.listen(8080);
})
.catch(err=>{
    console.log(err);
})


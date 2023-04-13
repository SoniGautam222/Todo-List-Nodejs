const express=require('express');
const port=8000;
const path=require('path');
const db=require('./config/mongoose');
const { log } = require('console');
const app=express();

app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'views'));

app.use(express.urlencoded());
app.use(express.static("assets"));
var todoList=[];

app.get('/',function(req,res){
     res.render('index',{
        todoList: todoList 
    });
});

app.post('/',function(req,res){
    todoList.push({
        description:req.body.description,
        date:req.body.date,
        category:req.body.category,
        
    });
    return res.redirect('/');    
});



app.listen(port,function(err){
    if(err){
        console.log(`Error in the server ${err}`);
    }else{
        console.log(`My server is running on the port : ${port}`);
    }
})

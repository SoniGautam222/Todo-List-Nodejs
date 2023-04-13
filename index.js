const express=require('express');
const port=8000;
const path=require('path');
const db=require('./config/mongoose');
const app=express();

app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'views'));

app.use(express.urlencoded());
app.use(express.static("assets"));

const Schema=require('./models/Schema')

var todoList=[];

app.get('/',async function(req,res){
    let lists=await Schema.find({});
     res.render('index',{
        todoList:lists 
    });
});

app.post('/',async function(req,res){
    try{
        let todo=await Schema.create({
            description:req.body.description,
            date:req.body.date,
            category:req.body.category,
        })
    
    }catch(err){
        console.log(`error found`);
    }
    return res.redirect('/');    
});

app.post('/delete',async function(req,res){
    try{
    let checkedItemid=req.body.check;
    await Schema.findByIdAndDelete(checkedItemid);
    
    res.redirect('back');
   
   
    }
    catch(err){
        console.log("got the error");
    }
    
});

app.listen(port,function(err){
    if(err){
        console.log(`Error in the server ${err}`);
    }else{
        console.log(`My server is running on the port : ${port}`);
    }
})

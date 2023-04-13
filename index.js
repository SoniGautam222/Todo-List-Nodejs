const express=require('express');
const port=8000;
const path=require('path');

const app=express();

app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'views'));


app.use(express.urlencoded());
app.use(express.static("assets"));

var todoList = [
    {
        
    }
]


app.get('/',function(req,res){
    return res.render('index',{
        title: 'Todo Application'
    });
});

app.listen(port,function(err){
    if(err){
        console.log(`Error in the server ${err}`);
    }else{
        console.log(`My server is running on the port : ${port}`);
    }
})

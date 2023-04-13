const express=require('express');
const port=8000;

const app=express();

app.listen(port,function(err){
    if(err){
        console.log(`Error in the server ${err}`);
    }else{
        console.log(`My server is running on the port : ${port}`);
    }
})

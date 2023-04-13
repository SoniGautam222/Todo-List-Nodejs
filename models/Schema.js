// requiring the express here 
const mongoose=require('mongoose');
// creating the schema
const todoSchema=new mongoose.Schema({
    description:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    }
});
const Schema=mongoose.model('Schema',todoSchema);

// exporting the schema
module.exports=Schema;
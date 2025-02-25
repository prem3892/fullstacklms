import {Schema, model} from 'mongoose';


const adminSchema=   new Schema({
    adminName:{
      type:String,
      required:true  
    },
    email:{
        type:String,
        unique:true
    },
    password:String,
    profile:String
    
}, {timestamps:true});

const adminModel =  model("admin", adminSchema);


export default adminModel; 
import mongoose, {Schema, model} from 'mongoose';


const facultySchema=   new Schema({
    facultyName:{
      type:String,
    },
    email:{
        type:String,
        unique:true
    },
    password:String,
    profile:String,

    adminId:{
        type:mongoose.Schema.ObjectId,
        ref:"admin",
        required:true
    }
     
}, {timestamps:true});

const facultyModel =  model("faculty", facultySchema);


export default facultyModel; 
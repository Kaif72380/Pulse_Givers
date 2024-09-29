import mongoose from "mongoose";
const adminSchema = new mongoose.Schema
(
    {
        userId : {type:String,required:true,unique:true},
        pass:{type:String,required:true,unique:true},
    }
    
)
export const adminModel = mongoose.model("Admin",adminSchema);

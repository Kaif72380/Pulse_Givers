import mongoose from 'mongoose'

const contactSchema=new mongoose.Schema({

    userName:{type:String,required:true},
    userEmail:{type:String,required:true},
    userPhone:{type:String,required:true},
    userQuery:{type:String,required:true},
})


export const contactModel = mongoose.model("Contact",contactSchema)
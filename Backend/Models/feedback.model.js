import mongoose from 'mongoose'

const feedbackSchema=new mongoose.Schema({
    userName:{type:String,required:true},
    userEmail:{type:String,required:true},
    userRemark:{type:String,required:true},
    userRating:{type:String,required:true},
})


export const feedbackModel=mongoose.model("feedback",feedbackSchema)

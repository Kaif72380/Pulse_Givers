import mongoose from 'mongoose'

const regSchema=new mongoose.Schema({

    userName:{type:String,required:true},
    userEmail:{type:String,required:true,lowercase:true,},
    userPhone:{type:String,requored:true,},
    userAddress:{type:String,required:true},
    userGroup:{type:String,required:true},
})


export const DonorModel= mongoose.model("Donor",regSchema)
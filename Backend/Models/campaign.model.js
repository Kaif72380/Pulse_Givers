import mongoose from "mongoose"
const campaignSchema=new mongoose.Schema(
    {
name:{type:String,required:true},
venue:{type:String,required:true},
organizer:{type:String,required:true},
phone:{type:String,required:true},
camppic:{type:String}
})

const campaignModel=mongoose.model("campaign",campaignSchema)
export default campaignModel
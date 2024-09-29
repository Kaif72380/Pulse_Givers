import { feedbackModel } from "../Models/feedback.model.js";
import { contactModel } from "../Models/contact.model.js";
import { DonorModel } from "../Models/Donor_Registration.model.js";
import { adminModel } from "../Models/admin.model.js";
import campaignModel from "../Models/campaign.model.js";

export const viewFeedback=async (req,res)=>{

    try {
        
        const feedbacks=await feedbackModel.find()
        if(feedbacks!=null){
            console.log("all feedbacks"+feedbacks);
            res.send(feedbacks)
            }
            else{
                res.send({code:404,message:"No data found"})
            }

    } catch (error) {
        console.log(error);
        
    }
}

export const viewContact=async (req,res)=>{
    try {
            const contacts=await contactModel.find()

        if(contacts!=null){
        console.log("all contacts are"+ contacts);
        res.send(contacts)
            }

            else{
                res.send({code:404,message:"No data found"})
            }

    }
     catch (error) {
        console.log(error);
        
    }
}





export const viewDonor=async (req,res)=>{
    try {
            const donors=await DonorModel.find()

        if(donors!=null){
        console.log("all contacts are"+ donors);
        res.send(donors)
            }

            else{
                res.send({code:404,message:"No data found"})
            }

    }
     catch (error) {
        console.log(error);
        
    }
}



export const viewCampaign=async (req,res)=>{
    try {
            const campaigns=await campaignModel.find()

        if(campaigns!=null){
        console.log("all campaigns are"+ campaigns);
        res.send(campaigns)
            }

            else{
                res.send({code:404,message:"No data found"})
            }

    }
     catch (error) {
        console.log(error);
        
    }
}


export const Login = async (req, res) => {
    const userLogin = req.body
    const { userId, pass } = userLogin
    try {
        const admin_data = await adminModel.findOne({ userId: userId });
        if(admin_data!=null)
        {
            if(admin_data.pass==pass)
            {
                res.send({code:200,message:"login successfully",token:admin_data.userId})
            }
            else{
                res.send({code:404,message:"invalid password"})
            }

        }
        else{
            res.send("email not found.")
        }

    } catch (error) {
        console.log(error);
        

    }


    console.log(`user Id is : ${userId}`);
    console.log(`user pass is : ${pass}`);

    // res.send(":::: Data is Recevied ::::")


}

export const deleteDonor = async (req, res) => 
    {
        try{
            const id=req.params.id

            console.log("is to be deleted "+id);
            const isDelete= await DonorModel.deleteOne({_id:id})
            if(isDelete!=null)
                res.send({code:200})
        }
        catch(error)
        {
            console.log(error);
        }
    }




    export const deleteContact = async (req, res) => 
    {
        try{
            const id=req.params.id

            console.log("is to be deleted "+id);
            const isDelete= await contactModel.deleteOne({_id:id})
            if(isDelete!=null)
                res.send({code:200})
        }
        catch(error)
        {
            console.log(error);
        }
    }




    export const editContact=async(req,res)=>{
        try {
            
            const user_data = req.body
            const {id,userName,userEmail,userPhone,userQuery}=user_data
            console.log(id+userName+userEmail+userPhone+userQuery);
            
            const updateDoc={
    $set:{
        userName:userName,
        userEmail:userEmail,
        userPhone:userPhone,
        userQuery:userQuery
    } 
            };
            const filter={_id:id}
    const status = await contactModel.updateOne(filter,updateDoc)
    console.log(status);
    res.send(status)
        } 
    
        catch(err)
        {
            console.log(err);
    
    }
}



export const getContact=async(req,res)=>{

    const id = req.params.id
    try {
        console.log(id);
        
        const data = await contactModel.findOne({_id:id})
        if(data!=null)
            res.send(data)



    } catch (error) {
        console.log(error);
}
}



export const addcampaign=async(req,res)=>
    {
        const campaignobject=req.body
        console.log(campaignobject);
       const picname = req.file.filename
    
    //    console.log(picname);
    //    console.log(req.file);
    
        const data=req.body
      ///  console.log(req.body);
        const{name,venue,organizer,phone}=data //object destructure
    
        try{
    const campaigndoc=new campaignModel(
    {
        name:name,
        venue:venue,
        organizer:organizer,
        phone:phone,
        camppic:picname
        
    }
    
    )
    await campaigndoc.save()
    res.send("Campaign detail added successfully")
    
        }
        catch(err)
        {
    console.log(err.message);
        }
    
    }
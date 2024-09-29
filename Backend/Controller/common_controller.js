import { feedbackModel } from "../Models/feedback.model.js"
import {contactModel} from "../Models/contact.model.js"
import { DonorModel } from "../Models/Donor_Registration.model.js"


export const addFeedback =async (request, response) => {
    const feedBack = request.body
    const { userName, userEmail, userRemark, userRating  } = feedBack


    try {
        const feedbackDoc = feedbackModel(
            {
                userName: userName,
                userEmail: userEmail,
                userRemark: userRemark,
                userRating: userRating,
            }
        )
        await feedbackDoc.save()

    } catch (error) {
        console.log(error);

    }

    console.log(`user Name is : ${userName}`);
    console.log(`user userEmail is : ${userEmail}`);
    console.log(`user userRemark is : ${userRemark}`);
    console.log(`user Rating is : ${userRating}`);

    response.send(":::: Data is Recevied ::::")

}




export const addContact =async (request, response) => {
    const contactUs = request.body
    const { userName, userEmail, userPhone, userQuery } = contactUs


    try {
        const contactDoc = contactModel(
            {
                userName: userName,
                userEmail: userEmail,
                userPhone: userPhone,
                userQuery: userQuery,
            }
        )
        await contactDoc.save()

    } catch (error) {
        console.log(error);

    }

    console.log(`user Name is : ${userName}`);
    console.log(`user Email is : ${userEmail}`);
    console.log(`user Phone is : ${userPhone}`);
    console.log(`user Query is : ${userQuery}`);

    response.send(":::: Data is Recevied ::::")

}

export const addDonor=async (request,response)=>{
    const Donor=request.body
    const {userName , userEmail , userPhone , userAddress , userGroup}= Donor

    try {
        const donorDoc = DonorModel(
            {
                userName: userName  ,
                userEmail: userEmail  ,
                userPhone: userPhone  ,
                userAddress: userAddress  ,
                userGroup: userGroup ,
 
              }
        )
        await donorDoc.save()

    } catch (error) {
        console.log(error);

    }
    console.log(`user Name is : ${userName}`);
    console.log(`user Email is : ${userEmail}`);
    console.log(`user Phone is : ${userPhone}`);
    console.log(`user Address is : ${userAddress}`);
    console.log(`user Group is : ${userGroup}`);

    response.send(":::: Data is Recevied ::::")


}

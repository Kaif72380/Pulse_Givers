import mongoose from "mongoose"
const DbURL = 'mongodb+srv://kaif72380:qsDH6agUEc96Zchy@mohdkaif.8xpde.mongodb.net/BloodDonor'
const connect_Db = async () =>{
    try {
        const conn = await mongoose.connect(`${DbURL}`)
        console.log("Connection successfull");
        
    } catch (error) {
        console.log(error);
        
    }
}
export default connect_Db

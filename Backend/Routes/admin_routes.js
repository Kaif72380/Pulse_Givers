import express from "express"
import upload_image from '../middleware/employee.multer.middleware.js'
import { viewFeedback,viewContact, viewDonor , Login, deleteDonor, deleteContact, editContact, getContact, addcampaign,viewCampaign} from "../Controller/admin_controller.js"



const adminRoutes=express.Router()

adminRoutes.get("/viewFeedback",viewFeedback)
adminRoutes.get("/viewContact", viewContact)
adminRoutes.get("/viewDonor", viewDonor)
adminRoutes.get("/viewCampaign", viewCampaign)
adminRoutes.post("/Login", Login)



adminRoutes.delete("/deleteDonor/:id", deleteDonor)
adminRoutes.delete("/deleteContact/:id", deleteContact)

adminRoutes.post("/getContact/:id", getContact)

adminRoutes.put("/editcontact", editContact)

adminRoutes.post("/addcampaign",upload_image,addcampaign)



export default adminRoutes
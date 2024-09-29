import express from "express";
import { addFeedback, addContact, addDonor} from "../Controller/common_controller.js";


const routes =express.Router()

routes.post("/addFeedback", addFeedback)
routes.post("/addContact", addContact)
routes.post("/addDonor", addDonor)

export default routes
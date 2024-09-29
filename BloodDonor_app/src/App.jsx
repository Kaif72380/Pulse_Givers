import "../src/Components/CSS/app.css"
import Header from './Components/Header'
import ContactUs from './Components/ContactUs'
import Feedback from './Components/Feedback'
import AboutUs from './Components/AboutUs'
import HomePage from './Components/HomePage'
import DonorRegistration from './Components/DonorRegistration'
import Login from './Components/Login'
import AllDonors from './Components/Admin/AllDonors'
import AllFeedback from './Components/Admin/AllFeedback'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ViewDonors from "./Components/donor.jsx"
import ViewCampaign from "./Components/viewCampaign.jsx"



// admin imports\
// import AdminHeader from './Components/Admin/AdminHeader'
import AllContacts from './Components/Admin/AllContacts'
import AdminHome from './Components/Admin/adminHome'
import EditContact from "./Components/Admin/editContact"
import AddCampaign from "./Components/Admin/AddCampaign"




function App() {
  

  return (
    <>


    

      {/* <Header/> */}
      <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<HomePage />} />
          
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/DonorRegistration" element={<DonorRegistration />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/AllDonors" element={<AllDonors />} />
          <Route path="/AllFeedbacks" element={<AllFeedback />} />
          <Route path="/ViewDonor" element={<ViewDonors/>} />
          <Route path="/ViewCampaign" element={<ViewCampaign/>} />
          <Route path="/AllContacts" element={<AllContacts />} />
          <Route path="/AdminHome" element={<AdminHome/>} />
          <Route path="/editcontact" element={<EditContact/>} ></Route>
          <Route path="/addcampaign" element={<AddCampaign/>} ></Route>
          
          
        </Route>
      </Routes>
    </BrowserRouter> 
    
   

    </>
  )
}

export default App

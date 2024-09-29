import Header from "./Header"
import { useState } from "react"
import axios from "axios"
export default function DonorRegistration(){


  let [donor,setDonor]=useState(
    {
    userName:"",
    userEmail:"",
    userPhone:"",
    userAddress:"",
    userGroup:"",
    }
  )
    let URL ="http://localhost:3000/donorApi/addDonor"
   const handleData= (e)=>{
      setDonor({...donor, [e.target.name]: e.target.value})
   }

   const handleSubmit=async (e)=>{
    e.preventDefault()
    try {
      const response=await axios.post(URL, donor)
      console.log("response is :-" + response);
      
    } catch (error) {
      console.log(error);
      
    }

   }
   let conBox = {

    width: "50%",
    marginTop: "3%",
    marginLeft: "22%",
    fontWeight: "600",
    borderRadius: "5px",

}

    return(
    <>
    <Header/>
    <h1 style={{textAlign:"center", marginTop:"40px"}}>Donor Registration Form</h1>
    <form style={conBox} onSubmit={handleSubmit}>
    <div className="form-floating mb-3">
  <input type="name" className="form-control" id="floatingInput" placeholder="John Doe" name="userName" onChange={handleData} value={donor.userName}/>
  <label for="floatingInput">Name</label>
    </div>
    <div className="form-floating mb-3">
  <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" name="userEmail" onChange={handleData} value={donor.userEmail}/>
  <label for="floatingInput">Email</label>
    </div>
    <div className="form-floating mb-3">
  <input type="number" className="form-control" id="floatingInput" placeholder="98525****" name="userPhone" onChange={handleData} value={donor.userPhone}/>
  <label for="floatingInput">Phone</label>
    </div>
    <div className="form-floating mb-3">
  <input type="text" className="form-control" id="floatingInput" placeholder="krishna vihgar " name="userAddress" onChange={handleData} value={donor.userAddress}/>
  <label for="floatingInput">Address</label>
    </div>
    <select class="form-select" aria-label="Default select example" name="userGroup" onChange={handleData} value={donor.userGroup} >
  <option selected>Blood Group</option>
  <option value="A+">A+</option>
  <option value="A-">A-</option>
  <option value="B+">B+</option>
  <option value="B-">B-</option>
  <option value="AB+">AB+</option>
  <option value="AB-">AB-</option>
  <option value="O+">O+</option>
  <option value="O-">O-</option>
  
</select>
    <button style={{marginLeft:"45%", marginTop:"15px", background:"#4379F2" ,  borderRadius: "5px"}} type="submit">Submit</button>
    </form>
    

    
    </>
    )
}
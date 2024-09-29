import AdminHeader from "./AdminHeader"

import { useState,useEffect } from "react"
import axios from "axios"


export default function AddCampaign(){

    const url="http://localhost:3000/admin/addcampaign"
    let[campaign,setCampaign]=useState({

        name:"",
        venue:"",
        organizer:"",
        phone:"",
        
    })
    const[photo,setPhoto]=useState("")
    const handledata=(e)=>
    {
setCampaign({...campaign,[e.target.name]:e.target.value})

    }




    const handlesubmit=async(e)=>
    {
        e.preventDefault()
        console.log(campaign);
        try{
            const form_data=new FormData()
            form_data.append("name",campaign.name)
            form_data.append("venue",campaign.venue)
            form_data.append("organizer",campaign.organizer)
            form_data.append("phone",campaign.phone)
    
            
            form_data.append("photo",photo)
    
    
         const response=await axios.post(url,form_data)
            alert(response.data)
          }
    
        catch(err){
            console.log(err.message);
        }
    }
    return(

<>

<AdminHeader/>

          <form>
          <div className="row justify-content-center">
            <div className="col-6">
              <h2 style={{textAlign:"center"}}>Add campaign Details</h2>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Campaign Name</label>
      
        <input type="text"  name="name" className="form-control" value={campaign.name} onChange={handledata}/>
      </div>
        
      <div className="mb-3">
        <label htmlFor="venue" className="form-label">Venue</label>
      
        <input type="text"  name="venue" className="form-control" value={campaign.venue} onChange={handledata}/>
      </div>

      <div className="mb-3">
        <label htmlFor="organizer" className="form-label">Organizer</label>
      
        <input type="text"  name="organizer" className="form-control" value={campaign.organizer} onChange={handledata}/>
      </div>
    
      <div className="mb-3">
        <label htmlFor="phone" className="form-label">Phone</label>
      
        <input type="phone"  name="phone" className="form-control" value={campaign.phone} onChange={handledata}/>
      </div>  
    
      <div className="mb-3">
        <label htmlFor="query" className="form-label">Image</label>
        
      <input type="file" name="photo" className="form-control"  onChange={(e)=>{
                    
          console.log(e.target.files[0]);
          setPhoto(e.target.files[0])}} />    
       </div>
    </div>
    </div>

    <div className="text-center">
            <button type="submit" onClick={handlesubmit} className="btn btn-primary mt-4" style={{marginLeft:"150px"}}>Submit</button>
         
            </div>
         
          </form>
</>
    )
}

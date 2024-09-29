import React from "react";
import axios from "axios";
import { useState,useEffect } from "react";
import Header from "./Header"


export default function ViewCampaign(){
  const [campaign, setCampaign] = useState([]);
        let URL ="http://localhost:3000/admin/viewCampaign" 

        useEffect(() => {
          const fetchData = async() => {
            try {
              const response = await axios.get(URL);
              console.log(response.data)
              setCampaign(response.data);
            } 
            catch (error)
             {
              console.error(error);
            }
          }
      
          fetchData()
        }, [])
    
    
    
        return(
    <>
    
    <Header/>
    <h2 style={{textAlign:"center"}}>Campaign Details</h2>
    <table className="table">
 <tr>
     <th scope="col">Campaign Name</th>
     <th scope="col">Venue</th>
     <th scope="col">Organizer</th>
     <th scope="col">Contact</th>
     <th scope="col">Image</th>
     
 </tr> 
 { 
 campaign.map((camp,index) =>{
 return(        
 <tr key={index}>
         <td>{camp.name}</td>
         <td>{camp.venue}</td>
         <td>{camp.organizer}</td>
         <td>{camp.phone}</td>
         
                                        
    <td><img src={`http://localhost:3000/employee/${camp.camppic}`} alt="image" style={{width:"100px",height:"100px"}} /></td>
        
    {/* employee from public */}                                     
                                                       
                                  </tr>
 )
      })
}
</table>
</>   
  )
}


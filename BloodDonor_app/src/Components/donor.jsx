// import "../CSS/table.css"
import Header from "./Header"
import { useState,useEffect } from "react"
import axios from "axios"
export default function ViewDonors(){

    const [donor,setDonor]=useState([])

    const URL="https://pulse-givers.onrender.com/admin/viewDonor"

    useEffect(()=>{
        const fetchData=async ()=>{
            try {
                const response=await axios.get(URL)
                console.log(response.data);
                setDonor(response.data)
                
            } catch (error) {
                console.log(error);
                
            }
        }
        fetchData()
    },[])
  
return(
<>
<Header/>
<h1 >This is Donors view</h1><table border={1}>
<tr>
    <th>Name</th>
    <th>Email</th>
    <th>Phone</th>
    <th>Address</th>
    <th>Group</th>
</tr>

        
            
{
    donor.map((item)=>{
        return(<tr key={item.id}>
        <th>{item.userName}</th>
        <th>{item.userEmail}</th>
        <th>{item.userPhone}</th>
        <th>{item.userAddress}</th>
        <th>{item.userGroup}</th>
        </tr>
        )
            })
}



        </table>
        
        </>
    )
}

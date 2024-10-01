import "../CSS/table.css"
import { useState,useEffect } from "react"
import axios from "axios"
import AdminHeader from "./AdminHeader"
import { Link } from 'react-router-dom'
export default function AllDonors(){

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


    const deleteData=async (e,id)=>{

        e.preventDefault()
        alert(id)
        if(window.confirm("Do you want to delete?"))
            {
              const isDelete = await axios.delete(`http://localhost:3000/admin/deleteDonor/${id}`)
              if(isDelete.data.code==200){
                setContact(contactData.filter(item=> item._id==id))
                alert("Record deleted successfully")
              }
            }

    }

    
        
      
    


return(
<>
<AdminHeader/>
        
<h1>This is Donors view</h1><table border={1}>
<tr>
    <th>Name</th>
    <th>Email</th>
    <th>Phone</th>
    <th>Address</th>
    <th>Group</th>
    <th>Edit</th>
    <th>Delete</th>
</tr>

        
            
{
    donor.map((item)=>{
        return(<tr key={item.id}>
        <th>{item.userName}</th>
        <th>{item.userEmail}</th>
        <th>{item.userPhone}</th>
        <th>{item.userAddress}</th>
        <th>{item.userGroup}</th>
        <td><button className="bg-danger form-control" onClick={(event)=>{deleteData(event,item._id)}}>Delete</button></td>
        <td><Link className="nav-link" to={`/editDonor?id=${item._id}`} >Edit</Link></td>
        </tr>
        )
            })
}



        </table>
        
        </>
    )
}

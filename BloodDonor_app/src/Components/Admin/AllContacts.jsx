import { useState,useEffect } from "react"
import axios from "axios"
import AdminHeader from "./AdminHeader"
import { Link } from "react-router-dom"

export default function AllContacts(){

    const [contact,setContact]=useState([])

    const URL="http://localhost:3000/admin/viewContact"

    useEffect(()=>{
        const fetchData=async ()=>{
            try {
                const response=await axios.get(URL)
                console.log(response.data);
                setContact(response.data)
                
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
              const isDelete = await axios.delete(`http://localhost:3000/admin/deleteContact/${id}`)
              if(isDelete.data.code==200){
                setContact(contactData.filter(item=> item._id==id))
                alert("Record deleted successfully")
              }
            }

    }



    return(
        <>
        <AdminHeader/>
        <h1>This is contacts view</h1>
        <table border={1}>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Query</th>
                <th>Delete</th>
                <th>Edit</th>
            </tr>

        
            
                {
                    contact.map((item)=>{
                        return(<tr key={item.id}>
                        <th>{item.userName}</th>
                        <th>{item.userEmail}</th>
                        <th>{item.userPhone}</th>
                        <th>{item.userQuery}</th>
                        <td><button className="bg-danger form-control" onClick={(event)=>{deleteData(event,item._id)}}>Delete</button></td>

                        <td><Link className="nav-link" to={`/editcontact?id=${item._id}`} >Edit</Link></td>
                        </tr>
                        )
                    })
}



        </table>
        
        </>
    )
}
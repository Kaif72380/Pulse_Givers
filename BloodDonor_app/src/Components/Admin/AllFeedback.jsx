import { useState,useEffect } from "react"
import axios from "axios"
import React from "react"
import AdminHeader from "./AdminHeader"
export default function AllFeedback(){

        const [feedback, setFeedback]=useState([])
        const URL="http://localhost:3000/admin/viewFeedback"

         useEffect(()=>{
            const fetchData=async()=>{
                try {
            const response=await axios.get(URL)
            console.log(response.data);
            setFeedback(response.data)
                }
                catch(error){
                    console.log(error);                    
                }
            }
            fetchData()
            
         },[])

    return(
        <>
        <AdminHeader/>
        <h1>These are all feedbacks</h1>
        
        <table border="1">
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Remark</th>
                <th>Rating</th>
            </tr>

            {
                
               feedback.map((item)=>{
                return(
                    <tr key={item.id}>
                        <th>{item.userName}</th>
                        <th>{item.userEmail}</th>
                        <th>{item.userRemark}</th>
                        <th>{item.userRating}</th>



                    </tr>
                )
               })



            }

        </table>
        
        </>
    )
}
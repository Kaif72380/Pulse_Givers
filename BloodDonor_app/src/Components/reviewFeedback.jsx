import { useState,useEffect } from "react"
import axios from "axios"
import React from "react"

export default function ReviewFeedback(){

        const [feedback, setFeedback]=useState([])
        const URL="https://pulse-givers.onrender.com/admin/viewFeedback"

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

         let Container={
            width:"200px",
            height:"200px",
            backgroundColor:"white",
            margin:"10px",
            borderRadius:"50px" , 
            padding:"20px",
            

        
        }

    return(
        <>
        <div style={{display:"flex",flexWrap:"wrap"}} >
            {
            feedback.map((item)=>{
                return(
                    <div key={item.Id} style={Container} class="text-center text-wrap">
                <p>{item.userName}</p>
                <p>{item.userRemark}</p>
                <p>{item.userRating}</p>
                </div>
            )})
        }
        </div>
        </>
    )
}

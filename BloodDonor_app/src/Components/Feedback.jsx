import { useState } from "react"
import axios from "axios"
import Header from "./Header"
export default function Feedback(){

  let [feedback,setFeedback]=useState(
    {
      userName:"",
      userEmail:"",
      userRemark:"",
      userRating:""
    }
  )
    let URL="https://pulse-givers.onrender.com/donorApi/addFeedback"
    const handleData=(e)=>{    
      setFeedback({...feedback, [e.target.name]: e.target.value})
    }

    const handleSubmit=async (e)=>{
      // e.preventDefault()
      
      try {
        const response = await axios.post(URL, feedback)
        console.log("response is :-: " + response);
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



    // 
    return(
        <>
        <Header/>
        <div>
          <form style={conBox} onSubmit={handleSubmit}>
        <div className="form-floating mb-3">
  <input type="name" class="form-control" id="floatingInput" placeholder="John Doe" name="userName" onChange={handleData} value={feedback.userName}/>
  <label for="floatingInput">Name</label>
</div>
        <div className="form-floating mb-3">
  <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" name="userEmail" onChange={handleData} value={feedback.userEmail}/>
  <label for="floatingInput">Email address</label>
</div>


<div class="form-floating">
  <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea" name="userRemark" onChange={handleData} value={feedback.userRemark}></textarea>
  <label for="floatingTextarea">Remarks</label>
</div>


<div className="form-floating mb-3"></div>
<div className="mb-3">
                    <label htmlFor="name" className="form-label">Rating</label>
                    <select className="mb-3 form-control" name="userRating" onChange={handleData} value={feedback.userRating}>
                        <option>select</option>
                        <option>⭐</option>
                        <option>⭐⭐</option>
                        <option>⭐⭐⭐</option>
                        <option>⭐⭐⭐⭐</option>
                        <option>⭐⭐⭐⭐⭐</option>
                    </select>

                </div>
<div className="mb-3"></div>
<button style={{marginLeft:"45%",background:"#4379F2"}} type="submit" >Submit</button>
</form>
</div>

 
        
        </>
    )}

import { useState } from "react";
import axios from "axios"
import Header from "./Header";
export default function ContactUs(){
    const [formdata,setFormdata]=useState({
      userName:"",
      userEmail:"",
      userPhone:"",
      userQuery:"",  
        })
const URL = "https://pulse-givers.onrender.com/donorApi/addContact"
        const handle_change=(e)=>{
      setFormdata({...formdata, [e.target.name]: e.target.value})
      
    }
    const handle_submit=async (e)=>{
      e.preventDefault();
      console.log("Form Data Submitted");
      try {
        const response = await axios.post(URL, formdata)
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
 



        return(
        <>      
        <Header/>
        <div>
            <form style={conBox}>
            <div className="form-floating mb-3">
  <input type="text" className="form-control" id="floatingInput" placeholder="John Doe" name="userName" value={formdata.userName} onChange={handle_change}/>
  <label for="floatingInput">Name</label>
</div>
            <div className="form-floating mb-3">
  <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" name="userEmail" value={formdata.userEmail} onChange={handle_change}/>
  <label for="floatingInput">Email address</label>
</div>
<div className="form-floating mb-3">
  <input type="number" className="form-control" id="floatingInput" placeholder="8251791568" name="userPhone" value={formdata.userPhone} onChange={handle_change}/>
  <label for="floatingInput">Phone</label>
</div>
<div className="form-floating">
<textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea" name="userQuery" value={formdata.userQuery} onChange={handle_change}></textarea>
  <label for="floatingTextarea2">Query</label>
</div>
{/* <div className="form-floating" >
  <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
  <label for="floatingPassword">Password</label>
</div> */}
<br />
<button style={{ marginLeft: "45%", marginTop: "20px" , background:"#4379F2" ,  borderRadius: "5px" }} type="submit" onClick={handle_submit}>Submit</button>
            </form>
        </div>      
            </>
    )
}

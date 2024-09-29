import { useState } from "react"
import Header from "./Header"
import { useNavigate } from "react-router-dom"
import axios from "axios"
export default function Login(){

const URL="http://localhost:3000/admin/Login"



let [login,setLogin]=useState({
  userId:"",
  pass:"",
})
const navigate=useNavigate();


const fetchData=(e)=>{
  setLogin({...login, [e.target.name]:e.target.value })
  console.log("userId and pass"+ login);
  
}

        const handleForm=async (e)=>{
          e.preventDefault()
          try {
            let response=await axios.post(URL,login)
            console.log("response is:-"+response.data);
            if(response.data.code==200){
              navigate("/AdminHome")
              localStorage.setItem("Token_key",response.data.token);
            }
            else if(response.data.code==404){
              alert("wrong password")
            }
            else{
              alert("Email Id not matched")
            }           
            
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
    <h1 style={{textAlign:"center", marginTop:"40px"}}>Login Form</h1>
    <div>
    <form style={conBox} onSubmit={handleForm}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">User Id</label>
    <input type="email" className="form-control" id="exampleInputEmail1" required name="userId" onChange={fetchData} value={login.userId}/>
    
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" required name="pass" onChange={fetchData} value={login.pass}/>
  </div>
  
  <button style={{marginLeft:"45%"}} type="submit" className="btn btn-primary">Login</button>
</form>

    </div>
    
    </>
    )
}
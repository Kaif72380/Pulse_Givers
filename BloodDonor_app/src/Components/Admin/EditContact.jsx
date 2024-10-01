import { useState,useEffect } from "react"
import { useNavigate,useLocation } from "react-router-dom"
import axios from 'axios';

function EditContact() {
    const location = useLocation();
    const navigate=useNavigate()
  const queryParams = new URLSearchParams(location.search);
 const id = queryParams.get("id")
  const [contact,setContact]=useState({id:"",userName:"",userEmail:"",userPhone:"",userQuery:""})
    

    const EDIT_URL="https://pulse-givers.onrender.com/admin/editcontact"

    useEffect(()=>{
        fetchData()
    },[])
    async function fetchData()
    {
        
           
            try {
                const response = await axios.post(`https://pulse-givers.onrender.com/admin/getContact/${id}`)
                setContact(response.data)
            } catch (error) {
                console.log(error);
            }
        }
    

    const handleChange=(e)=>{
        //const {name,value}=e.target;
    setContact({...contact,[e.target.name]:e.target.value});
        console.log(contact);


    }
    const handleForm= async(e)=>{
        e.preventDefault()
        try{
            contact.id = id
        const response = await axios.put(EDIT_URL,contact)
        if(response.data.acknowledged)
        alert("contact edit successfully......");
      navigate("/allcontacts")
        }
        catch(err)
        {
            console.log(err);
        }

    }
    
    return ( 
        <>

<div className="container-fluid mt-4">
        <div className="row">
          <div className="col-5 mx-auto">
            <div className="p-3" style={{  boxShadow: "rgba(0, 0, 0, 0.75) 5px 5px 25px",borderRadius:"30px"}}>
              <form onSubmit={handleForm}>
                <h2 className='text-center'>Edit Contact</h2>
                <div className="mb-3 row">
                  <label htmlFor="name" className="form-label col-sm-3">Name</label>
                  <div className="col-sm-9">
                    <input type="text" className="form-control" name="userName"  value={contact.userName} onChange={handleChange} />
                  </div>
                </div>
                <div className="mb-3 row">
                  <label htmlFor="email" className="form-label col-sm-3">Email</label>
                  <div className="col-sm-9">
                    <input type="email" className="form-control" name="userEmail"  value={contact.userEmail} onChange={handleChange} />
                  </div>
                </div>
                <div className="mb-3 row">
                  <label htmlFor="phone" className="form-label col-sm-3">Phone</label>
                  <div className="col-sm-9">
                    <input type="tel" className="form-control" name= "userPhone" value={contact.userPhone} onChange={handleChange} />
                  </div>
                </div>

               
                <div className="mb-3 row">
                  <label htmlFor="address" className="form-label col-sm-3">Query</label>
                  <div className="col-sm-9">
                    <textarea className="form-control" name="userQuery"  value={contact.userQuery} onChange={handleChange}></textarea>
                  </div>
                </div>

                <div className="mb-3 row">
                  <div className="col-6"></div>
                  <div className="col-6">
                    <button type="submit" className="btn btn-primary">save</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>






    
        </>
     );

    }
export default EditContact;

import { useNavigate } from "react-router-dom";

export default function AdminHeader(){

  const navigate=useNavigate();
    const tokenData=localStorage.getItem("Token_key")
//alert(tokenData)
    const logout=(e)=>{
      //alert("in function")
        e.preventDefault();
        if(window.confirm("Do you want to logout?"))
        {
          //alert("in if")
          if(!tokenData)
          {
            navigate("/login")
          }
          else{
            //alert("in else")
            localStorage.removeItem("Token_key")
            navigate("/login")
          }
        }
      }


    return(
        <>
        {/* NAVBAR STARTS */}
        
        
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/AllContacts">All Contacts</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/AllFeedbacks">All Feedbacks</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/AllDonors">All Donors</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/addcampaign">Add Campaign</a>
        </li>
        
        
      </ul>

      <button className="btn btn-outline-success" type="submit" onClick={logout}>Logout</button>
    </div>
  </div>
</nav>
        
        {/* NAVBAR ENDS */}
        </>
    )
}
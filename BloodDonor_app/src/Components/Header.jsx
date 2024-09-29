import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom"
export default function Header(){

  const navigate=useNavigate();
  const tokenData=localStorage.getItem("Token_key")
//alert(tokenData)
  const login=(e)=>{
    navigate("/login")
  }



    return(
    <>
    {/* NAVBAR STARTS */}
     <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Home</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/AboutUs">About Us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/contactus">Contact Us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/feedback">Feedback</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Donor
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/DonorRegistration"> Donor Registration</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/Login">Login</a></li>
            
          </ul>

          
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/ViewDonor">View Donors</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/ViewCampaign">View Campaigns</a>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="false">Disabled</a>
        </li> */}
      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <div style={{width:"200px"}}><button className="btn btn-outline-success" type="submit">Search Donors</button></div>
      </form> */}
      <button className="btn btn-outline-success" onClick={login}>Login</button>
    </div>
  </div>
</nav>
   {/* NAVBAR ENDS */}
</>)
}
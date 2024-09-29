import Header from "./Header"

let container={
    height:"280px",
    width:"500px",
    background:"white",
    textAlign:"center",
    marginLeft:"35%",
    padding:"5px",
    borderRadius:"3px"
    
}



export default function AboutUs(){
    return(
        <>
        <Header/>
        <h1 class="m-5 fw-semibold text-center">About Us Page</h1>
        <h1 class="m-5 fw-semibold text-center">Welcome to PulseGivers Donor Center!</h1>

        <div style={container}>
            <p>At Lifeblood, we believe in the power of giving and saving lives through blood donation. Every donation has the potential to make a profound impact, providing vital support for accident victims, patients undergoing surgery, cancer treatments, and those with chronic illnesses.

                Our user-friendly platform allows you to easily schedule appointments, find nearby donation centers, and track your donation history. Whether you're a first-time donor or a seasoned contributor, we provide a safe, comfortable, and supportive environment. Our skilled professionals ensure that every donation process is smooth and efficient.

                Join us in the mission to save lives. Give blood, share life. Together, we can make a difference!</p>
        </div>
        </>
    )
}
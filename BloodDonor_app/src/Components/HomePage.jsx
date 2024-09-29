import Header from "./Header"
import ReviewFeedback from "./reviewFeedback"

export default function HomePage(){
    return(
        <>
        <Header/>
        <h1 style={{textAlign:"center"}}>Welcome To The Pulse Givers Site</h1>

      {/* CAROUSEL STARTS HERE */}
        <div style={{marginLeft:"25%",borderRadius:"5px"}}>
        <div style={{height:"50vh", width:"50vw"}} id="carouselExampleIndicators" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6" aria-label="Slide 7"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="7" aria-label="Slide 8"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="8" aria-label="Slide 9"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="9" aria-label="Slide 10"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img style={{height:"50vh", width:"50vw",borderRadius:"50px"}} src="images/1.jpeg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img style={{height:"50vh", width:"50vw",borderRadius:"50px"}} src="images/2.jpeg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img style={{height:"50vh", width:"50vw",borderRadius:"50px"}} src="images/3.jpeg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img style={{height:"50vh", width:"50vw",borderRadius:"50px"}} src="images/4.jpeg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img style={{height:"50vh", width:"50vw",borderRadius:"50px"}} src="images/5.jpeg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img style={{height:"50vh", width:"50vw",borderRadius:"50px"}} src="images/6.jpeg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img style={{height:"50vh", width:"50vw",borderRadius:"50px"}} src="images/7.png" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img style={{height:"50vh", width:"50vw",borderRadius:"50px"}} src="images/8.png" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img style={{height:"50vh", width:"50vw",borderRadius:"50px"}} src="images/9.png" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img style={{height:"50vh", width:"50vw",borderRadius:"50px"}} src="images/10.png" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>
{/* CAROUSEL ENDS HERE */}

<hr />
{/* REVIEWS START HERE */}
<div>
<div class="fs-3 fw-semibold text-center">Reviews</div>
<ReviewFeedback/>
</div>
{/* REVIEWS END HERE */}
<hr />



        
        </>
    )
}
import React from "react";

const HomePage = () => {
  return (
    <div>
      {/* Carousel Slider */}
      <div
        id="jobPortalCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#jobPortalCarousel"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#jobPortalCarousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#jobPortalCarousel"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              style={{ height: "400px" }}
              src="https://rgitech.weebly.com/uploads/1/0/1/4/101493456/published/job-portal-software-script_1.png?1491821976"
              className="d-block w-100"
              alt="Slide 1"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Find Your Dream Job</h5>
              <p>Explore thousands of opportunities tailored to your skills.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              style={{ height: "400px" }}
              src="https://images.pexels.com/photos/39811/pexels-photo-39811.jpeg?cs=srgb&dl=pexels-veeterzy-39811.jpg&fm=jpg"
              className="d-block w-100"
              alt="Slide 2"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Hire the Best Candidates</h5>
              <p>Post your job and get connected with top professionals.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              style={{ height: "400px" }}
              src="https://c0.wallpaperflare.com/preview/751/2/550/chart-graph-business-finance.jpg"
              className="d-block w-100"
              alt="Slide 3"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Easy and Efficient</h5>
              <p>Manage your recruitment process seamlessly.</p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#jobPortalCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#jobPortalCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Main Content */}
      <main style={{ padding: "20px", textAlign: "center" }}>
        <h2>Welcome to the Online Job Portal</h2>
        <p>Find your dream job or hire the perfect candidate.</p>
      </main>
    </div>
  );
};

export default HomePage;

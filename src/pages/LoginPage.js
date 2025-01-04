import React from "react";

const LoginPage = () => {
  return (
    <div
      className="container-fluid d-flex justify-content-center align-items-center"
      style={{
        minHeight: "70vh",
        backgroundImage: "linear-gradient(to right, #1e3c72, #2a5298)", // Subtle gradient inspired by official site
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        marginTop: "10px",
      }}
    >
      <div className="row w-100" style={{ maxWidth: "900px" }}>
        {/* Left Section - Information */}
        <div className="col-md-6 d-none d-md-block">
          <div className="d-flex flex-column justify-content-center align-items-start h-100 text-white">
            <h1 className="fw-bold">Welcome Back!</h1>
            <p style={{ fontSize: "1.2rem", lineHeight: "1.8" }}>
              Your next career opportunity is just a click away. Sign in to
              explore top jobs tailored for you.
            </p>
          </div>
        </div>

        {/* Right Section - Login Form */}
        <div className="col-md-6">
          <div
            className="card shadow-lg"
            style={{
              borderRadius: "15px",
              background: "rgba(255, 255, 255, 0.9)",
            }}
          >
            <div className="card-body p-4">
              <h3 className="card-title text-center text-primary">Login</h3>
              <form>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Enter your password"
                  />
                </div>
                <div className="d-flex justify-content-between">
                  <div>
                    <input
                      type="checkbox"
                      id="rememberMe"
                      className="form-check-input"
                    />
                    <label
                      htmlFor="rememberMe"
                      className="form-check-label ms-1"
                    >
                      Remember Me
                    </label>
                  </div>
                  <a href="/forgot-password" className="text-primary">
                    Forgot Password?
                  </a>
                </div>
                <div className="d-grid mt-4">
                  <button type="submit" className="btn btn-primary">
                    Login
                  </button>
                </div>
                <p className="text-center mt-3">
                  Don't have an account?{" "}
                  <a href="/register" className="text-primary fw-bold">
                    Sign Up
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

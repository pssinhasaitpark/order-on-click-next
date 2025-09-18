import React, { useState } from "react";
import wholsell_logo from "../../assets/images/wholsell_logo.gif";
const LoginForm = () => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Phone:", phone, "Password:", password);
  };

  return (
    <div className="p-5 d-flex justify-content-center align-items-center ">
      <div
        className="card shadow p-5"
        style={{ maxWidth: "500px", width: "100%" }}
      >
        {/* Logo */}
        <div className="text-center mb-3">
          <img
            src={wholsell_logo}
            alt="Order On Click Logo"
            className="img-fluid"
            style={{ maxWidth: "200px", height: "100px" }}
          />
        </div>

        {/* Heading */}
        <h4 className="text-center fw-semibold mb-4">Login to your account</h4>

        <form onSubmit={handleSubmit}>
          {/* Phone */}
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>

          {/* Password */}
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Forgot password */}
          <div className="mb-3 text-end">
            <a href="#" className="text-danger small text-decoration-none">
              Forgot password?
            </a>
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="btn btn-danger w-100 fw-semibold"
            style={{
              height: "45px",
              backgroundColor: "#E62E04",
              color: "white",
            }}
          >
            Login
          </button>
        </form>

        {/* Register link */}
        <div className="text-center mt-3">
          <small>
            Don't have an account?{" "}
            <a href="#" className="text-danger text-decoration-none">
              Register Now
            </a>
          </small>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;

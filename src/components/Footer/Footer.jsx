import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <div className="container-fluid">
        {/* Main Footer Content */}
        <div className="row align-items-start">
          {/* Left Section - GIF and Google Play Button */}
          <div className="col-lg-3 col-md-6 col-12 mb-4 text-center">
            <div className="mb-3">
              {/* Replace with your GIF URL */}
              <img 
                src="https://via.placeholder.com/200x100/FFD700/000000?text=ORDER+ON+CLICK+CHANNEL" 
                alt="Order on Click Channel" 
                className="img-fluid rounded shadow-sm"
                style={{ maxWidth: '200px', height: 'auto' }}
              />
            </div>
            <div>
              <a href="#" className="text-decoration-none">
                <img 
                  src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                  alt="Get it on Google Play"
                  className="img-fluid"
                  style={{ maxWidth: '150px', height: 'auto' }}
                />
              </a>
            </div>
          </div>

          {/* Middle Section - GIFs */}
          <div className="col-lg-3 col-md-6 col-12 mb-4 text-center">
            <div className="d-flex flex-column align-items-center">
              <div className="mb-3">
                <img 
                  src="https://via.placeholder.com/120x120/FF6B35/FFFFFF?text=MADE+IN+INDIA" 
                  alt="Made in India" 
                  className="img-fluid rounded-circle shadow-sm mb-2"
                  style={{ width: '100px', height: '100px' }}
                />
              </div>
              <div>
                <img 
                  src="https://via.placeholder.com/120x120/4285F4/FFFFFF?text=ORDER+ON+CLICK" 
                  alt="Order on Click" 
                  className="img-fluid rounded shadow-sm"
                  style={{ width: '120px', height: '80px' }}
                />
              </div>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="col-lg-3 col-md-6 col-12 mb-4">
            <h5 className="text-uppercase fw-bold mb-3 text-warning">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-light text-decoration-none">
                  <i className="fas fa-envelope me-2"></i>Contact Us
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-light text-decoration-none">
                  <i className="fas fa-info-circle me-2"></i>About Us
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-light text-decoration-none">
                  <i className="fas fa-shipping-fast me-2"></i>Shipping Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Register Section */}
          <div className="col-lg-3 col-md-6 col-12 mb-4">
            <h5 className="text-uppercase fw-bold mb-3 text-warning">Register</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-light text-decoration-none">
                  <i className="fas fa-sign-in-alt me-2"></i>Login
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-light text-decoration-none">
                  <i className="fas fa-history me-2"></i>Order History
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-light text-decoration-none">
                  <i className="fas fa-bell me-2"></i>My Notification
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer Section */}
        <hr className="border-secondary my-4" />
        <div className="row align-items-center">
          {/* Copyright */}
          <div className="col-lg-4 col-md-12 mb-3 mb-lg-0 text-center text-lg-start">
            <p className="mb-0 text-muted">
              © <strong>OrderonClick.com</strong> 2022
            </p>
          </div>

          {/* Social Media Icons */}
          <div className="col-lg-4 col-md-12 mb-3 mb-lg-0">
            <div className="d-flex justify-content-center gap-3">
              <a href="#" className="text-light">
                <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                  <i className="fab fa-facebook-f"></i>
                </div>
              </a>
              <a href="#" className="text-light">
                <div className="bg-info rounded-circle d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                  <i className="fab fa-twitter"></i>
                </div>
              </a>
              <a href="#" className="text-light">
                <div className="rounded-circle d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px', background: 'linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)' }}>
                  <i className="fab fa-instagram"></i>
                </div>
              </a>
              <a href="#" className="text-light">
                <div className="bg-danger rounded-circle d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                  <i className="fab fa-youtube"></i>
                </div>
              </a>
              <a href="#" className="text-light">
                <div className="rounded-circle d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px', backgroundColor: '#0077b5' }}>
                  <i className="fab fa-linkedin-in"></i>
                </div>
              </a>
            </div>
          </div>

          {/* App Download Button */}
          <div className="col-lg-4 col-md-12 text-center text-lg-end">
            <a href="#" className="text-decoration-none">
              <div className="d-inline-flex align-items-center bg-warning text-dark px-3 py-2 rounded shadow">
                <i className="fab fa-google-play me-2 fs-4"></i>
                <div>
                  <div className="small fw-bold">Download</div>
                  <div className="small">The App now</div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Include Font Awesome for icons */}
      <link 
        rel="stylesheet" 
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
      />
    </footer>
  );
};

export default Footer;
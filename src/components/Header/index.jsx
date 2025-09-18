import React, { useState } from "react";
import { logo } from "../../assets";
import { Link } from "react-router-dom";
const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    "Home",
    "Flash Sale",
    "Videos",
    "Best Selling",
    "All Categories",
    "All Sellers",
    "Terms & Condition",
  ];

  return (
    <>
      {/* MAIN HEADER */}
      <header className="bg-light border-bottom">
        <div className="container-fluid">
          <div className="row align-items-center py-2 py-md-3 gx-2 gx-md-3 d-flex justify-content-between ">
            {/* Hamburger Menu - Mobile Only */}
            <div className="col-auto d-lg-none">
              <button
                className="btn border-0 p-2"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
              >
                <i className="fas fa-bars fa-lg"></i>
              </button>
            </div>

            {/* Logo */}
            <div className="col-auto">
              <div className="d-flex align-items-center ms-4 justify-content-end">
                <img 
                  src={logo} 
                  alt="Logo" 
                  className="img-fluid" 
                  style={{ maxHeight: "60px", height: "auto" }}
                />
              </div>
            </div>

            {/* Search Bar - Desktop and Tablet */}
            <div className="col-sm-6 d-none d-md-block">
              <div className="input-group mx-2 mx-lg-4">
                <input
                  type="text"
                  className="form-control"
                  placeholder="I am shopping for..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className="btn btn-danger px-3" type="button">
                  <i className="fas fa-search"></i>
                </button>
              </div>
            </div>

<<<<<<< HEAD
            {/* Right Menu (Desktop only) */}
            <div className="col-lg-4 col-md-4 col-sm-6 col-6 d-none d-md-flex justify-content-end align-items-center flex-wrap gap-3">
              <div className="d-flex align-items-center text-dark">
                <Link
                  to="/order"
                  className="text-dark text-decoration-none d-flex align-items-center"
                >
                  <i className="fas fa-box me-1"></i>
                  <span className="small">My Orders</span>
                </Link>
              </div>
              <div className="d-flex align-items-center text-dark position-relative">
                <Link
                  to="/login"
                  className="text-dark text-decoration-none d-flex align-items-center"
                >
                  <i className="fas fa-warehouse me-2"></i> Wholesale
                </Link>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger small">
                  1
                </span>
              </div>
              <div className="d-flex align-items-center text-dark position-relative">
                <i className="fas fa-shopping-cart me-1"></i>
                <span className="small">Cart</span>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger small">
                  0
                </span>
=======
            {/* Header Icons - Desktop and Large Tablets */}
            <div className="col-sm-3 d-none d-lg-flex justify-content-end me-5">
              <div className="d-flex align-items-center gap-xl-3">
                {/* My Orders */}
                <div className="d-flex align-items-center text-dark px-2 py-1 header-icon-item">
                  <i className="fas fa-box me-2"></i>
                  <span className="small d-none d-xl-inline">My Orders</span>
                </div>

                {/* Wholesale */}
                <div className="d-flex align-items-center text-dark position-relative px-2 py-1 header-icon-item">
                  <i className="fas fa-warehouse me-2"></i>
                  <span className="small d-none d-xl-inline">Wholesale</span>
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger small">
                    1
                  </span>
                </div>

                {/* Cart */}
                <div className="d-flex align-items-center text-dark position-relative px-2 py-1 header-icon-item">
                  <i className="fas fa-shopping-cart me-2"></i>
                  <span className="small d-none d-xl-inline">Cart</span>
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger small">
                    0
                  </span>
                </div>

                {/* Notifications */}
                <div className="d-flex align-items-center text-dark px-2 py-1 header-icon-item">
                  <i className="fas fa-bell me-2"></i>
                  <span className="small d-none d-xl-inline">Notification</span>
                </div>
>>>>>>> 5fc55c464f0680cdd0f470bb7ce654a675c11d92
              </div>
            </div>

            {/* Compact Icons - Medium Tablets */}
            <div className="col-auto d-none d-md-flex d-lg-none ">
              <div className="d-flex align-items-center gap-3">
                <div className="position-relative">
                  <i className="fas fa-box text-dark"></i>
                </div>
                <div className="position-relative">
                  <i className="fas fa-warehouse text-dark"></i>
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{fontSize: "0.6rem"}}>1</span>
                </div>
                <div className="position-relative">
                  <i className="fas fa-shopping-cart text-dark"></i>
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{fontSize: "0.6rem"}}>0</span>
                </div>
                <div>
                  <i className="fas fa-bell text-dark"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Collapsible Menu */}
        {menuOpen && (
          <div className="d-lg-none bg-white border-top">
            <div className="p-3">
              {/* Search Bar - Mobile */}
              <div className="input-group mb-4">
                <input
                  type="text"
                  className="form-control"
                  placeholder="I am shopping for..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className="btn btn-danger px-3" type="button">
                  <i className="fas fa-search"></i>
                </button>
              </div>

<<<<<<< HEAD
              {/* Menu */}
              <div className="d-flex flex-column gap-3 mb-3">
                <div className="d-flex align-items-center">
                  <Link
                    to="/order"
                    className="text-dark text-decoration-none d-flex align-items-center"
                  >
                    <i className="fas fa-box me-2"></i> My Orders
                  </Link>
                </div>

                <div className="d-flex align-items-center position-relative">
                  <Link
                    to="/login"
                    className="text-dark text-decoration-none d-flex align-items-center"
                  >
                    <i className="fas fa-warehouse me-2"></i> Wholesale
                  </Link>
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger small">
                    1
                  </span>
                </div>

                <div className="d-flex align-items-center position-relative">
                  <i className="fas fa-shopping-cart me-2"></i> Cart
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger small">
                    0
                  </span>
=======
              {/* Mobile Menu Items */}
              <div className="d-flex flex-column gap-3 mb-4 ">
                <div className="d-flex align-items-center py-2 mobile-menu-item">
                  <i className="fas fa-box me-3"></i>
                  <span>My Orders</span>
                </div>
                <div className="d-flex align-items-center position-relative py-2 mobile-menu-item">
                  <i className="fas fa-warehouse me-3"></i>
                  <span>Wholesale</span>
                  <span className="position-absolute badge rounded-pill bg-danger small ms-2" style={{left: "100px"}}>1</span>
                </div>
                <div className="d-flex align-items-center position-relative py-2 mobile-menu-item">
                  <i className="fas fa-shopping-cart me-3"></i>
                  <span>Cart</span>
                  <span className="position-absolute badge rounded-pill bg-danger small ms-2" style={{left: "60px"}}>0</span>
>>>>>>> 5fc55c464f0680cdd0f470bb7ce654a675c11d92
                </div>
                <div className="d-flex align-items-center py-2 mobile-menu-item">
                  <i className="fas fa-bell me-3"></i>
                  <span>Notifications</span>
                </div>
              </div>

              {/* Navigation Items */}
              <div className="border-top pt-3">
                <h6 className="text-muted mb-3">Navigation</h6>
                <ul className="list-unstyled">
                  {navItems.map((item, index) => (
                    <li key={index} className="py-2">
                      <a href="#" className="text-dark text-decoration-none d-block py-1">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* SUB HEADER - Desktop Navigation */}
      <nav className="navbar navbar-expand-lg navbar-light   d-none d-lg-block">
        <div className="container-fluid">
          <div className="collapse navbar-collapse show">
            <ul className="navbar-nav mx-auto">
              {navItems.map((item, index) => (
                <li key={index} className="nav-item mx-1">
                  <a
                    href="#"
                    className="nav-link text-muted px-3 py-2 rounded hover-effect"
                    style={{
                      fontSize: "14px",
                      fontWeight: "500",
                      transition: "all 0.3s ease",
                    }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* Custom Styles */}
      <style jsx>{`
        .header-icon-item {
          cursor: pointer;
          border-radius: 8px;
          transition: all 0.3s ease;
        }
        .header-icon-item:hover {
          background-color: rgba(0, 0, 0, 0.05);
          transform: translateY(-1px);
        }
        .mobile-menu-item {
          cursor: pointer;
          border-radius: 8px;
          padding-left: 8px !important;
          padding-right: 8px !important;
          transition: all 0.3s ease;
        }
        .mobile-menu-item:hover {
          background-color: rgba(0, 0, 0, 0.05);
        }
        .hover-effect:hover {
          color: #dc3545 !important;
          background-color: rgba(220, 53, 69, 0.1);
        }
        
        /* Responsive breakpoint adjustments */
        @media (max-width: 575.98px) {
          .container-fluid {
            padding-left: 8px;
            padding-right: 8px;
          }
        }
        
        @media (min-width: 1400px) {
          .gap-xl-4 {
            gap: 2rem !important;
          }
        }
      `}</style>

      {/* External Dependencies */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
      />
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css"
        rel="stylesheet"
      />
    </>
  );
};

export default Header;
import React, { useState } from "react";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false); // single toggle for both

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
          <div className="row align-items-center py-2">
            {/* Hamburger (Mobile only) */}
            <div className="col-auto d-md-none d-flex align-items-center">
              <button
                className="btn border-0"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <i className="fas fa-bars fa-lg"></i>
              </button>
            </div>

            {/* Logo */}
            <div className="col-lg-2 col-md-3 col-sm-6 col-6 d-flex align-items-center">
              <div className="d-flex align-items-center">
                <div className="position-relative">
                  <div
                    className="bg-warning rounded p-2 me-2"
                    style={{ width: "60px", height: "40px" }}
                  >
                    <div className="text-white fw-bold small">ORDER</div>
                    <div className="position-absolute top-0 end-0">
                      <span className="badge bg-danger rounded-circle small">
                        ®
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="d-flex align-items-center">
                    <span
                      className="badge bg-success rounded-circle me-1"
                      style={{ width: "12px", height: "12px" }}
                    ></span>
                    <span className="fw-bold text-primary small">
                      ORDERONCLICK
                    </span>
                    <span
                      className="badge bg-info rounded-circle ms-1"
                      style={{ width: "12px", height: "12px" }}
                    ></span>
                  </div>
                  <div className="text-primary fw-bold small">.COM</div>
                </div>
              </div>
            </div>

            {/* Search (visible only on desktop) */}
            <div className="col-lg-6 col-md-5 d-none d-md-block">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="I am shopping for..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className="btn btn-danger" type="button">
                  <i className="fas fa-search"></i>
                </button>
              </div>
            </div>

            {/* Right Menu (Desktop only) */}
            <div className="col-lg-4 col-md-4 col-sm-6 col-6 d-none d-md-flex justify-content-end align-items-center flex-wrap gap-3">
              <div className="d-flex align-items-center text-dark">
                <i className="fas fa-box me-1"></i>
                <span className="small">My Orders</span>
              </div>
              <div className="d-flex align-items-center text-dark position-relative">
                <i className="fas fa-warehouse me-1"></i>
                <span className="small">Wholesale</span>
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
              </div>
              <div className="d-flex align-items-center text-dark">
                <i className="fas fa-bell"></i>
                <span className="small ms-1">Notification</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Collapsible Menu */}
        {menuOpen && (
          <div className="d-md-none bg-white border-top">
            <div className="p-3">
              {/* Search (only mobile when menu open) */}
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="I am shopping for..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className="btn btn-danger" type="button">
                  <i className="fas fa-search"></i>
                </button>
              </div>

              {/* Menu */}
              <div className="d-flex flex-column gap-3 mb-3">
                <div className="d-flex align-items-center">
                  <i className="fas fa-box me-2"></i> My Orders
                </div>
                <div className="d-flex align-items-center position-relative">
                  <i className="fas fa-warehouse me-2"></i> Wholesale
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger small">
                    1
                  </span>
                </div>
                <div className="d-flex align-items-center position-relative">
                  <i className="fas fa-shopping-cart me-2"></i> Cart
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger small">
                    0
                  </span>
                </div>
                <div className="d-flex align-items-center">
                  <i className="fas fa-bell me-2"></i> Notifications
                </div>
              </div>

              {/* SubHeader nav items inside same toggle */}
              <ul className="list-unstyled">
                {navItems.map((item, index) => (
                  <li key={index} className="py-2 border-bottom">
                    <a href="#" className="text-muted text-decoration-none">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </header>

      {/* SUB HEADER (Desktop only) */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom d-none d-md-block">
        <div className="container-fluid">
          <div className="collapse navbar-collapse show">
            <ul className="navbar-nav mx-auto">
              {navItems.map((item, index) => (
                <li key={index} className="nav-item">
                  <a
                    href="#"
                    className="nav-link text-muted px-3 py-2"
                    style={{
                      fontSize: "14px",
                      fontWeight: "500",
                      transition: "color 0.3s ease",
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

      {/* Font Awesome & Bootstrap */}
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

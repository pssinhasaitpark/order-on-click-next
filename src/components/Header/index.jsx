import React, { useState } from "react";
import { logo } from "../../assets";
import { Link } from "react-router-dom";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const navItems = [
    { label: "Home", path: "/home" },
    { label: "Flash Sale", path: "/flash-sale" },
    { label: "Videos", path: "/videos" },
    { label: "Best Selling", path: "/best-selling" },
    { label: "All Categories", path: "/all-categories" },
    { label: "All Sellers", path: "/all-sellers" },
    { label: "Terms & Condition", path: "/terms-condition" },
  ];

  return (
    <>
      <header>
        {/* Main Header */}
        <div className="bg-white border-bottom">
          <div className="">
            <div className="d-flex align-items-center justify-content-evenly py-3">
              {/* Logo */}
              <div>
                <img
                  src={logo}
                  alt="Logo"
                  className="img-fluid"
                  style={{ maxHeight: "90px" }}
                />
              </div>

              {/* Search Bar */}
              <div className="flex-grow-1 mx-4" style={{ maxWidth: "600px" }}>
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

              {/* Right Menu */}
              <div className="d-flex align-items-center justify-content-around gap-4">
                <Link
                  to="/order"
                  className="text-dark text-decoration-none d-flex align-items-center gap-1"
                  style={{ fontSize: "14px" }}
                >
                  <i className="fas fa-box"></i> My Orders
                </Link>

                <Link
                  to="/login"
                  className="text-dark text-decoration-none d-flex align-items-center gap-1 position-relative"
                  style={{ fontSize: "14px" }}
                >
                  <i className="fas fa-warehouse"></i> Wholesale
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    0
                  </span>
                </Link>

                <div
                  className="d-flex align-items-center gap-1 position-relative"
                  style={{ fontSize: "14px", cursor: "pointer" }}
                >
                  <i className="fas fa-shopping-cart"></i>
                  <span>Cart</span>
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    0
                  </span>
                </div>

                <div style={{ fontSize: "14px", cursor: "pointer" }}>
                  <i className="fas fa-bell"></i>
                  <span>Notifications</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sub Navigation */}
        <nav className="navbar navbar-expand-lg navbar-light bg-white d-none d-lg-block">
          <div className="container">
            <ul className="navbar-nav mx-auto">
              {navItems.map(({ label, path }, index) => (
                <li key={index} className="nav-item mx-2">
                  <Link
                    to={path}
                    className="nav-link text-muted px-3 py-2 rounded"
                    style={{
                      fontSize: "14px",
                      fontWeight: "500",
                      transition: "all 0.3s ease",
                    }}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;

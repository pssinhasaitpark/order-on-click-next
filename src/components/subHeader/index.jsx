import React from 'react';

const SubHeader = () => {
  const navItems = [
    'Home',
    'Flash Sale',
    'Videos',
    'Best Selling',
    'All Categories',
    'All Sellers',
    'Terms & Condition'
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
      <div className="container-fluid">
        {/* Mobile toggle button */}
        {/* <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#subNavbar"
          aria-controls="subNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button> */}

        {/* Collapsible navbar content */}
        <div className="collapse navbar-collapse" id="subNavbar">
          <ul className="navbar-nav mx-auto">
            {navItems.map((item, index) => (
              <li key={index} className="nav-item">
                <a
                  href="#"
                  className="nav-link text-muted px-3 py-2"
                  style={{
                    fontSize: '14px',
                    fontWeight: '500',
                    textDecoration: 'none',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = '#6c757d';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = '#6c757d';
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
  );
};

export default SubHeader;
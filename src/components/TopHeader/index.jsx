import React from "react";
import quickBuy from "../../assets/images/quick_buy.gif";
import { Link } from "react-router-dom";
const TopHeader = () => {
  return (
    <>
      <div className="border-bottom py-lg-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col">
              <ul className="d-flex justify-content-between justify-content-lg-start mb-0">
                <li className="list-inline-item dropdown mr-3" id="lang-change">
                  <Link to="https://www.orderonclick.com/category.php">
                    <img
                      src={quickBuy}
                      alt="quickBuy"
                      image=""
                      width="111"
                      height="30"
                    />
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-8 text-right d-lg-block border-end py-lg-1">
              <ul className="list-inline mb-0 h-100 d-flex justify-content-end align-items-center">
                <li className=" list-inline-item mr-3 border-right border-left-0 pr-3 pl-0">
                  <a
                    href="https://orderonclick.com/Help_Desk/"
                    classNameName="text-muted text-decoration-none d-flex align-items-center"
                    target="_blank"
                    style={{ fontSize: "14px", gap: "6px" }}
                  >
                    <i classNameName="la la-phone"></i>
                    <span>Help line</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopHeader;

// src/pages/Home/BannerSection.js
import React, { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../redux/slices/categorySlice";
import { fetchRentalItems } from "../../redux/slices/rentalItemListSlice";
import { fetchHomeBanners } from "../../redux/slices/homeBannerSlice";
import { Delivery, Rent } from "../../assets";
import { TiArrowSortedDown } from "react-icons/ti";
import "./Home.css";
import { Slider } from "../../components";
import Categories from "../../components/catogeriesComponent/CatogeriesComponent";
import { Link } from "react-router-dom";

const BannerSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const dispatch = useDispatch();

  // Fetch banners from Redux
  const { banners, loading, error } = useSelector((state) => state.homeBanner);

  // Fetch rental items for the sidebar
  const rentalItems = useSelector((state) => {
    const filterKey = `no-search_no-category`;
    return state.rental?.allPagesData?.[filterKey]?.[1] || [];
  });

  // Fetch data on component mount
  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchRentalItems({ page_no: 1, limit: 10 }));
    dispatch(fetchHomeBanners());
  }, [dispatch]);

  // Auto-advance slider
  useEffect(() => {
    if (banners.length > 0) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % banners.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [banners.length]);

  // Shuffle and select random rental items for the sidebar
  const randomRentalItems = useMemo(() => {
    const shuffled = [...rentalItems].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 4);
  }, [rentalItems]);

  // Show loading/error states
  if (loading)
    return <div className="text-center my-5">Loading banners...</div>;
  if (error)
    return <div className="text-center my-5 text-danger">Error: {error}</div>;
  if (banners.length === 0)
    return <div className="text-center my-5">No banners available</div>;

  return (
    <>
      <div className="hero-section d-flex justify-content-center mx-auto px-3 px-md-0">
        <div className="row g-3 w-100">
          {/* Left Sidebar - Categories */}
          <div className="col-lg-3 col-md-4 col-12 order-3 order-md-1">
            <Categories />
          </div>

          {/* Main Banner Area */}
          <div className="col-lg-7 col-md-8 col-12 order-1 order-md-2">
            <div className="position-relative">
              {/* Main Banner Carousel */}
              <div className="banner-container position-relative overflow-hidden rounded">
                <div
                  className="d-flex transition-transform"
                  style={{
                    transform: `translateX(-${currentSlide * 100}%)`,
                    transition: "transform 0.5s ease-in-out",
                  }}
                >
                  {banners.map((banner) => (
                    <div key={banner.id} className="w-100 flex-shrink-0">
                      <img
                        src={encodeURI(banner.image)}
                        alt={`Banner ${banner.id}`}
                        className="img-fluid w-100"
                        style={{ height: "400px", objectFit: "cover" }}
                      />
                    </div>
                  ))}
                </div>

                {/* Left Arrow */}
                <button
                  className="position-absolute top-50 start-0 translate-middle-y btn btn-light border-0 rounded-circle ms-2"
                  style={{ width: "40px", height: "40px", zIndex: 10 }}
                  onClick={() =>
                    setCurrentSlide(
                      currentSlide === 0 ? banners.length - 1 : currentSlide - 1
                    )
                  }
                  aria-label="Previous Slide"
                >
                  <span className="fw-bold">&lt;</span>
                </button>

                {/* Right Arrow */}
                <button
                  className="position-absolute top-50 end-0 translate-middle-y btn btn-light border-0 rounded-circle me-2"
                  style={{ width: "40px", height: "40px", zIndex: 10 }}
                  onClick={() =>
                    setCurrentSlide((currentSlide + 1) % banners.length)
                  }
                  aria-label="Next Slide"
                >
                  <span className="fw-bold">&gt;</span>
                </button>

                {/* Carousel Indicators */}
                <div className="position-absolute bottom-0 start-50 translate-middle-x mb-3">
                  <div className="d-flex gap-2">
                    {banners.map((_, index) => (
                      <button
                        key={index}
                        className={`rounded-circle border-0 ${
                          currentSlide === index ? "bg-white" : "bg-secondary"
                        }`}
                        style={{ width: "10px", height: "10px" }}
                        onClick={() => setCurrentSlide(index)}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Action Buttons */}
              <div className="row g-3 mt-1">
                {/* Rent Button */}
                <div className="col-md-6 col-12">
                  <Link to="/rental-items" className="text-decoration-none">
                    <div
                      className="position-relative rounded-4 overflow-hidden shadow-sm d-flex align-items-center p-3"
                      style={{
                        background:
                          "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
                        border: "6.5px solid #ff8c00",
                        minHeight: "90px",
                      }}
                    >
                      <img
                        src={Rent}
                        alt="Hire on Rent"
                        className="rounded-2 me-3"
                        style={{
                          width: "95px",
                          height: "65px",
                          objectFit: "cover",
                        }}
                      />
                      <div
                        className="d-none d-sm-block me-3"
                        style={{
                          width: "4px",
                          height: "75px",
                          backgroundColor: "#ff8c00",
                          borderRadius: "1px",
                        }}
                      ></div>
                      <div className="flex-grow-1">
                        <h3
                          className="mb-0 fw-bold text-uppercase text-nowrap"
                          style={{ color: "#ff8c00", lineHeight: "1.2" }}
                        >
                          HIRE ON RENT
                          <div className="fs-1 d-flex justify-content-center align-items-center">
                            <TiArrowSortedDown />
                          </div>
                        </h3>
                      </div>
                    </div>
                  </Link>
                </div>

                {/* Urgent Delivery Button */}
                <div className="col-md-6 col-12">
                  <div
                    className="position-relative rounded-4 overflow-hidden shadow-sm d-flex align-items-center p-3"
                    style={{
                      background:
                        "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
                      border: "6.5px solid #ff8c00",
                      minHeight: "90px",
                    }}
                  >
                    <img
                      src={Delivery}
                      alt="Urgent Delivery"
                      className="rounded-2 me-3"
                      style={{
                        width: "65px",
                        height: "65px",
                        objectFit: "cover",
                      }}
                    />
                    <div
                      className="d-none d-sm-block me-3"
                      style={{
                        width: "4px",
                        height: "75px",
                        backgroundColor: "#ff8c00",
                        borderRadius: "1px",
                      }}
                    ></div>
                    <div className="flex-grow-1">
                      <h4
                        className="mb-0 fw-bold text-uppercase text-nowrap"
                        style={{
                          color: "#ff8c00",
                          letterSpacing: "0.5px",
                          lineHeight: "1.2",
                        }}
                      >
                        URGENT DELIVERY
                        <span className="fs-1 d-flex justify-content-center align-items-center">
                          <TiArrowSortedDown />
                        </span>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar - Hire On Rent Items */}
          <div className="col-lg-2 col-md-12 col-12 order-2 order-md-3">
            <div
              className="bg-light rounded d-flex flex-column"
              style={{
                maxHeight: "560px",
              }}
            >
              {/* Header - Sticky */}
              <div
                className="d-flex justify-content-between align-items-center p-3"
                style={{
                  backgroundColor: "rgba(230, 46, 4, 0.15)",
                  flexShrink: 0,
                }}
              >
                <h6 className="fw-bold mb-0 text-dark">Hire On Rent</h6>
                <small className="text-muted d-none d-md-block">
                  Know more
                </small>
              </div>

              {/* Scrollable Items */}
              <div
                className="overflow-auto p-3 flex-grow-1"
                style={{ maxHeight: "500px"  }}
              >
                {randomRentalItems.length > 0 ? (
                  randomRentalItems.map((item) => (
                    <div
                      key={item.rental_item_id}
                      className="border border-danger border-3 p-2 mb-3 rounded"
                    >
                      <img
                        src={item.item_img}
                        alt={item.item_name}
                        className="img-fluid rounded mb-2"
                        style={{ height: "120px", objectFit: "cover" }}
                      />
                      <h6 className="fw-bold text-dark small mb-0">
                        {item.item_name}
                      </h6>
                    </div>
                  ))
                ) : (
                  <div className="text-muted small">No items available</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slider Section */}
      <div className="hero-section d-flex justify-content-center mx-auto my-4 px-3 px-md-0 slider">
        <Slider />
      </div>
    </>
  );
};

export default BannerSection;

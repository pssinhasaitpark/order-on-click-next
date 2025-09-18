// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchCategories } from "../../redux/slices/categorySlice";
// import Slider from "../../components/slider/Slider";
// const BannerSection = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const dispatch = useDispatch();
//   const { categories, loading, error } = useSelector(
//     (state) => state.categories
//   );

//   useEffect(() => {
//     dispatch(fetchCategories());
//   }, [dispatch]);

//   const banners = [
//     {
//       id: 1,
//       image:
//         "https://orderonclick.com/admin/images/slider/order%20on%20click%20Banner_flash%20sell.gif",
//       alt: "Flash Sale Banner",
//     },
//     {
//       id: 2,
//       image:
//         "https://orderonclick.com/admin/images/slider/order%20on%20click%20Banner_promode.gif",
//       alt: "Pro Mode Banner",
//     },
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % banners.length);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, [banners.length]);

//   return (
//     <div className="my-4 container-fluid px-2 ">
//       <div className="row g-2">
//         {/* Sidebar */}
//         <div className="col-lg-3 col-md-4">
//           <div className="bg-light rounded p-3 h-100">
//             <div className="d-flex justify-content-between align-items-center mb-3">
//               <h6 className="fw-bold mb-0 text-dark">Categories</h6>
//               <small className="text-muted">See All &gt;</small>
//             </div>
//             <div className="category-list">
//               {loading && <p>Loading...</p>}
//               {error && <p className="text-danger">{error}</p>}
//               {!loading && !error && categories?.length > 0
//                 ? categories.map((cat) => (
//                     <div
//                       key={cat.service_id}
//                       className="category-item py-2 border-bottom d-flex align-items-center gap-2"
//                     >
//                       <img
//                         src={cat.service_img}
//                         alt={cat.service_name}
//                         style={{
//                           width: "30px",
//                           height: "30px",
//                           objectFit: "contain",
//                         }}
//                       />
//                       <small className="text-secondary">
//                         {cat.service_name}
//                       </small>
//                     </div>
//                   ))
//                 : !loading && <p>No categories found</p>}
//             </div>
//           </div>
//         </div>

//         {/* Banner Section */}
//         <div className="col-lg-7 col-md-8">
//           <div className="position-relative">
//             <div className="banner-container overflow-hidden rounded">
//               <div
//                 className="d-flex transition-transform"
//                 style={{
//                   transform: `translateX(-${currentSlide * 100}%)`,
//                   transition: "transform 0.5s ease-in-out",
//                 }}
//               >
//                 {banners.map((banner) => (
//                   <div key={banner.id} className="w-100 flex-shrink-0">
//                     <img
//                       src={banner.image}
//                       alt={banner.alt}
//                       className="w-100 h-auto"
//                       style={{ height: "300px", objectFit: "cover" }}
//                     />
//                   </div>
//                 ))}
//               </div>

//               {/* Arrows */}
//               <button
//                 className="position-absolute top-50 start-0 translate-middle-y btn btn-light border-0 rounded-circle ms-2"
//                 onClick={() =>
//                   setCurrentSlide(
//                     (currentSlide - 1 + banners.length) % banners.length
//                   )
//                 }
//               >
//                 &lt;
//               </button>
//               <button
//                 className="position-absolute top-50 end-0 translate-middle-y btn btn-light border-0 rounded-circle me-2"
//                 onClick={() =>
//                   setCurrentSlide((currentSlide + 1) % banners.length)
//                 }
//               >
//                 &gt;
//               </button>
//             </div>
//           </div>

//           {/* Right Sidebar - Placeholder */}
//           <div className="col-lg-3">
//             <div className="bg-light rounded p-3 h-100">
//               <h6 className="fw-bold text-dark mb-3">Hire On Rent</h6>
//               <p>Coming Soon</p>
//             </div>
//           </div>
//         </div>
//         <div className="col-lg-2">Third Column</div>

//         <div className="hero-section d-flex justify-content-center mx-auto  my-4 slider">
//           <Slider />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BannerSection;
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../redux/slices/categorySlice";
import { Delivery, Rent } from "../../assets";
import { TiArrowSortedDown } from "react-icons/ti";
import "./Home.css";
import { Slider } from "../../components";

const BannerSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const dispatch = useDispatch();
  const { categories, loading, error } = useSelector(
    (state) => state.categories
  );

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const banners = [
    {
      id: 1,
      image:
        "https://orderonclick.com/admin/images/slider/order%20on%20click%20Banner_flash%20sell.gif",
      alt: "Flash Sale Banner",
    },
    {
      id: 2,
      image:
        "https://orderonclick.com/admin/images/slider/order%20on%20click%20Banner_promode.gif",
      alt: "Pro Mode Banner",
    },
  ];

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [banners.length]);

  const hireOnRentItems = [
    {
      id: 1,
      image: "/api/placeholder/200/250",
      title: "Party Wear Look Top With Plazzo & Dupatt",
      price: "(Rs.100/-)",
    },
    {
      id: 2,
      image: "/api/placeholder/200/250",
      title: "Designer Lehenga Set",
      price: "(Rs.150/-)",
    },
  ];

  return (
    <>
      <div className="hero-section d-flex justify-content-center mx-auto">
        <div className="row g-3">
          {/* Left Sidebar - Categories */}
          <div className="col-lg-3 col-md-4">
            <div className="bg-light rounded h-100">
              <div
                className="d-flex align-items-center mb-1 p-3"
                style={{ backgroundColor: "rgba(230, 46, 4, 0.15)" }}
              >
                <h6 className="fw-bold mb-0 text-dark">Categories</h6>
                <small className="text-muted mx-3">See All &gt;</small>
              </div>
              <div className="category-list px-3">
                {loading ? (
                  <div className="py-2 text-center">
                    <small className="text-secondary">
                      Loading categories...
                    </small>
                  </div>
                ) : error ? (
                  <div className="py-2 text-center">
                    <small className="text-danger">
                      Error loading categories
                    </small>
                  </div>
                ) : categories && categories.length > 0 ? (
                  categories.map((category) => (
                    <div
                      key={category.service_id}
                      className="category-item py-2 border-bottom border-light d-flex align-items-center"
                    >
                      {/* Category Image */}
                      <div className="me-2 flex-shrink-0">
                        <img
                          src={category.service_img}
                          alt={category.service_name}
                          className="rounded"
                          style={{
                            width: "24px",
                            height: "24px",
                            objectFit: "cover",
                          }}
                          onError={(e) => {
                            e.target.style.display = "none";
                          }}
                        />
                      </div>
                      {/* Category Name */}
                      <small className="text-secondary d-flex align-items-center flex-grow-1">
                        <span className="me-2">&gt;</span>
                        {category.service_name}
                      </small>
                    </div>
                  ))
                ) : (
                  <div className="py-2 text-center">
                    <small className="text-secondary">
                      No categories available
                    </small>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Main Banner Area */}
          <div className="col-lg-7 col-md-8">
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
                  {banners.map((banner, index) => (
                    <div key={banner.id} className="w-100 flex-shrink-0">
                      <img
                        src={banner.image}
                        alt={banner.alt}
                        className="w-100 h-auto"
                        style={{ height: "310px", objectFit: "cover" }}
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
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Action Buttons */}
              <div className="row g-3 mt-1">
                <div className="col-6">
                  <div
                    className="position-relative rounded-4 overflow-hidden shadow-sm"
                    style={{
                      background:
                        "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
                      border: "6.5px solid #ff8c00",
                      minHeight: "90px",
                    }}
                  >
                    <div className="d-flex align-items-center h-100 p-3">
                      {/* Left side - Image */}
                      <div className="flex-shrink-0 me-3">
                        <img
                          src={Rent}
                          alt="Hire on Rent"
                          className="rounded-2"
                          style={{
                            width: "65px",
                            height: "65px",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                      {/* Vertical Line */}
                      <div
                        className="flex-shrink-0 me-3"
                        style={{
                          width: "4px",
                          height: "75px",
                          backgroundColor: "#ff8c00",
                          borderRadius: "1px",
                        }}
                      ></div>
                      {/* Right side - Text and Arrow */}
                      <div className="flex-grow-1 d-flex align-items-center justify-content-between">
                        <div>
                          <h3
                            className="mb-0 fw-bold text-uppercase"
                            style={{
                              color: "#ff8c00",
                              lineHeight: "1.2",
                            }}
                          >
                            HIRE ON RENT
                            <div className="fs-1 d-flex justify-content-center align-items-center">
                              <TiArrowSortedDown />
                            </div>
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-6">
                  <div
                    className="position-relative rounded-4 overflow-hidden shadow-sm"
                    style={{
                      background:
                        "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
                      border: "6.5px solid #ff8c00",
                      minHeight: "90px",
                    }}
                  >
                    <div className="d-flex align-items-center h-100 p-3">
                      {/* Left side - Image */}
                      <div className="flex-shrink-0 me-3">
                        <img
                          src={Delivery}
                          alt="Urgent Delivery"
                          className="rounded-2"
                          style={{
                            width: "65px",
                            height: "65px",
                            objectFit: "cover",
                          }}
                        />
                      </div>

                      {/* Vertical Line */}
                      <div
                        className="flex-shrink-0 me-3"
                        style={{
                          width: "4px",
                          height: "75px",
                          backgroundColor: "#ff8c00",
                          borderRadius: "1px",
                        }}
                      ></div>

                      {/* Right side - Text and Arrow */}
                      <div className="flex-grow-1 d-flex align-items-center justify-content-between">
                        <div>
                          <h4
                            className="mb-0 fw-bold text-uppercase"
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
            </div>
          </div>

          {/* Right Sidebar - Hire On Rent */}
          <div className="col-lg-2 col-md-12">
            <div className="bg-light rounded h-100">
              <div
                className="d-flex justify-content-between align-items-center mb-1 p-3"
                style={{ backgroundColor: "rgba(230, 46, 4, 0.15)" }}
              >
                <h6 className="fw-bold mb-0 text-dark">Hire On Rent</h6>
                <small className="text-muted">Know more</small>
              </div>

              <div className="hire-items">
                {hireOnRentItems.map((item) => (
                  <div
                    key={item.id}
                    className="border border-danger border-5 p-2 mb-1"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-100 rounded mb-2"
                      style={{ height: "200px", objectFit: "cover" }}
                    />
                    <h6 className="fw-bold text-dark small mb-1">
                      {item.title}
                    </h6>
                    <p className="text-danger small mb-0">{item.price}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-section d-flex justify-content-center mx-auto my-4 slider">
        <Slider />
      </div>
    </>
  );
};

export default BannerSection;

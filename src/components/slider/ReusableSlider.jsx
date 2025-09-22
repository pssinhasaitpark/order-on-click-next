// import React, { useState, useEffect } from "react";
// // Reusable Product Card Component
// const ProductCard = ({ product }) => {
//   return (
//     <div className="col">
//       <div
//         className="card h-100 shadow-sm border-0"
//         style={{ borderRadius: "12px", overflow: "hidden" }}
//       >
//         <div className="position-relative">
//           <img
//             src={product.image}
//             className="card-img-top"
//             alt={product.title}
//             style={{ height: "200px", objectFit: "cover" }}
//           />
//           <span
//             className="position-absolute top-0 start-0 m-2 badge text-white px-2 py-1"
//             style={{
//               backgroundColor: "#28a745",
//               fontSize: "10px",
//               fontWeight: "bold",
//             }}
//           >
//             {product.discount}
//           </span>
//         </div>
//         <div className="card-body p-3">
//           <div className="d-flex align-items-center mb-2">
//             <span
//               className="text-muted text-decoration-line-through me-2"
//               style={{ fontSize: "12px" }}
//             >
//               ₹{product.originalPrice}
//             </span>
//             <span className="fw-bold text-danger" style={{ fontSize: "16px" }}>
//               ₹{product.salePrice}
//             </span>
//           </div>
//           <h6
//             className="card-title mb-2"
//             style={{ fontSize: "14px", lineHeight: "1.3" }}
//           >
//             {product.title}
//           </h6>
//           <span
//             className="badge bg-light text-dark"
//             style={{ fontSize: "10px" }}
//           >
//             {product.variant}
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// };
// // Reusable Slider Component
// const ReusableSlider = ({ title, products, sectionStyle = {} }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [itemsPerView, setItemsPerView] = useState(4);

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth < 576) setItemsPerView(1);
//       else if (window.innerWidth < 768) setItemsPerView(2);
//       else if (window.innerWidth < 992) setItemsPerView(3);
//       else setItemsPerView(4);
//     };

//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const nextSlide = () => {
//     setCurrentIndex((prev) =>
//       prev + itemsPerView >= products.length ? 0 : prev + 1
//     );
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prev) =>
//       prev === 0 ? Math.max(0, products.length - itemsPerView) : prev - 1
//     );
//   };

//   const visibleProducts = products.slice(
//     currentIndex,
//     currentIndex + itemsPerView
//   );

//   // Fill with products from the beginning if we don't have enough
//   while (visibleProducts.length < itemsPerView && products.length > 0) {
//     visibleProducts.push(
//       products[visibleProducts.length - currentIndex] || products[0]
//     );
//   }

//   return (
//     <div className="container-fluid py-4" style={{ ...sectionStyle }}>
//       <div className="row align-items-center mb-4">
//         <div className="col">
//           <div className="d-flex align-items-center">
//             <h2
//               className="fw-bold mb-0 me-3"
//               style={{ fontSize: "24px", color: "#333" }}
//             >
//               {title}
//             </h2>
//             {title === "Flash Sale" && (
//               <div className="d-flex align-items-center">
//                 <div className="bg-warning px-2 py-1 rounded-circle me-2">
//                   <span style={{ fontSize: "12px" }}>⏰</span>
//                 </div>
//                 <small className="text-muted">
//                   Buy Everyday only in Rs.1/- in Exact Time 11:11 AM at Flash
//                   Sale
//                 </small>
//               </div>
//             )}
//           </div>
//         </div>
//         <div className="col-auto">
//           <button className="btn btn-outline-primary btn-sm" >View More</button>
//         </div>
//       </div>

//       <div className="position-relative">
//         {/* Navigation Buttons */}
//         <button
//           className="btn btn-light position-absolute start-0 top-50 translate-middle-y shadow-sm"
//           onClick={prevSlide}
//           style={{
//             zIndex: 10,
//             width: "40px",
//             height: "40px",
//             borderRadius: "50%",
//           }}
//           disabled={currentIndex === 0}
//         >
//           &#8249;
//         </button>

//         <button
//           className="btn btn-light position-absolute end-0 top-50 translate-middle-y shadow-sm"
//           onClick={nextSlide}
//           style={{
//             zIndex: 10,
//             width: "40px",
//             height: "40px",
//             borderRadius: "50%",
//           }}
//           disabled={currentIndex + itemsPerView >= products.length}
//         >
//           &#8250;
//         </button>

//         {/* Product Cards */}
//         <div className="mx-5">
//           <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3">
//             {visibleProducts.map((product, index) => (
//               <ProductCard key={`${product.id}-${index}`} product={product} />
//             ))}
//           </div>
//         </div>

//         {/* Dots Indicator */}
//         <div className="d-flex justify-content-center mt-4">
//           {Array.from({
//             length: Math.ceil(products.length / itemsPerView),
//           }).map((_, index) => (
//             <button
//               key={index}
//               className={`btn btn-sm mx-1 ${
//                 Math.floor(currentIndex / itemsPerView) === index
//                   ? "btn-primary"
//                   : "btn-outline-secondary"
//               }`}
//               onClick={() => setCurrentIndex(index * itemsPerView)}
//               style={{
//                 width: "10px",
//                 height: "10px",
//                 borderRadius: "50%",
//                 padding: 0,
//               }}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ReusableSlider;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Reusable Product Card Component
const ProductCard = ({ product }) => {
  const image =
    product?.grocery_image?.[0]?.image_file ||
    "https://via.placeholder.com/200";
  const title = product?.name || "No Name";
  const originalPrice = product?.grocery_price?.[0]?.mrp_price || "0";
  const discount = product?.grocery_price?.[0]?.discount || "0";
  const variant = product?.grocery_price?.[0]?.attribute || "Default";

  return (
    <div className="col">
      <div
        className="card h-100 shadow-sm border-0"
        style={{ borderRadius: "12px", overflow: "hidden" }}
      >
        <div className="position-relative">
          <img
            src={image}
            className="card-img-top"
            alt={title}
            style={{ height: "200px", objectFit: "cover" }}
          />
          <span
            className="position-absolute top-0 start-0 m-2 badge text-white px-2 py-1"
            style={{
              backgroundColor: "#28a745",
              fontSize: "10px",
              fontWeight: "bold",
            }}
          >
            {discount}% OFF
          </span>
        </div>
        <div className="card-body p-3">
          <div className="d-flex align-items-center mb-2">
            <span
              className="text-muted text-decoration-line-through me-2"
              style={{ fontSize: "12px" }}
            >
              ₹{originalPrice}
            </span>
            <span className="fw-bold text-danger" style={{ fontSize: "16px" }}>
              ₹{Math.round(originalPrice - (originalPrice * discount) / 100)}
            </span>
          </div>
          <h6
            className="card-title mb-2"
            style={{ fontSize: "14px", lineHeight: "1.3" }}
          >
            {title}
          </h6>
          <span
            className="badge bg-light text-dark"
            style={{ fontSize: "10px" }}
          >
            {variant}
          </span>
        </div>
      </div>
    </div>
  );
};

// Reusable Slider Component with loader
const ReusableSlider = ({
  title,
  products,
  loading = false,
  sectionStyle = {},
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 576) setItemsPerView(1);
      else if (window.innerWidth < 768) setItemsPerView(2);
      else if (window.innerWidth < 992) setItemsPerView(3);
      else setItemsPerView(4);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev + itemsPerView >= products.length ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? Math.max(0, products.length - itemsPerView) : prev - 1
    );
  };

  const handleViewMoreClick = () => {
    navigate("/see-all");
  };

  const visibleProducts = products.slice(
    currentIndex,
    currentIndex + itemsPerView
  );

  while (visibleProducts.length < itemsPerView && products.length > 0) {
    visibleProducts.push(
      products[visibleProducts.length - currentIndex] || products[0]
    );
  }

  // Render loader when loading is true
  if (loading) {
    return (
      <div
        className="container-fluid py-4 text-center"
        style={{ ...sectionStyle }}
      >
        <div
          className="spinner-border text-primary"
          role="status"
          style={{ width: "3rem", height: "3rem" }}
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="container-fluid py-4" style={{ ...sectionStyle }}>
      <div className="row align-items-center mb-4">
        <div className="col">
          <div className="d-flex align-items-center">
            <h2
              className="fw-bold mb-0 me-3"
              style={{ fontSize: "24px", color: "#333" }}
            >
              {title}
            </h2>
            {title === "Flash Sale" && (
              <div className="d-flex align-items-center">
                <div className="bg-warning px-2 py-1 rounded-circle me-2">
                  <span style={{ fontSize: "12px" }}>⏰</span>
                </div>
                <small className="text-muted">
                  Buy Everyday only in Rs.1/- in Exact Time 11:11 AM at Flash
                  Sale
                </small>
              </div>
            )}
          </div>
        </div>
        <div className="col-auto">
          <button
            className="btn btn-outline-primary btn-sm"
            onClick={handleViewMoreClick}
          >
            View More
          </button>
        </div>
      </div>
      <div className="position-relative">
        <button
          className="btn btn-light position-absolute start-0 top-50 translate-middle-y shadow-sm"
          onClick={prevSlide}
          style={{
            zIndex: 10,
            width: "40px",
            height: "40px",
            borderRadius: "50%",
          }}
          disabled={currentIndex === 0}
        >
          &#8249;
        </button>
        <button
          className="btn btn-light position-absolute end-0 top-50 translate-middle-y shadow-sm"
          onClick={nextSlide}
          style={{
            zIndex: 10,
            width: "40px",
            height: "40px",
            borderRadius: "50%",
          }}
          disabled={currentIndex + itemsPerView >= products.length}
        >
          &#8250;
        </button>
        <div className="mx-5">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3">
            {visibleProducts.map((product, index) => (
              <ProductCard key={`${product.id}-${index}`} product={product} />
            ))}
          </div>
        </div>
        <div className="d-flex justify-content-center mt-4">
          {Array.from({
            length: Math.ceil(products.length / itemsPerView),
          }).map((_, index) => (
            <button
              key={index}
              className={`btn btn-sm mx-1 ${
                Math.floor(currentIndex / itemsPerView) === index
                  ? "btn-primary"
                  : "btn-outline-secondary"
              }`}
              onClick={() => setCurrentIndex(index * itemsPerView)}
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                padding: 0,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReusableSlider;

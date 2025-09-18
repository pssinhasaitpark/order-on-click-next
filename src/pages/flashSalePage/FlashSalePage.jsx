import React, { useState } from "react";

const FlashSaleProducts = () => {
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
  const products = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1596151194111-8edcd926357c?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      discount: "42.42% OFF",
      originalPrice: "₹34",
      salePrice: "₹19",
      title: "Jio Mobile stand-JBT63 (DV)",
      variant: "Red Color",
      bgColor: "bg-danger",
    },
    {
      id: 2,
      image:
        "https://plus.unsplash.com/premium_photo-1676788477630-035a416b8afa?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      discount: "0.67% OFF",
      originalPrice: "₹149",
      salePrice: "₹149",
      title: "Hanuman Chola - Complete SAMAGREE (DV)",
      variant: "Complete Package",
      bgColor: "bg-warning",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1603987860640-44268beae062?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      discount: "35.6% OFF",
      originalPrice: "₹899",
      salePrice: "₹579",
      title: "Electric Piano Keyboard Musical Toy (DV)",
      variant: "22 Key",
      bgColor: "bg-success",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1746372283841-dbb3838f9935?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      discount: "43.78% OFF",
      originalPrice: "₹3200",
      salePrice: "₹1799",
      title: "Printed lehenga choli in heavy Butter silk (DV)",
      variant: "LENGTH IS 44 INCH",
      bgColor: "bg-info",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1703174323653-0455deaf7f11?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      discount: "1.94% OFF",
      originalPrice: "₹155",
      salePrice: "₹152",
      title: "Boro Plus doodh kesar body lotion",
      variant: "100ml",
      bgColor: "bg-secondary",
    },
    {
      id: 6,
      image:
        "https://plus.unsplash.com/premium_photo-1681276170758-d6ca6e6e276a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      discount: "30.72% OFF",
      originalPrice: "₹345",
      salePrice: "₹239",
      title: "Flower Pendant set (DV)",
      variant: "Red Golden",
      bgColor: "bg-primary",
    },
    {
      id: 7,
      image:
        "https://images.unsplash.com/photo-1732605559386-bc59426d1b16?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      discount: "28.61% OFF",
      originalPrice: "₹699",
      salePrice: "₹499",
      title: "Wi-Fi Navy Blue Color Printed Formal Shirt (DV)",
      variant: "SZ: L/Navy Blue",
      bgColor: "bg-dark",
    },
    {
      id: 8,
      image:
        "https://images.unsplash.com/photo-1603561593143-2d9242789dfb?q=80&w=1498&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      discount: "34.44% OFF",
      originalPrice: "₹90",
      salePrice: "₹59",
      title: "Pure Wooden Pink Color Ring Dandiya (DV)",
      variant: "1 Pair",
      bgColor: "bg-warning",
    },
    {
      id: 9,
      image:
        "https://images.unsplash.com/photo-1522338140262-f46f5913618a?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      discount: "22.5% OFF",
      originalPrice: "₹450",
      salePrice: "₹349",
      title: "Compact Hair Dryer for Home Use",
      variant: "Pink / Foldable",
      bgColor: "bg-danger",
    },
    {
      id: 10,
      image:
        "https://plus.unsplash.com/premium_photo-1728582543518-5cc829c512d4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      discount: "18% OFF",
      originalPrice: "₹850",
      salePrice: "₹697",
      title: "Men’s Analog Wrist Watch (DV)",
      variant: "Black Leather Strap",
      bgColor: "bg-secondary",
    },
    {
      id: 11,
      image:
        "https://images.unsplash.com/photo-1537440437066-c585a62baf1f?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      discount: "40.12% OFF",
      originalPrice: "₹999",
      salePrice: "₹598",
      title: "Casual Women's Handbag for Daily Use",
      variant: "Tan Faux Leather",
      bgColor: "bg-success",
    },
    {
      id: 12,
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=735&q=80",
      discount: "26.31% OFF",
      originalPrice: "₹950",
      salePrice: "₹700",
      title: "Stainless Steel Insulated Water Bottle (DV)",
      variant: "750ml / Silver",
      bgColor: "bg-info",
    },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);
  return (
    <div className="container-fluid  bg-light">
      <div className="container">
        <div className="py-4">
          <div className="position-relative border rounded overflow-hidden shadow-sm bg-white">
            {/* Carousel Track */}
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
                    className="w-100 d-block"
                    style={{
                      height: "310px",
                      objectFit: "cover",
                    }}
                  />
                </div>
              ))}
            </div>

            {/* Left Arrow (Previous) */}
            <button
              type="button"
              className="slick-prev slick-arrow position-absolute top-50 start-0 translate-middle-y btn btn-light border rounded-circle ms-2"
              aria-label="Previous"
              style={{ width: "40px", height: "40px", zIndex: 10 }}
              onClick={() =>
                setCurrentSlide(
                  currentSlide === 0 ? banners.length - 1 : currentSlide - 1
                )
              }
            >
              <span className="fw-bold">&lt;</span>
            </button>

            {/* Right Arrow (Next) */}
            <button
              type="button"
              className="slick-next slick-arrow position-absolute top-50 end-0 translate-middle-y btn btn-light border rounded-circle me-2"
              aria-label="Next"
              style={{ width: "40px", height: "40px", zIndex: 10 }}
              onClick={() =>
                setCurrentSlide((currentSlide + 1) % banners.length)
              }
            >
              <span className="fw-bold">&gt;</span>
            </button>

            {/* Dots */}
            <ul
              className="slick-dots position-absolute bottom-0 start-50 translate-middle-x mb-3 d-flex justify-content-center list-unstyled m-0 p-0 gap-2"
              role="tablist"
            >
              {banners.map((_, index) => (
                <li
                  key={index}
                  role="presentation"
                  aria-selected={currentSlide === index}
                  className={currentSlide === index ? "slick-active" : ""}
                >
                  <button
                    type="button"
                    role="button"
                    aria-label={`Go to slide ${index + 1}`}
                    className={`rounded-circle border-0 ${
                      currentSlide === index ? "bg-dark" : "bg-secondary"
                    }`}
                    style={{ width: "10px", height: "10px" }}
                    onClick={() => setCurrentSlide(index)}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Header Section */}
      <div className="row mb-4">
        <div className="col-12 text-center">
          <div className="d-flex align-items-center justify-content-center mb-3">
            <h2 className="fw-bold text-dark me-3 mb-0">Flash Sale</h2>
            <span className="fs-1">⚡</span>
          </div>
          <div
            className="bg-warning"
            style={{ height: "3px", width: "100px", margin: "0 auto" }}
          ></div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="row g-3">
        {products.map((product) => (
          <div key={product.id} className="col-6 col-md-4 col-lg-3">
            <div className="card h-100 shadow-sm border-0 position-relative">
              {/* Discount Badge */}
              <div className="position-absolute top-0 start-0 m-2 z-3">
                <span className="badge bg-dark text-white px-2 py-1 rounded-1">
                  {product.discount}
                </span>
              </div>

              {/* Product Image */}
              <div
                className="card-img-top bg-white d-flex align-items-center justify-content-center"
                style={{ height: "180px" }}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="img-fluid"
                  style={{ maxHeight: "160px", objectFit: "contain" }}
                />
              </div>

              {/* Product Details */}
              <div className="card-body p-3 d-flex flex-column">
                {/* Pricing */}
                <div className="mb-2">
                  <span className="text-muted text-decoration-line-through small me-2">
                    {product.originalPrice}
                  </span>
                  <span className="fw-bold text-danger fs-6">
                    {product.salePrice}
                  </span>
                </div>

                {/* Product Title */}
                <h6
                  className="card-title text-dark mb-2 lh-sm"
                  style={{ fontSize: "0.9rem" }}
                >
                  {product.title}
                </h6>

                {/* Product Variant */}
                <div className="mt-auto">
                  <span className="badge bg-light text-dark border rounded-pill px-3 py-2 w-100 text-start">
                    {product.variant}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Additional placeholder products for the bottom row */}
      {/* <div className="row g-3 mt-2">
        {[1, 2, 3, 4].map((item) => (
          <div key={`extra-${item}`} className="col-6 col-md-4 col-lg-3">
            <div className="card h-100 shadow-sm border-0 position-relative">
              <div className="position-absolute top-0 start-0 m-2 z-3">
                <span className="badge bg-dark text-white px-2 py-1 rounded-1">
                  25% OFF
                </span>
              </div>
              <div
                className="card-img-top bg-white d-flex align-items-center justify-content-center"
                style={{ height: "180px" }}
              >
                <img
                  src={`https://via.placeholder.com/250x200/f8f9fa/6c757d?text=Product+${item}`}
                  alt={`Product ${item}`}
                  className="img-fluid"
                  style={{ maxHeight: "160px", objectFit: "contain" }}
                />
              </div>
              <div className="card-body p-3 d-flex flex-column">
                <div className="mb-2">
                  <span className="text-muted text-decoration-line-through small me-2">
                    ₹{100 + item * 50}
                  </span>
                  <span className="fw-bold text-danger fs-6">
                    ₹{75 + item * 37}
                  </span>
                </div>
                <h6
                  className="card-title text-dark mb-2 lh-sm"
                  style={{ fontSize: "0.9rem" }}
                >
                  Sample Product {item} Description (DV)
                </h6>
                <div className="mt-auto">
                  <span className="badge bg-light text-dark border rounded-pill px-3 py-2 w-100 text-start">
                    Variant {item}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default FlashSaleProducts;

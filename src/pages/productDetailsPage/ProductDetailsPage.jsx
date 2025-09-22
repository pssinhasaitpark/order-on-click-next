import React, { useState } from "react";
import ScrollingGifBanner from "../../components/ScrollingGifBanner/ScrollingGifBanner";

const ProductDetailPage = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("");
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=400&h=500&fit=crop",
    "https://images.unsplash.com/photo-1594736797933-d0b22d3b6bf5?w=400&h=500&fit=crop",
    "https://images.unsplash.com/photo-1583391733975-b8b7e8b4b76a?w=400&h=500&fit=crop",
    "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400&h=500&fit=crop",
  ];

  const topSellingProducts = [
    {
      id: 1,
      name: "Jio Mobile Stand JB163 (DV)",
      originalPrice: 33,
      salePrice: 19,
      discount: "42.42% OFF",
      rating: 0,
      image:
        "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=100&h=100&fit=crop",
    },
    {
      id: 2,
      name: "MATA RANI CHARAN (GR1)",
      originalPrice: 300,
      salePrice: 239,
      discount: "20.33% OFF",
      rating: 0,
      image:
        "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=100&h=100&fit=crop",
    },
    {
      id: 3,
      name: "Roly Poly Pragee (DV)",
      originalPrice: 409,
      salePrice: 199,
      discount: "51.34% OFF",
      rating: 0,
      image:
        "https://images.unsplash.com/photo-1594736797933-d0b22d3b6bf5?w=100&h=100&fit=crop",
    },
    {
      id: 4,
      name: "Sequence Palazzo (DV)",
      originalPrice: 860,
      salePrice: 599,
      discount: "30.35% OFF",
      rating: 0,
      image:
        "https://images.unsplash.com/photo-1583391733975-b8b7e8b4b76a?w=100&h=100&fit=crop",
    },
  ];

  const productSlider = [
    {
      id: 1,
      name: "Printed lehenga choli in heavy Butter silk (DV)",
      originalPrice: 3200,
      salePrice: 1799,
      discount: "43.78% OFF",
      image:
        "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=200&h=250&fit=crop",
    },
    {
      id: 2,
      name: "Diamond chain lagging (DV)",
      originalPrice: 310,
      salePrice: 189,
      discount: "39.03% OFF",
      image:
        "https://images.unsplash.com/photo-1594736797933-d0b22d3b6bf5?w=200&h=250&fit=crop",
    },
    {
      id: 3,
      name: "Girls jeans | Tube Design (DV)",
      originalPrice: 630,
      salePrice: 329,
      discount: "47.78% OFF",
      image:
        "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=200&h=250&fit=crop",
    },
    {
      id: 4,
      name: "Kurta Skirt With Dupatta Set, green white (DV)",
      originalPrice: 1100,
      salePrice: 699,
      discount: "36.45% OFF",
      image:
        "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=200&h=250&fit=crop",
    },
    {
      id: 5,
      name: "Kurta Skirt With Dupatta Set, pink white (DV)",
      originalPrice: 1100,
      salePrice: 699,
      discount: "36.45% OFF",
      image:
        "https://images.unsplash.com/photo-1583391733975-b8b7e8b4b76a?w=200&h=250&fit=crop",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide(
      (prev) => (prev + 1) % Math.max(1, productSlider.length - 3)
    );
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) =>
        (prev - 1 + Math.max(1, productSlider.length - 3)) %
        Math.max(1, productSlider.length - 3)
    );
  };

  return (
    <div className="container-fluid py-4">
      {/* Main Product Section */}
      <div className="row mb-5">
        {/* Product Images Section */}
        <div className="col-md-6">
          <div className="row">
            {/* Thumbnail Images */}
            <div className="col-2">
              <div className="d-flex flex-column gap-2">
                {images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Product view ${index + 1}`}
                    className={`img-fluid border rounded cursor-pointer ${
                      selectedImage === index ? "border-primary border-2" : ""
                    }`}
                    style={{
                      height: "80px",
                      objectFit: "cover",
                      cursor: "pointer",
                    }}
                    onClick={() => setSelectedImage(index)}
                  />
                ))}
              </div>
            </div>

            {/* Main Product Image */}
            <div className="col-10">
              <img
                src={images[selectedImage]}
                alt="Main product"
                className="img-fluid border rounded"
                style={{ height: "500px", width: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>

        {/* Product Details Section */}
        <div className="col-md-6">
          <div className="ps-4">
            {/* Product Title */}
            <div className="bg-primary text-white p-2 rounded mb-3">
              <h4 className="mb-0">
                Printed lehenga choli in heavy Butter silk (DV)
              </h4>
            </div>

            {/* Rating */}
            <div className="mb-3">
              <div className="d-flex align-items-center">
                <div className="text-warning me-2">
                  <span>★★★★★</span>
                </div>
                <small className="text-muted">(12 reviews)</small>
              </div>
            </div>

            {/* Product Description */}
            <div className="mb-4">
              <p className="text-justify small">
                <strong>FABRIC DETAILS LEHENGA :</strong> HEAVY BUTTER SILK WITH
                DIGITAL PRINT & 3.5 MTR FLAIR FULLY STITCH • WITH • REAL MIRROR
                WORK UNDER : SILK CHOLI : SOFT BUTTER SILK & REAL MIRROR WORK (
                1.25 MTR FABRIC) DUPATTA : HEAVY BUTTER SILK WITH REAL MIRROR
                WORK FREE SIZE FULLY STITCHED LEHENGA WITH UN STITCH 1.25 MTR
                BORDER • LEHENGA LENGTH IS 44 INCHES *ebb things about can be
                seen in designer, Red stitching this its own significance as
                most of the brides choose to wear. In Red and, you also wear the
                bridesmaid and you also want to wear something which goes glory!
                And, since you are getting married, you must wear a lehenga that
                brings out the best in you. Always go for shopping some months
                prior to your wedding. And, before your big day make sure you
                try the outfit one final time for some last minute adjustments
                and alterations. For order anything begin to view
                orderonclick.com or download the Electronic app now.
              </p>
            </div>

            {/* Price */}
            <div className="mb-3">
              <h5 className="text-muted">
                PRICE: <span className="text-danger ms-2">₹2500 ₹1799</span>
              </h5>
            </div>

            {/* Size Selection */}
            <div className="mb-3">
              <label className="form-label">LEHENGA SIZE (INCH)</label>
              <select
                className="form-select"
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
              >
                <option value="">Select Size</option>
                <option value="S">Small (32-34)</option>
                <option value="M">Medium (36-38)</option>
                <option value="L">Large (40-42)</option>
                <option value="XL">Extra Large (44-46)</option>
              </select>
            </div>

            {/* Quantity */}
            <div className="mb-4">
              <label className="form-label">Quantity</label>
              <div className="d-flex align-items-center">
                <button
                  className="btn btn-outline-secondary btn-sm"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1}
                >
                  -
                </button>
                <span className="mx-3 fw-bold">{quantity}</span>
                <button
                  className="btn btn-outline-secondary btn-sm"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mb-4">
              <div className="d-flex gap-2">
                <button className="btn btn-outline-secondary flex-fill">
                  <i className="bi bi-cart-plus"></i> Add to cart
                </button>
                <button className="btn btn-outline-warning flex-fill">
                  <i className="bi bi-heart"></i> Bargain Now
                </button>
                <button className="btn btn-danger flex-fill">
                  <i className="bi bi-bag"></i> Add for Wholesale
                </button>
              </div>
            </div>

            {/* Share Buttons */}
            <div>
              <span className="text-muted me-3">SHARE</span>
              <div className="d-inline-flex gap-2">
                <button className="btn btn-primary btn-sm">
                  <i className="bi bi-facebook"></i>
                </button>
                <button className="btn btn-info btn-sm text-white">
                  <i className="bi bi-twitter"></i>
                </button>
                <button className="btn btn-success btn-sm">
                  <i className="bi bi-whatsapp"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="row">
        {/* Top Selling Products - Left Column */}
        <div className="col-md-3">
          <div className="card h-100">
            <div className="card-header bg-light">
              <h5 className="mb-0">Top Selling Products</h5>
            </div>
            <div className="card-body p-2">
              {topSellingProducts.map((product) => (
                <div
                  key={product.id}
                  className="d-flex align-items-center mb-3 p-2 border-bottom"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="rounded me-2"
                    style={{
                      width: "60px",
                      height: "60px",
                      objectFit: "cover",
                    }}
                  />
                  <div className="flex-grow-1">
                    <div className="position-relative">
                      <span className="badge bg-success position-absolute top-0 end-0 small">
                        {product.discount}
                      </span>
                    </div>
                    <h6 className="mb-1 small">{product.name}</h6>
                    <div className="text-warning small mb-1">
                      {"★"
                        .repeat(5)
                        .split("")
                        .map((star, i) => (
                          <span key={i} className="text-muted">
                            ★
                          </span>
                        ))}
                    </div>
                    <div>
                      <span className="text-muted text-decoration-line-through small">
                        ₹{product.originalPrice}
                      </span>
                      <span className="text-danger fw-bold ms-1">
                        ₹{product.salePrice}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="col-md-9">
          {/* Hot Offers & Flash Sale Row */}
          <div className="row mb-4">
            <h4>Hot Offers</h4>
            <ScrollingGifBanner />
          </div>

          {/* Product Slider Section */}
          <div>
            <h4 className="mb-3">
              Suit, Tops, Legi, Jeans, Tshirt, western & Party wear
            </h4>

            <div className="position-relative">
              <div className="d-flex overflow-hidden">
                <div
                  className="d-flex transition-transform"
                  style={{
                    transform: `translateX(-${currentSlide * (100 / 4)}%)`,
                    transition: "transform 0.3s ease",
                  }}
                >
                  {productSlider.map((product) => (
                    <div
                      key={product.id}
                      className="flex-shrink-0 px-2"
                      style={{ width: "25%" }}
                    >
                      <div className="card h-100">
                        <div className="position-relative">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="card-img-top"
                            style={{ height: "200px", objectFit: "cover" }}
                          />
                          <span className="badge bg-danger position-absolute top-0 start-0 m-2">
                            {product.discount}
                          </span>
                        </div>
                        <div className="card-body p-2">
                          <div className="text-center mb-2">
                            <span className="text-muted text-decoration-line-through small">
                              ₹{product.originalPrice}
                            </span>
                            <span className="text-danger fw-bold ms-1">
                              ₹{product.salePrice}
                            </span>
                          </div>
                          <h6 className="card-title small text-center">
                            {product.name}
                          </h6>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Buttons */}
              <button
                className="btn btn-primary position-absolute top-50 start-0 translate-middle-y"
                onClick={prevSlide}
                style={{ left: "-20px", zIndex: 10 }}
              >
                &#8249;
              </button>
              <button
                className="btn btn-primary position-absolute top-50 end-0 translate-middle-y"
                onClick={nextSlide}
                style={{ right: "-20px", zIndex: 10 }}
              >
                &#8250;
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;

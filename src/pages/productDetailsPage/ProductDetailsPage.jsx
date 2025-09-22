import React, { useState } from "react";
import ScrollingGifBanner from "../../components/ScrollingGifBanner/ScrollingGifBanner";
import { useLocation, useNavigate } from "react-router-dom";

const ProductDetailPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("");
  const [currentSlide, setCurrentSlide] = useState(0);

  // Get the product data from the location state
  const { product, pageNo } = location.state || {};
  const images = product?.grocery_image?.map((img) => img.image_file) || [];

  // Fallback if no images
  const fallbackImages = [
    "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=400&h=500&fit=crop",
    "https://images.unsplash.com/photo-1594736797933-d0b22d3b6bf5?w=400&h=500&fit=crop",
    "https://images.unsplash.com/photo-1583391733975-b8b7e8b4b76a?w=400&h=500&fit=crop",
    "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400&h=500&fit=crop",
  ];

  // Use product images or fallback
  const displayImages = images.length > 0 ? images : fallbackImages;

  // Use product data for the page
  const productName = product?.name || "Product Name";
  const productNameHindi = product?.name_hindi || "Product Name (Hindi)";
  const productDescription =
    product?.description || "Product description goes here.";
  const productPrice =
    product?.grocery_price?.[0]?.discount ||
    product?.grocery_price?.[0]?.mrp_price ||
    "0";
  const productMrpPrice = product?.grocery_price?.[0]?.mrp_price || "0";
  const productCategory = product?.category_name || "Category";

  // Only render the page if product data is available
  if (!product) {
    return (
      <div className="container-fluid py-4 text-center">
        <h4>No product data available</h4>
        <button className="btn btn-primary mt-3" onClick={() => navigate(-1)}>
          Go Back
        </button>
      </div>
    );
  }

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
                {displayImages.map((img, index) => (
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
                src={displayImages[selectedImage]}
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
              <h4 className="mb-0">{productName}</h4>
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
                <strong>Description:</strong> {productDescription}
              </p>
            </div>
            {/* Price */}
            <div className="mb-3">
              <h5 className="text-muted">
                PRICE:{" "}
                <span className="text-danger ms-2">
                  ₹{productPrice}{" "}
                  <span className="text-decoration-line-through text-muted">
                    ₹{productMrpPrice}
                  </span>
                </span>
              </h5>
            </div>
            {/* Size Selection */}
            <div className="mb-3">
              <label className="form-label">Size</label>
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
              {/* You can fetch and display top selling products from your API here */}
              <p className="text-center text-muted my-5">
                Top selling products will be displayed here.
              </p>
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
            {/* You can fetch and display related products from your API here */}
            <p className="text-center text-muted my-5">
              Related products will be displayed here.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;

import React, { useState } from "react";
import { Play, ChevronRight } from "lucide-react";

const Video = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const products = [
    {
      id: 1,
      title:
        "NEW DESIGNER EMBROIDERED ANARKALI GOWN | Hurry Up! limited in stoke",
      videoThumbnail:
        "https://images.unsplash.com/photo-1717835429626-d6dd3f2c9afb?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Designer Wear",
    },
    {
      id: 2,
      title: "premium Georgette fabric with Sequince & Thred work 3d Saree",
      videoThumbnail:
        "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400&h=250&fit=crop",
      category: "Sarees",
    },
    {
      id: 3,
      title:
        "Designer gaon On Navy Georgette fabric with crush work and beautiful real khatri Work",
      videoThumbnail:
        "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=250&fit=crop",
      category: "Designer Gowns",
    },
    {
      id: 4,
      title: "Gown With Heavy Khatli Work hand work",
      videoThumbnail:
        "https://images.unsplash.com/photo-1641877953739-8cab85119201?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Traditional Wear",
    },
    {
      id: 5,
      title: "Crochet Sequence Saree with blouse | Buy now in low price",
      videoThumbnail:
        "https://plus.unsplash.com/premium_photo-1691030256277-058a86d8cdd4?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Sarees",
    },
    {
      id: 6,
      title: "BANGOLI SILK EMBRODERY WORK SAREE with BANGALORI SILK BLOUSE",
      videoThumbnail:
        "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=400&h=250&fit=crop",
      category: "Silk Sarees",
    },
    {
      id: 7,
      title:
        "Banarasi Saree For Indian Weddings | hurry Up! some PCs Remaining",
      videoThumbnail:
        "https://images.unsplash.com/photo-1631005436794-ccaa79de61ba?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Wedding Collection",
    },
    {
      id: 8,
      title:
        "3D EFFECT 5MM SEQUENCE SAREE BAHUBALI | five different Color available",
      videoThumbnail:
        "https://images.unsplash.com/photo-1717835943315-b818e90cb2a1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Designer Sarees",
    },
    {
      id: 9,
      title:
        "Trendy Shirts New Transparent look | Hurry Up! girls are ready to buy it",
      videoThumbnail:
        "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=250&fit=crop",
      category: "Western Wear",
    },
    {
      id: 10,
      title: "BANDHANI PRINT SAREE with GOTA PATTI WORK | hurry up PCs limited",
      videoThumbnail:
        "https://plus.unsplash.com/premium_photo-1661964243697-734d7bd664ff?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Traditional Prints",
    },
    {
      id: 11,
      title:
        "Georgette With Heavy 5MM Sequence Curve | Buy Now hurry up PCs Limited",
      videoThumbnail:
        "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=400&h=250&fit=crop",
      category: "Party Wear",
    },
    {
      id: 12,
      title: "TOP WITH EMBROIDERED & HEAVY VELVET PALAZZO",
      videoThumbnail:
        "https://images.unsplash.com/photo-1726076584498-2064363f8b5a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Indo-Western",
    },
  ];

  const ProductCard = ({ product, index }) => (
    <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
      <div
        className="card h-100 shadow-sm border-0 position-relative overflow-hidden"
        // style={{
        //   borderRadius: "12px",
        //   transition: "all 0.3s ease",
        //   transform:
        //     hoveredCard === index ? "translateY(-5px)" : "translateY(0)",
        //   boxShadow:
        //     hoveredCard === index
        //       ? "0 10px 25px rgba(0,0,0,0.15)"
        //       : "0 2px 10px rgba(0,0,0,0.1)",
        // }}
        onMouseEnter={() => setHoveredCard(index)}
        onMouseLeave={() => setHoveredCard(null)}
      >
        {/* Video Thumbnail */}
        <div className="position-relative">
          <img
            src={product.videoThumbnail}
            alt={product.title}
            className="card-img-top"
            style={{
              height: "200px",
              objectFit: "cover",
              transition: "transform 0.3s ease",
            }}
          />

          {/* Play Button Overlay */}
          <div className="position-absolute top-50 start-50 translate-middle">
            <div
              className="d-flex align-items-center justify-content-center bg-white bg-opacity-90 rounded-circle shadow"
              style={{
                width: "60px",
                height: "60px",
                transition: "all 0.3s ease",
                transform: hoveredCard === index ? "scale(1.1)" : "scale(1)",
              }}
            >
              <Play
                size={24}
                className="text-danger ms-1"
                fill="currentColor"
              />
            </div>
          </div>

          {/* Category Badge */}
          <div className="position-absolute top-0 start-0 m-3">
            <span
              className="badge px-3 py-2 text-white fw-bold"
              style={{
                backgroundColor: "#e6240a",
                borderRadius: "20px",
                fontSize: "0.75rem",
              }}
            >
              {product.category}
            </span>
          </div>
        </div>

        {/* Card Body */}
        <div className="card-body d-flex flex-column p-4">
          <h6
            className="card-title text-dark fw-bold mb-3 lh-base"
            style={{ fontSize: "0.95rem" }}
          >
            {product.title}
          </h6>

          <div className="mt-auto">
            <button
              className="btn w-100 fw-bold text-white d-flex align-items-center justify-content-center gap-2"
              style={{
                backgroundColor: "#e6240a",
                borderColor: "#e6240a",
                borderRadius: "25px",
                padding: "10px 20px",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#cc1e09";
                e.target.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "#e6240a";
                e.target.style.transform = "translateY(0)";
              }}
            >
              ► Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-vh-100" style={{ backgroundColor: "#f8f9fa" }}>
      {/* Header */}
      <div className="container-fluid py-4">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-8">
              <h2 className="text-dark mb-1">
                Watch New, Latest & Upcoming Products Info
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container py-5">
        {/* Products Grid */}
        <div className="row">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        {/* Load More Button */}
        <div className="row mt-5">
          <div className="col-12 text-center">
            <button
              className="btn btn-outline-danger btn-lg px-5 py-3 fw-bold"
              style={{
                borderRadius: "30px",
                borderWidth: "2px",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.classList.remove("btn-outline-danger");
                e.target.classList.add("btn-danger");
              }}
              onMouseLeave={(e) => {
                e.target.classList.remove("btn-danger");
                e.target.classList.add("btn-outline-danger");
              }}
            >
              Load More Products
              <ChevronRight size={20} className="ms-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;

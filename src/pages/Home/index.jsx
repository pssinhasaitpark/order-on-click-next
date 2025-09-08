import React, { useState, useEffect } from 'react';

const BannerSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const banners = [
    {
      id: 1,
      image: "https://orderonclick.com/admin/images/slider/order%20on%20click%20Banner_flash%20sell.gif",
      alt: "Flash Sale Banner"
    },
    {
      id: 2, 
      image: "https://orderonclick.com/admin/images/slider/order%20on%20click%20Banner_promode.gif",
      alt: "Pro Mode Banner"
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [banners.length]);

  const categories = [
    "New & Antic Items, Latest Gadget & Modern ...",
    "Pujan Samagri, murti, vastra, yantra, Abhush...",
    "Toys, Baby Gifts, Games, Play sets, Learning ...",
    "Suit, Tops, Legi, jeans, Tshirt, western & Part...",
    "Beauty care, Cosmetics, hair & Parlour acces...",
    "Jewellery Antic, Artificial & Imitation set, Ben...",
    "Shirt and T-Shirts all Mens Modern Wear",
    "Decoration Products | decor's items & acces...",
    "Electronics Gadgets, Mobile & Computer Acc...",
    "Gift item, Vastu, Fengshui, antic, decorative",
    "Fashion item wallet, purse, Belt, Watch, Gogg..."
  ];

  const hireOnRentItems = [
    {
      id: 1,
      image: "/api/placeholder/200/250",
      title: "Party Wear Look Top With Plazzo & Dupatt",
      price: "(Rs.100/-)"
    },
    {
      id: 2,
      image: "/api/placeholder/200/250", 
      title: "Designer Lehenga Set",
      price: "(Rs.150/-)"
    }
  ];

  return (
    <div className="container-fluid px-2">
      <div className="row g-2">
        {/* Left Sidebar - Categories */}
        <div className="col-lg-3 col-md-4">
          <div className="bg-light rounded p-3 h-100">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h6 className="fw-bold mb-0 text-dark">Categories</h6>
              <small className="text-muted">See All &gt;</small>
            </div>
            <div className="category-list">
              {categories.map((category, index) => (
                <div key={index} className="category-item py-2 border-bottom border-light">
                  <small className="text-secondary d-flex align-items-center">
                    <span className="me-2">&gt;</span>
                    {category}
                  </small>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Banner Area */}
        <div className="col-lg-6 col-md-8">
          <div className="position-relative">
            {/* Main Banner Carousel */}
            <div className="banner-container position-relative overflow-hidden rounded">
              <div 
                className="d-flex transition-transform" 
                style={{
                  transform: `translateX(-${currentSlide * 100}%)`,
                  transition: 'transform 0.5s ease-in-out'
                }}
              >
                {banners.map((banner, index) => (
                  <div key={banner.id} className="w-100 flex-shrink-0">
                    <img 
                      src={banner.image} 
                      alt={banner.alt}
                      className="w-100 h-auto"
                      style={{ height: '300px', objectFit: 'cover' }}
                    />
                  </div>
                ))}
              </div>
              
              {/* Left Arrow */}
              <button 
                className="position-absolute top-50 start-0 translate-middle-y btn btn-light border-0 rounded-circle ms-2"
                style={{ width: '40px', height: '40px', zIndex: 10 }}
                onClick={() => setCurrentSlide(currentSlide === 0 ? banners.length - 1 : currentSlide - 1)}
              >
                <span className="fw-bold">&lt;</span>
              </button>

              {/* Right Arrow */}
              <button 
                className="position-absolute top-50 end-0 translate-middle-y btn btn-light border-0 rounded-circle me-2"
                style={{ width: '40px', height: '40px', zIndex: 10 }}
                onClick={() => setCurrentSlide((currentSlide + 1) % banners.length)}
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
                        currentSlide === index ? 'bg-white' : 'bg-secondary'
                      }`}
                      style={{ width: '10px', height: '10px' }}
                      onClick={() => setCurrentSlide(index)}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Action Buttons */}
            <div className="row g-2 mt-3">
              <div className="col-6">
                <div className="bg-warning rounded p-3 text-center">
                  <div className="d-flex align-items-center justify-content-center">
                    <div className="me-2">
                      <img 
                        src="/api/placeholder/40/40" 
                        alt="Hire on Rent"
                        className="rounded"
                      />
                    </div>
                    <div>
                      <h6 className="mb-0 fw-bold text-dark">HIRE ON RENT</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="bg-warning rounded p-3 text-center">
                  <div className="d-flex align-items-center justify-content-center">
                    <div className="me-2">
                      <img 
                        src="/api/placeholder/40/40" 
                        alt="Urgent Delivery"
                        className="rounded"
                      />
                    </div>
                    <div>
                      <h6 className="mb-0 fw-bold text-dark">URGENT</h6>
                      <h6 className="mb-0 fw-bold text-dark">DELIVERY</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar - Hire On Rent */}
        <div className="col-lg-3 col-md-12">
          <div className="bg-light rounded p-3 h-100">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h6 className="fw-bold mb-0 text-dark">Hire On Rent</h6>
              <small className="text-muted">Know more</small>
            </div>
            
            <div className="hire-items">
              {hireOnRentItems.map((item) => (
                <div key={item.id} className="border border-danger rounded p-2 mb-3">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-100 rounded mb-2"
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                  <h6 className="fw-bold text-dark small mb-1">{item.title}</h6>
                  <p className="text-danger small mb-0">{item.price}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
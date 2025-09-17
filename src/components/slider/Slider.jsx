import React, { useState, useEffect } from 'react';

// Mock data for demonstration
const flashSaleProducts = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=200&fit=crop",
    originalPrice: 99,
    salePrice: 19,
    discount: "42.42% OFF",
    title: "Jio Mobile stand-JB163 (DV)",
    variant: "Red Color"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=300&h=200&fit=crop",
    originalPrice: 150,
    salePrice: 149,
    discount: "0.67% OFF",
    title: "Hanuman Chola - Complete SAMAGREE (DV)",
    variant: "Complete Package"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop",
    originalPrice: 899,
    salePrice: 579,
    discount: "35.6% OFF",
    title: "Electric Piano Keyboard Musical Toy (DV)",
    variant: "22 Key"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1594736797933-d0b22055fb77?w=300&h=200&fit=crop",
    originalPrice: 3200,
    salePrice: 1799,
    discount: "43.78% OFF",
    title: "Printed lehenga choli in heavy Butter silk (DV)",
    variant: "LENGTH IS 44 INCH"
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=300&h=200&fit=crop",
    originalPrice: 155,
    salePrice: 152,
    discount: "1.94% OFF",
    title: "Boro Plus doodh kesar body lotion",
    variant: "100ml"
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=300&h=200&fit=crop",
    originalPrice: 345,
    salePrice: 239,
    discount: "30.72% OFF",
    title: "Flower Pendant set (DV)",
    variant: "Red Golden"
  }
];

const electronicProducts = [
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=200&fit=crop",
    originalPrice: 2999,
    salePrice: 1999,
    discount: "33% OFF",
    title: "Wireless Headphones",
    variant: "Black"
  },
  {
    id: 8,
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=300&h=200&fit=crop",
    originalPrice: 1599,
    salePrice: 899,
    discount: "44% OFF",
    title: "Smart Watch",
    variant: "Silver"
  },
  {
    id: 9,
    image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=300&h=200&fit=crop",
    originalPrice: 799,
    salePrice: 599,
    discount: "25% OFF",
    title: "Bluetooth Speaker",
    variant: "Portable"
  }
];

// Reusable Product Card Component
const ProductCard = ({ product }) => {
  return (
    <div className="col">
      <div className="card h-100 shadow-sm border-0" style={{borderRadius: '12px', overflow: 'hidden'}}>
        <div className="position-relative">
          <img 
            src={product.image} 
            className="card-img-top" 
            alt={product.title}
            style={{height: '200px', objectFit: 'cover'}}
          />
          <span className="position-absolute top-0 start-0 m-2 badge text-white px-2 py-1" 
                style={{backgroundColor: '#28a745', fontSize: '10px', fontWeight: 'bold'}}>
            {product.discount}
          </span>
        </div>
        <div className="card-body p-3">
          <div className="d-flex align-items-center mb-2">
            <span className="text-muted text-decoration-line-through me-2" style={{fontSize: '12px'}}>
              ₹{product.originalPrice}
            </span>
            <span className="fw-bold text-danger" style={{fontSize: '16px'}}>
              ₹{product.salePrice}
            </span>
          </div>
          <h6 className="card-title mb-2" style={{fontSize: '14px', lineHeight: '1.3'}}>
            {product.title}
          </h6>
          <span className="badge bg-light text-dark" style={{fontSize: '10px'}}>
            {product.variant}
          </span>
        </div>
      </div>
    </div>
  );
};

// Reusable Slider Component
const ReusableSlider = ({ title, products, sectionStyle = {} }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 576) setItemsPerView(1);
      else if (window.innerWidth < 768) setItemsPerView(2);
      else if (window.innerWidth < 992) setItemsPerView(3);
      else setItemsPerView(4);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex(prev => 
      prev + itemsPerView >= products.length ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex(prev => 
      prev === 0 ? Math.max(0, products.length - itemsPerView) : prev - 1
    );
  };

  const visibleProducts = products.slice(currentIndex, currentIndex + itemsPerView);
  
  // Fill with products from the beginning if we don't have enough
  while (visibleProducts.length < itemsPerView && products.length > 0) {
    visibleProducts.push(products[visibleProducts.length - currentIndex] || products[0]);
  }

  return (
    <div className="container-fluid py-4" style={{...sectionStyle}}>
      <div className="row align-items-center mb-4">
        <div className="col">
          <div className="d-flex align-items-center">
            <h2 className="fw-bold mb-0 me-3" style={{fontSize: '24px', color: '#333'}}>
              {title}
            </h2>
            {title === 'Flash Sale' && (
              <div className="d-flex align-items-center">
                <div className="bg-warning px-2 py-1 rounded-circle me-2">
                  <span style={{fontSize: '12px'}}>⏰</span>
                </div>
                <small className="text-muted">Buy Everyday only in Rs.1/- in Exact Time 11:11 AM at Flash Sale</small>
              </div>
            )}
          </div>
        </div>
        <div className="col-auto">
          <button className="btn btn-outline-primary btn-sm">View More</button>
        </div>
      </div>

      <div className="position-relative">
        {/* Navigation Buttons */}
        <button 
          className="btn btn-light position-absolute start-0 top-50 translate-middle-y shadow-sm"
          onClick={prevSlide}
          style={{zIndex: 10, width: '40px', height: '40px', borderRadius: '50%'}}
          disabled={currentIndex === 0}
        >
          &#8249;
        </button>
        
        <button 
          className="btn btn-light position-absolute end-0 top-50 translate-middle-y shadow-sm"
          onClick={nextSlide}
          style={{zIndex: 10, width: '40px', height: '40px', borderRadius: '50%'}}
          disabled={currentIndex + itemsPerView >= products.length}
        >
          &#8250;
        </button>

        {/* Product Cards */}
        <div className="mx-5">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3">
            {visibleProducts.map((product, index) => (
              <ProductCard key={`${product.id}-${index}`} product={product} />
            ))}
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="d-flex justify-content-center mt-4">
          {Array.from({length: Math.ceil(products.length / itemsPerView)}).map((_, index) => (
            <button
              key={index}
              className={`btn btn-sm mx-1 ${Math.floor(currentIndex / itemsPerView) === index ? 'btn-primary' : 'btn-outline-secondary'}`}
              onClick={() => setCurrentIndex(index * itemsPerView)}
              style={{width: '10px', height: '10px', borderRadius: '50%', padding: 0}}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// Main Component showing multiple sliders
const Slider = () => {
  return (
    <div className='hero-section'>
      {/* Flash Sale Slider */}
      
      <ReusableSlider 
        title="Flash Sale" 
        products={flashSaleProducts}
        sectionStyle={{backgroundColor: '#f8f9fa'}}
      />

      {/* Electronics Slider */}
      <ReusableSlider 
        title="Electronics" 
        products={electronicProducts}
        sectionStyle={{backgroundColor: '#fff'}}
      />

      {/* Another Flash Sale with different styling */}
      <ReusableSlider 
        title="Special Offers" 
        products={flashSaleProducts.slice(2, 5)}
        sectionStyle={{backgroundColor: '#e3f2fd'}}
      />
    </div>
  );
};

export default Slider;
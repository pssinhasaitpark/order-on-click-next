import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../redux/slices/categorySlice";
import Slider from "../../components/slider/Slider";
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [banners.length]);

  return (
    <div className="my-4 container-fluid px-2 ">
      <div className="row g-2">
        {/* Sidebar */}
        <div className="col-lg-3 col-md-4">
          <div className="bg-light rounded p-3 h-100">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h6 className="fw-bold mb-0 text-dark">Categories</h6>
              <small className="text-muted">See All &gt;</small>
            </div>
            <div className="category-list">
              {loading && <p>Loading...</p>}
              {error && <p className="text-danger">{error}</p>}
              {!loading && !error && categories?.length > 0
                ? categories.map((cat) => (
                    <div
                      key={cat.service_id}
                      className="category-item py-2 border-bottom d-flex align-items-center gap-2"
                    >
                      <img
                        src={cat.service_img}
                        alt={cat.service_name}
                        style={{
                          width: "30px",
                          height: "30px",
                          objectFit: "contain",
                        }}
                      />
                      <small className="text-secondary">
                        {cat.service_name}
                      </small>
                    </div>
                  ))
                : !loading && <p>No categories found</p>}
            </div>
          </div>
        </div>

        {/* Banner Section */}
        <div className="col-lg-6 col-md-8">
          <div className="position-relative">
            <div className="banner-container overflow-hidden rounded">
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
                      src={banner.image}
                      alt={banner.alt}
                      className="w-100 h-auto"
                      style={{ height: "300px", objectFit: "cover" }}
                    />
                  </div>
                ))}
              </div>

              {/* Arrows */}
              <button
                className="position-absolute top-50 start-0 translate-middle-y btn btn-light border-0 rounded-circle ms-2"
                onClick={() =>
                  setCurrentSlide(
                    (currentSlide - 1 + banners.length) % banners.length
                  )
                }
              >
                &lt;
              </button>
              <button
                className="position-absolute top-50 end-0 translate-middle-y btn btn-light border-0 rounded-circle me-2"
                onClick={() =>
                  setCurrentSlide((currentSlide + 1) % banners.length)
                }
              >
                &gt;
              </button>
            </div>
          </div>

          {/* Right Sidebar - Placeholder */}
          <div className="col-lg-3">
            <div className="bg-light rounded p-3 h-100">
              <h6 className="fw-bold text-dark mb-3">Hire On Rent</h6>
              <p>Coming Soon</p>
            </div>
          </div>
        </div>
        <div className="hero-section d-flex justify-content-center mx-auto  my-4 slider">
          <Slider />
        </div>
      </div>
    </div>
  );
};

export default BannerSection;

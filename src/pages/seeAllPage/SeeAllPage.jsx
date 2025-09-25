import React, { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { fetchProductsByType } from "../../redux/slices/seeAllSlice";
import { Card } from "react-bootstrap";
import { FaRegStar, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { TiArrowSortedDown } from "react-icons/ti";
import { Delivery, Rent } from "../../assets";
import Categories from "../../components/catogeriesComponent/CatogeriesComponent";

const SeeAllPage = () => {
  const { type } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [pageNo, setPageNo] = useState(1);
  const { products, loading, error, totalCount } = useSelector(
    (state) => state.seeAll
  );

  // Extract categoryId from query parameters
  const queryParams = new URLSearchParams(location.search);
  const categoryId = queryParams.get("categoryId");

  // Fetch the category name from Redux (assuming categories are already fetched)
  const { categories } = useSelector((state) => state.categories);
  const categoryName = categories?.find(
    (cat) => cat.category_id == categoryId
  )?.category_name;

  // Banner Section Logic
  const [currentSlide, setCurrentSlide] = useState(0);
  const rentalItems = useSelector((state) => {
    const filterKey = `no-search_no-category`;
    return state.rental?.allPagesData?.[filterKey]?.[1] || [];
  });

  const randomRentalItems = useMemo(() => {
    const shuffled = [...rentalItems].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 4);
  }, [rentalItems]);

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

  // Product Fetching Logic
  useEffect(() => {
    if (type === "category" && categoryId) {
      dispatch(
        fetchProductsByType({ type: "category", categoryId, page_no: pageNo })
      );
    } else if (type) {
      dispatch(fetchProductsByType({ type, page_no: pageNo }));
    }
  }, [type, categoryId, pageNo, dispatch]);

  const totalPages = Math.ceil(totalCount / 12);
  const handlePageClick = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages && pageNumber !== pageNo) {
      setPageNo(pageNumber);
      scrollToTop();
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const getPageNumbers = (totalPages, currentPage, maxVisible = 5) => {
    const pageNumbers = [];
    const half = Math.floor(maxVisible / 2);
    pageNumbers.push(1);
    if (currentPage - half > 2) {
      pageNumbers.push("left-ellipsis");
    }
    const start = Math.max(2, currentPage - half);
    const end = Math.min(totalPages - 1, currentPage + half);
    for (let i = start; i <= end; i++) {
      pageNumbers.push(i);
    }
    if (currentPage + half < totalPages - 1) {
      pageNumbers.push("right-ellipsis");
    }
    if (totalPages > 1) {
      pageNumbers.push(totalPages);
    }
    return pageNumbers;
  };

  const pageNumbers = getPageNumbers(totalPages, pageNo, 5);

  if (loading) {
    return (
      <div className="container mt-4">
        <div className="row">
          {Array.from({ length: 12 }).map((_, idx) => (
            <div key={idx} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
              <Card className="h-100 border-0">
                <Skeleton height={200} />
                <Card.Body>
                  <Skeleton height={20} className="mb-2" />
                  <Skeleton height={15} width="60%" className="mb-2" />
                  <div className="d-flex align-items-center">
                    <Skeleton height={20} width={80} className="me-2" />
                    <Skeleton height={15} width={60} />
                  </div>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return <div className="container mt-4">Error: {error}</div>;
  }

  return (
    <div className="mt-2">
      {/* Banner Section */}
      <div className="hero-section d-flex justify-content-center mx-auto px-3 px-md-0">
        <div className="row g-3 w-100">
          {/* Main Banner Area */}
          <div className="col-12">
            <div className="position-relative">
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
                        src={banner.image}
                        alt={banner.alt}
                        className="img-fluid w-100"
                        style={{ height: "400px", objectFit: "cover" }}
                      />
                    </div>
                  ))}
                </div>
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
              <div className="row g-3 mt-1"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="container mt-4">
        <div className="row">
          {/* Left Sidebar - Categories (Only for category pages) */}
          {type === "category" && (
            <div className="col-12 col-lg-3 mb-4">
              <Categories />
            </div>
          )}

          {/* Main Content */}
          <div className={type === "category" ? "col-12 col-lg-9" : "col-12"}>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h2 className="fw-bold mb-0">
                {type === "flashSale"
                  ? "Flash Sale"
                  : type === "bestSelling"
                  ? "Best Selling"
                  : categoryName || "Category Products"}
              </h2>
            </div>
            <div className="row">
              {products.length > 0 ? (
                products.map((item) => (
                  <div
                    key={item.grocery_id}
                    className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
                  >
                    <Card className="h-100 border-0">
                      <div style={{ height: "200px", overflow: "hidden" }}>
                        <Link
                          to="/product"
                          state={{ product: item, pageNo }}
                          onClick={scrollToTop}
                        >
                          <img
                            src={
                              item.images?.[0]?.image_file ||
                              "https://via.placeholder.com/200"
                            }
                            alt={item.name}
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                            }}
                          />
                        </Link>
                      </div>
                      <Card.Body>
                        {console.log("Rendering product:", item)}
                        <Card.Title className="mb-1 text-black fw-bold">
                          {item.name}
                        </Card.Title>
                        <Card.Text className="text-muted mb-2">
                          {item.category_name}
                        </Card.Text>
                        <div className="d-flex align-items-center mb-2">
                          <span className="fw-bolder text-success me-2">
                            ₹
                            {item.prices?.[0]?.discount ||
                              item.prices?.[0]?.mrp_price}
                          </span>
                          <span>
                            <strike className="text-muted">
                              ₹{item.prices?.[0]?.mrp_price}
                            </strike>
                          </span>
                        </div>
                        <div className="d-flex align-items-center justify-content-between">
                          <span className="fw-bolder text-black">
                            {item.name_hindi}
                          </span>
                          <div className="d-flex">
                            {[...Array(4)].map((_, i) => (
                              <FaStar
                                key={i}
                                style={{
                                  color: "green",
                                  fontSize: "0.85rem",
                                  marginRight: "2px",
                                }}
                              />
                            ))}
                            <FaRegStar
                              style={{
                                color: "grey",
                                fontSize: "0.85rem",
                                marginLeft: "2px",
                              }}
                            />
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  </div>
                ))
              ) : (
                <div className="col-12 text-center py-5">
                  <h5 className="text-muted">No products found</h5>
                </div>
              )}
            </div>
            {totalPages > 1 && (
              <div className="d-flex justify-content-center mt-4">
                <ul
                  className="pagination"
                  style={{ display: "flex", listStyle: "none" }}
                >
                  <li style={{ margin: "0 5px" }}>
                    <button
                      className="page-link"
                      onClick={() => handlePageClick(pageNo - 1)}
                      disabled={pageNo === 1}
                    >
                      Previous
                    </button>
                  </li>
                  {pageNumbers.map((number, idx) =>
                    number === "left-ellipsis" ||
                    number === "right-ellipsis" ? (
                      <li key={`ellipsis-${idx}`} style={{ margin: "0 5px" }}>
                        <span>...</span>
                      </li>
                    ) : (
                      <li key={number} style={{ margin: "0 5px" }}>
                        <button
                          className="page-link"
                          onClick={() => handlePageClick(number)}
                          style={{
                            background: pageNo === number ? "#007bff" : "#fff",
                            color: pageNo === number ? "#fff" : "#000",
                          }}
                        >
                          {number}
                        </button>
                      </li>
                    )
                  )}
                  <li style={{ margin: "0 5px" }}>
                    <button
                      className="page-link"
                      onClick={() => handlePageClick(pageNo + 1)}
                      disabled={pageNo === totalPages}
                    >
                      Next
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeeAllPage;

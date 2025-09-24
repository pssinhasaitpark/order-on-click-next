import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchRentalItems,
  updateRentalFilters,
  clearRentalPagesData,
} from "../../redux/slices/rentalPageSlice.js";

const RentalCatalog = () => {
  const dispatch = useDispatch();
  const { data, allPagesData, currentFilters, loading, error } = useSelector(
    (state) => state.rental
  );
  const [searchTerm, setSearchTerm] = useState(currentFilters.search);
  const [currentPage, setCurrentPage] = useState(1);

  // Fetch data whenever filters or page changes
  useEffect(() => {
    const filterKey = `${searchTerm || "no-search"}_${
      currentFilters.category_id || "no-category"
    }`;
    if (!allPagesData[filterKey]?.[currentPage]) {
      dispatch(
        fetchRentalItems({
          search: searchTerm,
          category_id: currentFilters.category_id,
          page_no: currentPage,
          limit: 20,
        })
      );
    }
  }, [
    dispatch,
    searchTerm,
    currentFilters.category_id,
    currentPage,
    allPagesData,
  ]);

  // Handle search input change
  const handleSearchChange = (e) => {
    const newSearchTerm = e.target.value;
    setSearchTerm(newSearchTerm);
    setCurrentPage(1);
    dispatch(updateRentalFilters({ search: newSearchTerm }));
    dispatch(clearRentalPagesData());
  };

  // Get current page data
  const filterKey = `${searchTerm || "no-search"}_${
    currentFilters.category_id || "no-category"
  }`;
  const currentPageData = allPagesData[filterKey]?.[currentPage] || [];

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Check if there is a next page (assuming API returns empty array if no more data)
  const hasNextPage = currentPageData.length === 20;

  return (
    <div className="container-fluid bg-light mb-5">
      {/* Header */}
      <div className="row">
        <div className="col-12">
          <div className="bg-white py-4 mb-4 shadow-sm">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <div className="text-center text-md-start">
                    <h2 className="mb-1 fw-bold text-dark">Hire On Rent For</h2>
                    <h4 className="mb-0 text-danger fw-bold border-bottom border-danger d-inline-block pb-1">
                      Special Events & Occasions
                    </h4>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex justify-content-center justify-content-md-end mt-3 mt-md-0">
                    <div className="input-group" style={{ maxWidth: "300px" }}>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search for Rental Item..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                      />
                      <button className="btn btn-danger" type="button">
                        <i className="fas fa-search"></i>
                        🔍
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Items Grid */}
      <div className="container">
        {loading && currentPage === 1 && (
          <div className="text-center py-5">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}
        {error && <div className="alert alert-danger">{error}</div>}
        <div className="row g-4">
          {currentPageData.map((item) => (
            <div
              key={item.rental_item_id}
              className="col-6 col-sm-6 col-md-4 col-lg-3"
            >
              <div className="card h-100 shadow-sm border-0 bg-white">
                <div className="card-body p-3 text-center">
                  <div className="mb-3">
                    <img
                      src={item.item_img}
                      alt={item.item_name}
                      className="img-fluid rounded"
                      style={{
                        width: "100%",
                        height: "150px",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <h6
                    className="card-title text-dark fw-normal mb-2"
                    style={{ fontSize: "0.9rem" }}
                  >
                    {item.item_name}
                  </h6>
                </div>
              </div>
            </div>
          ))}
        </div>
        {currentPageData.length === 0 && !loading && (
          <div className="row">
            <div className="col-12">
              <div className="text-center py-5">
                <h4 className="text-muted">
                  No items found matching your search.
                </h4>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Pagination */}
      <div className="container py-4">
        <nav aria-label="Page navigation">
          <ul className="pagination justify-content-center">
            <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
              <button
                className="page-link"
                onClick={() => handlePageChange(currentPage - 1)}
              >
                Previous
              </button>
            </li>
            <li className="page-item active">
              <button className="page-link">{currentPage}</button>
            </li>
            <li className={`page-item ${!hasNextPage ? "disabled" : ""}`}>
              <button
                className="page-link"
                onClick={() => handlePageChange(currentPage + 1)}
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>

      {/* Footer spacing */}
      <div className="py-5"></div>
    </div>
  );
};

export default RentalCatalog;

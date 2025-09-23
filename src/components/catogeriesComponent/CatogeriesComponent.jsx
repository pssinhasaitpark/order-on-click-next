// Categories.jsx
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCategories } from "../../redux/slices/categorySlice";

const Categories = () => {
  const dispatch = useDispatch();
  const { categories, loading, error } = useSelector(
    (state) => state.categories
  );

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <div className="bg-light rounded h-100">
      <div
        className="d-flex align-items-center mb-1 p-3"
        style={{ backgroundColor: "rgba(230, 46, 4, 0.15)" }}
      >
        <h6 className="fw-bold mb-0 text-dark">Categories</h6>
        <small className="text-muted mx-3">See All &gt;</small>
      </div>

      <div className="category-list px-3">
        {loading ? (
          <div className="py-2 text-center">
            <small className="text-secondary">Loading categories...</small>
          </div>
        ) : error ? (
          <div className="py-2 text-center">
            <small className="text-danger">Error loading categories</small>
          </div>
        ) : categories && categories.length > 0 ? (
          categories.map((category) => (
            <div
              key={category.category_id}
              className="category-item py-2 border-bottom border-light d-flex align-items-center"
            >
              {/* Category Image */}
              <div className="me-2 flex-shrink-0">
                <img
                  src={`https://myelectrocare.com/electrocare/uploads/category/${category.category_image}`}
                  alt={category.category_name}
                  className="rounded"
                  style={{
                    width: "24px",
                    height: "24px",
                    objectFit: "cover",
                  }}
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
              </div>

              {/* Category Name */}
              <small className="text-secondary d-flex align-items-center flex-grow-1">
                <span className="me-2">&gt;</span>
                {category.category_name}
              </small>
            </div>
          ))
        ) : (
          <div className="py-2 text-center">
            <small className="text-secondary">No categories available</small>
          </div>
        )}
      </div>
    </div>
  );
};

export default Categories;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsByType } from "../../redux/slices/seeAllSlice";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const RelatedProductsSlider = ({ categoryId }) => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.seeAll);
  const { categories } = useSelector((state) => state.categories);
  const [relatedProducts, setRelatedProducts] = useState([]);

  // Fetch category name
  const categoryName = categories?.find(
    (cat) => cat.category_id == categoryId
  )?.category_name;

  useEffect(() => {
    if (categoryId) {
      dispatch(
        fetchProductsByType({
          type: "category",
          categoryId,
          page_no: 1,
          limit: 6, // Fetch only 5 products
        })
      );
    }
  }, [categoryId, dispatch]);

  useEffect(() => {
    if (products.length > 0) {
      setRelatedProducts(products.slice(0, 6)); // Ensure only 5 products
    }
  }, [products]);

  if (loading) {
    return (
      <div className="row">
        {Array.from({ length: 6 }).map((_, idx) => (
          <div key={idx} className="col-6 col-md-4 col-lg-2 mb-4">
            <Card className="h-100 border-0">
              <Skeleton height={150} />
              <Card.Body>
                <Skeleton height={20} className="mb-2" />
                <Skeleton height={15} width="60%" className="mb-2" />
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return <div className="text-center text-danger my-3">{error}</div>;
  }

  return (
    <div>
      <h4 className="mb-3">{categoryName || "Related Products"}</h4>
      <div className="row">
        {relatedProducts.length > 0 ? (
          relatedProducts.map((item) => (
            <div key={item.grocery_id} className="col-6 col-md-4 col-lg-2 mb-4">
              <Card className="h-100 border-0">
                <div style={{ height: "150px", overflow: "hidden" }}>
                  <Link to="/product" state={{ product: item }}>
                    <img
                      src={
                        item.images?.[0]?.image_file ||
                        "https://via.placeholder.com/150"
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
                  <Card.Title className="mb-1 text-black fw-bold">
                    {item.name}
                  </Card.Title>
                  <Card.Text className="text-muted mb-2">
                    ₹{item.prices?.[0]?.discount || item.prices?.[0]?.mrp_price}
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          ))
        ) : (
          <p className="text-center text-muted my-5">
            No related products found.
          </p>
        )}
      </div>
    </div>
  );
};

export default RelatedProductsSlider;

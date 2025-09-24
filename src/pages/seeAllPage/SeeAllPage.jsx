// import React, { useEffect, useState, useMemo } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchGroceryData } from "../../redux/slices/grocerySlice";
// import { Card } from "react-bootstrap";
// import { FaRegStar, FaStar, FaSearch, FaBars } from "react-icons/fa";
// import { Link, useLocation, useParams, useNavigate } from "react-router-dom";
// import Skeleton from "react-loading-skeleton";
// import "react-loading-skeleton/dist/skeleton.css";
// // import logo from "../../assets/images/logo.png";
// import Categories from "../../components/catogeriesComponent/CatogeriesComponent";

// const SeeAllPage = () => {
//   const { module_action } = useParams();
//   const location = useLocation();
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const searchParams = new URLSearchParams(location.search);
//   const urlSearchQuery = searchParams.get("search") || "";
//   const [pageNo, setPageNo] = useState(1);
//   const [selectedCategories, setSelectedCategories] = useState([]);
//   const [selectedStatus, setSelectedStatus] = useState("any");
//   const [selectedCondition, setSelectedCondition] = useState("anyCondition");
//   const [sortOrder, setSortOrder] = useState("default");
//   const [showCategories, setShowCategories] = useState(false);
//   const [searchQuery, setSearchQuery] = useState(urlSearchQuery);
//   const [searchLoading, setSearchLoading] = useState(false);
//   const { data, loading } = useSelector((state) => state.grocery);
//   const groceryItems = data?.grocery || [];
//   const totalCount = data?.total_count || 0;

//   useEffect(() => {
//     if (location.state?.selectedCategory) {
//       setSelectedCategories([location.state.selectedCategory]);
//     }
//   }, [location.state]);

//   useEffect(() => {
//     setSearchQuery(urlSearchQuery);
//   }, [urlSearchQuery]);

//   const fetchDataWithParams = (customParams = {}) => {
//     setSearchLoading(true);
//     const params = {
//       category_id: selectedCategories.length > 0 ? selectedCategories[0] : "",
//       search: searchQuery.trim() || "",
//       page_no: customParams.page_no || pageNo,
//       limit: 12,
//       ...customParams,
//     };
//     console.log("Fetching data with params:", params);
//     dispatch(fetchGroceryData(params))
//       .then(() => {
//         setSearchLoading(false);
//       })
//       .catch((error) => {
//         console.error("API Error:", error);
//         setSearchLoading(false);
//       });
//   };

//   useEffect(() => {
//     fetchDataWithParams();
//   }, [dispatch, searchQuery, selectedCategories, sortOrder]);

//   const currentPageItems = useMemo(() => {
//     let items = [...groceryItems];
//     if (sortOrder === "lowToHigh") {
//       items.sort(
//         (a, b) =>
//           parseFloat(
//             a.grocery_price?.[0]?.discount || a.grocery_price?.[0]?.mrp_price
//           ) -
//           parseFloat(
//             b.grocery_price?.[0]?.discount || b.grocery_price?.[0]?.mrp_price
//           )
//       );
//     } else if (sortOrder === "highToLow") {
//       items.sort(
//         (a, b) =>
//           parseFloat(
//             b.grocery_price?.[0]?.discount || b.grocery_price?.[0]?.mrp_price
//           ) -
//           parseFloat(
//             a.grocery_price?.[0]?.discount || a.grocery_price?.[0]?.mrp_price
//           )
//       );
//     }
//     return items;
//   }, [groceryItems, sortOrder]);

//   useEffect(() => {
//     setPageNo(1);
//   }, [
//     selectedCategories,
//     selectedStatus,
//     selectedCondition,
//     sortOrder,
//     searchQuery,
//   ]);

//   const handleSortChange = (e) => setSortOrder(e.target.value);

//   // const handleSearch = (query) => {
//   //   setSearchQuery(query);
//   //   const newUrl = new URL(window.location);
//   //   if (query.trim()) {
//   //     newUrl.searchParams.set("search", query);
//   //   } else {
//   //     newUrl.searchParams.delete("search");
//   //   }
//   //   window.history.pushState({}, "", newUrl);
//   //   if (window.searchTimeout) {
//   //     clearTimeout(window.searchTimeout);
//   //   }
//   //   window.searchTimeout = setTimeout(() => {
//   //     setSearchLoading(true);
//   //     const params = {
//   //       category_id: selectedCategories.length > 0 ? selectedCategories[0] : "",
//   //       search: query.trim() || "",
//   //       page_no: 1,
//   //       limit: 12,
//   //     };
//   //     dispatch(fetchGroceryData(params)).then(() => {
//   //       setSearchLoading(false);
//   //     });
//   //   }, 500);
//   // };

//   const handleClearSearch = () => {
//     setSearchQuery("");
//     const newUrl = new URL(window.location);
//     newUrl.searchParams.delete("search");
//     window.history.pushState({}, "", newUrl);
//     setSearchLoading(true);
//     const params = {
//       category_id: selectedCategories.length > 0 ? selectedCategories[0] : "",
//       search: "",
//       page_no: 1,
//       limit: 12,
//     };
//     dispatch(fetchGroceryData(params)).then(() => {
//       setSearchLoading(false);
//     });
//   };

//   const handlePageClick = (pageNumber) => {
//     console.log("Page clicked:", pageNumber, "Current pageNo:", pageNo);
//     if (pageNumber >= 1 && pageNumber <= totalPages && pageNumber !== pageNo) {
//       setPageNo(pageNumber);
//       fetchDataWithParams({ page_no: pageNumber });
//       scrollToTop();
//     }
//   };

//   const totalPages = Math.ceil(totalCount / 12);

//   const getPageNumbers = (totalPages, currentPage, maxVisible = 5) => {
//     const pageNumbers = [];
//     const half = Math.floor(maxVisible / 2);
//     pageNumbers.push(1);
//     if (currentPage - half > 2) {
//       pageNumbers.push("left-ellipsis");
//     }
//     const start = Math.max(2, currentPage - half);
//     const end = Math.min(totalPages - 1, currentPage + half);
//     for (let i = start; i <= end; i++) {
//       pageNumbers.push(i);
//     }
//     if (currentPage + half < totalPages - 1) {
//       pageNumbers.push("right-ellipsis");
//     }
//     if (totalPages > 1) {
//       pageNumbers.push(totalPages);
//     }
//     return pageNumbers;
//   };

//   const pageNumbers = getPageNumbers(totalPages, pageNo, 5);

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   const isDataLoading = loading || searchLoading;
//   console.log("currentPageItems:", currentPageItems);

//   return (
//     <div>
//       <div className="mt-2">
//         <div className="container">
//           <div className="row">
//             {/* Desktop Categories Sidebar */}
//             <div className="d-none d-lg-block col-lg-3">
//               <Categories />
//             </div>

//             {/* Mobile Categories Overlay */}
//             <div
//               style={{
//                 position: "fixed",
//                 top: 0,
//                 left: 0,
//                 width: "100vw",
//                 height: "100vh",
//                 zIndex: 2000,
//                 background: showCategories
//                   ? "rgba(0,0,0,0.25)"
//                   : "rgba(0,0,0,0)",
//                 transition: "background 0.3s ease",
//                 pointerEvents: showCategories ? "auto" : "none",
//               }}
//               onClick={() => setShowCategories(false)}
//             >
//               <div
//                 style={{
//                   width: "80vw",
//                   maxWidth: 340,
//                   height: "100vh",
//                   background: "#fff",
//                   padding: 24,
//                   position: "absolute",
//                   left: 0,
//                   top: 0,
//                   zIndex: 2100,
//                   overflowY: "auto",
//                   boxShadow: "2px 0 24px rgba(0,0,0,0.13)",
//                   transform: showCategories
//                     ? "translateX(0)"
//                     : "translateX(-100%)",
//                   transition: "transform 0.3s ease",
//                 }}
//                 onClick={(e) => e.stopPropagation()}
//               >
//                 <button
//                   className="btn btn-close float-end mb-3"
//                   onClick={() => setShowCategories(false)}
//                   aria-label="Close Categories"
//                 />
//                 <Categories />
//               </div>
//             </div>

//             {/* Main Content */}
//             <div className="col-12 col-lg-9">
//               <div
//                 className="d-flex flex-wrap justify-content-between align-items-center mb-3 py-4"
//                 style={{ paddingTop: 18, paddingBottom: 10 }}
//               >
//                 <div
//                   className="d-flex align-items-start flex-wrap"
//                   style={{ gap: 16 }}
//                 >
//                   {isDataLoading ? (
//                     <div className="d-flex gap-4">
//                       <Skeleton height={20} width={50} />
//                     </div>
//                   ) : (
//                     <div className="form-check">
//                       <input
//                         className="form-check-input"
//                         type="radio"
//                         name="flexRadioDisabled"
//                         id="flexRadioDisabled"
//                         checked
//                       />
//                       <label
//                         className="form-check-label"
//                         htmlFor="flexRadioDisabled"
//                       >
//                         All
//                       </label>
//                     </div>
//                   )}
//                 </div>
//                 {isDataLoading ? (
//                   <Skeleton height={38} width={180} />
//                 ) : (
//                   <select
//                     className="form-select"
//                     style={{ width: 180, minWidth: 100, maxWidth: "97vw" }}
//                     value={sortOrder}
//                     onChange={handleSortChange}
//                   >
//                     <option value="default">Sort by default</option>
//                     <option value="lowToHigh">Price: Low to High</option>
//                     <option value="highToLow">Price: High to Low</option>
//                   </select>
//                 )}
//               </div>
//               <div className="mb-3">
//                 {isDataLoading ? (
//                   <Skeleton height={20} width={300} />
//                 ) : (
//                   <p className="text-muted">
//                     Showing {currentPageItems.length} results
//                     {searchQuery && (
//                       <span>
//                         {" "}
//                         for search: <strong>"{searchQuery}"</strong>
//                       </span>
//                     )}
//                     {selectedCategories.length > 0 && (
//                       <span>
//                         {" "}
//                         | Categories: {selectedCategories.join(", ")}
//                       </span>
//                     )}
//                   </p>
//                 )}
//               </div>
//               <div className="row">
//                 {isDataLoading ? (
//                   Array.from({ length: 12 }).map((_, idx) => (
//                     <div
//                       key={idx}
//                       className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
//                     >
//                       <Card
//                         className="h-100 border-0"
//                         style={{
//                           borderRadius: "10px",
//                           boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
//                         }}
//                       >
//                         <Skeleton height={200} />
//                         <Card.Body className="px-3 py-2">
//                           <Skeleton height={20} className="mb-2" />
//                           <Skeleton height={15} width="60%" className="mb-2" />
//                           <div className="d-flex align-items-center">
//                             <Skeleton height={20} width={80} className="me-2" />
//                             <Skeleton height={15} width={60} />
//                           </div>
//                           <div className="pt-3">
//                             <Skeleton
//                               height={15}
//                               width="50%"
//                               className="mb-2"
//                             />
//                             <div className="d-flex">
//                               {[...Array(5)].map((_, i) => (
//                                 <Skeleton
//                                   key={i}
//                                   height={16}
//                                   width={16}
//                                   circle
//                                   className="me-1"
//                                 />
//                               ))}
//                             </div>
//                           </div>
//                         </Card.Body>
//                       </Card>
//                     </div>
//                   ))
//                 ) : currentPageItems.length > 0 ? (
//                   currentPageItems.map((item) => (
//                     <div
//                       key={item.grocery_id}
//                       className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
//                     >
//                       <Card
//                         className="h-100 border-0"
//                         style={{
//                           borderRadius: "10px",
//                           boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
//                           opacity: item.in_stock === "0" ? 0.7 : 0.97,
//                           backgroundColor:
//                             item.in_stock === "0"
//                               ? "rgba(255,255,255,0.8)"
//                               : "#fff",
//                           transition: "all 0.3s",
//                         }}
//                       >
//                         <div
//                           style={{
//                             width: "100%",
//                             position: "relative",
//                             overflow: "hidden",
//                             height: "240px",
//                             minHeight: 240,
//                             maxHeight: 280,
//                             background: "#f9f9f9",
//                             borderRadius: "10px 10px 0 0",
//                           }}
//                         >
//                           {item.in_stock === "0" && (
//                             <div
//                               style={{
//                                 position: "absolute",
//                                 top: 0,
//                                 left: 0,
//                                 right: 0,
//                                 bottom: 0,
//                                 backgroundColor: "rgba(255,255,255,0.7)",
//                                 zIndex: 2,
//                                 display: "flex",
//                                 alignItems: "center",
//                                 justifyContent: "center",
//                               }}
//                             >
//                               <span
//                                 style={{
//                                   backgroundColor: "rgba(220,53,69,0.9)",
//                                   color: "#fff",
//                                   padding: "8px 16px",
//                                   borderRadius: "20px",
//                                   fontWeight: "bold",
//                                   fontSize: "0.9rem",
//                                   textTransform: "uppercase",
//                                   letterSpacing: "1px",
//                                 }}
//                               >
//                                 OUT OF STOCK
//                               </span>
//                             </div>
//                           )}
//                           <Link
//                             to="/product"
//                             state={{ product: item, pageNo }}
//                             onClick={scrollToTop}
//                             style={{
//                               display: "block",
//                               width: "100%",
//                               height: "100%",
//                               position: "absolute",
//                               left: 0,
//                               top: 0,
//                             }}
//                           >
//                             <img
//                               src={item.grocery_image?.[0]?.image_file}
//                               alt={item.name}
//                               style={{
//                                 width: "100%",
//                                 height: "100%",
//                                 objectFit: "cover",
//                                 filter:
//                                   item.in_stock === "0"
//                                     ? "grayscale(50%)"
//                                     : "none",
//                                 position: "absolute",
//                                 left: 0,
//                                 top: 0,
//                                 transition: "transform 0.3s ease",
//                               }}
//                               onMouseOver={(e) => {
//                                 if (item.in_stock !== "0") {
//                                   e.target.style.transform = "scale(1.05)";
//                                 }
//                               }}
//                               onMouseOut={(e) => {
//                                 e.target.style.transform = "scale(1)";
//                               }}
//                             />
//                           </Link>
//                         </div>
//                         <Card.Body
//                           className="px-3 py-2"
//                           style={{ minHeight: "120px" }}
//                         >
//                           <Card.Title
//                             className="mb-1 text-black fw-bold"
//                             style={{
//                               fontSize: "0.95rem",
//                               whiteSpace: "nowrap",
//                               overflow: "hidden",
//                               textOverflow: "ellipsis",
//                               color: item.in_stock === "0" ? "#666" : "#000",
//                               lineHeight: "1.2",
//                             }}
//                           >
//                             {item.name}
//                           </Card.Title>
//                           <Card.Text
//                             className="text-muted mb-2"
//                             style={{
//                               fontSize: "0.8rem",
//                               color: item.in_stock === "0" ? "#999" : "#6c757d",
//                               lineHeight: "1.1",
//                             }}
//                           >
//                             {item.category_name}
//                           </Card.Text>
//                           <div className="d-flex align-items-center mb-2">
//                             <span
//                               className="fw-bolder text-success mr-2"
//                               style={{
//                                 color:
//                                   item.in_stock === "0" ? "#999" : "#198754",
//                                 fontWeight: 700,
//                                 fontSize: "0.95rem",
//                               }}
//                             >
//                               ₹
//                               {item.grocery_price?.[0]?.discount ||
//                                 item.grocery_price?.[0]?.mrp_price}
//                             </span>
//                             <span>
//                               <strike
//                                 className="text-muted"
//                                 style={{
//                                   fontSize: "0.8rem",
//                                   color:
//                                     item.in_stock === "0" ? "#ccc" : "#6c757d",
//                                 }}
//                               >
//                                 ₹{item.grocery_price?.[0]?.mrp_price}
//                               </strike>
//                             </span>
//                           </div>
//                           <div className="d-flex align-items-center justify-content-between">
//                             <span
//                               className="fw-bolder text-black"
//                               style={{
//                                 color: item.in_stock === "0" ? "#999" : "#000",
//                                 fontSize: "0.85rem",
//                               }}
//                             >
//                               {item.name_hindi}
//                             </span>
//                             <div className="d-flex">
//                               {[...Array(4)].map((_, i) => (
//                                 <FaStar
//                                   key={i}
//                                   style={{
//                                     color:
//                                       item.in_stock === "0" ? "#ccc" : "green",
//                                     fontSize: "0.85rem",
//                                     marginRight: "2px",
//                                   }}
//                                 />
//                               ))}
//                               <FaRegStar
//                                 style={{
//                                   color:
//                                     item.in_stock === "0" ? "#ddd" : "grey",
//                                   fontSize: "0.85rem",
//                                   marginLeft: "2px",
//                                   stroke:
//                                     item.in_stock === "0" ? "#ddd" : "grey",
//                                   strokeWidth: "10",
//                                 }}
//                               />
//                             </div>
//                           </div>
//                         </Card.Body>
//                       </Card>
//                     </div>
//                   ))
//                 ) : (
//                   <div className="col-12 text-center py-5">
//                     <h5 className="text-muted">
//                       {searchQuery
//                         ? `No products found for "${searchQuery}"`
//                         : "No products found matching your filters"}
//                     </h5>
//                     <p className="text-muted">
//                       {searchQuery
//                         ? "Try searching with different keywords"
//                         : "Try adjusting your filter criteria"}
//                     </p>
//                     {searchQuery && (
//                       <button
//                         className="btn btn-primary mt-2"
//                         onClick={handleClearSearch}
//                       >
//                         Clear Search and Show All Products
//                       </button>
//                     )}
//                   </div>
//                 )}
//               </div>
//               {!isDataLoading && (
//                 <div className="d-flex justify-content-center mt-4">
//                   <ul
//                     className="pagination"
//                     style={{ display: "flex", listStyle: "none" }}
//                   >
//                     <li style={{ margin: "0 5px" }}>
//                       <button
//                         className="page-link"
//                         onClick={() => handlePageClick(pageNo - 1)}
//                         disabled={pageNo === 1}
//                         style={{
//                           border: "1px solid #ddd",
//                           padding: "5px 10px",
//                           borderRadius: "4px",
//                           background: pageNo === 1 ? "#f0f0f0" : "#fff",
//                           cursor: pageNo === 1 ? "not-allowed" : "pointer",
//                         }}
//                       >
//                         Previous
//                       </button>
//                     </li>
//                     {pageNumbers.map((number, idx) =>
//                       number === "left-ellipsis" ||
//                       number === "right-ellipsis" ? (
//                         <li key={`ellipsis-${idx}`} style={{ margin: "0 5px" }}>
//                           <span style={{ padding: "5px 10px" }}>...</span>
//                         </li>
//                       ) : (
//                         <li key={number} style={{ margin: "0 5px" }}>
//                           <button
//                             className="page-link"
//                             onClick={() => handlePageClick(number)}
//                             style={{
//                               border: "1px solid #ddd",
//                               padding: "5px 10px",
//                               borderRadius: "4px",
//                               background:
//                                 pageNo === number ? "#007bff" : "#fff",
//                               color: pageNo === number ? "#fff" : "#000",
//                               cursor: "pointer",
//                             }}
//                           >
//                             {number}
//                           </button>
//                         </li>
//                       )
//                     )}
//                     <li style={{ margin: "0 5px" }}>
//                       <button
//                         className="page-link"
//                         onClick={() => handlePageClick(pageNo + 1)}
//                         disabled={pageNo === totalPages}
//                         style={{
//                           border: "1px solid #ddd",
//                           padding: "5px 10px",
//                           borderRadius: "4px",
//                           background:
//                             pageNo === totalPages ? "#f0f0f0" : "#fff",
//                           cursor:
//                             pageNo === totalPages ? "not-allowed" : "pointer",
//                         }}
//                       >
//                         Next
//                       </button>
//                     </li>
//                   </ul>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SeeAllPage;

// src/pages/seeAllPage/SeeAllPage.jsx
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { fetchProductsByType } from "../../redux/slices/seeAllSlice";
import { Card } from "react-bootstrap";
import { FaRegStar, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Categories from "../../components/catogeriesComponent/CatogeriesComponent";

const SeeAllPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { type, categoryId } = location.state || {};
  const [pageNo, setPageNo] = useState(1);
  const [showCategories, setShowCategories] = useState(false);
  const { products, loading, error, totalCount } = useSelector(
    (state) => state.seeAll
  );

  useEffect(() => {
    if (type) {
      dispatch(fetchProductsByType({ type, page_no: pageNo }));
    } else if (categoryId) {
      dispatch(
        fetchProductsByType({ type: "category", categoryId, page_no: pageNo })
      );
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
      <div className="container">
        <div className="row">
          <div className="d-none d-lg-block col-lg-3">
            <Categories />
          </div>
          <div className="col-12 col-lg-9">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h2 className="fw-bold mb-0">
                {type === "flashSale"
                  ? "Flash Sale"
                  : type === "bestSelling"
                  ? "Best Selling"
                  : "Category Products"}
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
                        <Card.Title className="mb-1 text-black fw-bold">
                          {item.name}
                        </Card.Title>
                        <Card.Text className="text-muted mb-2">
                          {item.category_name}
                        </Card.Text>
                        <div className="d-flex align-items-center mb-2">
                          <span className="fw-bolder text-success me-2">
                            ₹
                            {item.grocery_price?.[0]?.discount ||
                              item.grocery_price?.[0]?.mrp_price}
                          </span>
                          <span>
                            <strike className="text-muted">
                              ₹{item.grocery_price?.[0]?.mrp_price}
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

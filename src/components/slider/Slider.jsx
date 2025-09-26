// import ReusableSlider from "./ReusableSlider";
// import { fetchHomeData } from "../../redux/slices/homeSlice";
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";

// const Slider = () => {
//   const dispatch = useDispatch();
//   const { flashSale, bestSelling, loading } = useSelector(
//     (state) => state.home
//   );

//   useEffect(() => {
//     dispatch(fetchHomeData());
//   }, [dispatch]);

//   return (
//     <div className="hero-section">
//       <ReusableSlider
//         title="Flash Sale"
//         type="flashSale"
//         products={flashSale}
//         loading={loading}
//         sectionStyle={{ backgroundColor: "#f8f9fa" }}
//       />
//       <ReusableSlider
//         title="Best Selling"
//         type="bestSelling"
//         products={bestSelling}
//         loading={loading}
//         sectionStyle={{ backgroundColor: "#e3f2fd" }}
//       />
//     </div>
//   );
// };

// export default Slider;

// src/components/Slider/Slider.jsx
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReusableSlider from "./ReusableSlider";
import { fetchHomeData } from "../../redux/slices/homeSlice";

const Slider = () => {
  const dispatch = useDispatch();
  const { flashSale, bestSelling, loading } = useSelector(
    (state) => state.home
  );

  useEffect(() => {
    dispatch(fetchHomeData());
  }, [dispatch]);

  return (
    <div className="hero-section">
      <ReusableSlider
        title="Flash Sale"
        type="flashSale"
        products={flashSale}
        pageNo={1}
        loading={loading}
        sectionStyle={{ backgroundColor: "#f8f9fa" }}
      />
      <ReusableSlider
        title="Best Selling"
        type="bestSelling"
        products={bestSelling}
        pageNo={1}
        loading={loading}
        sectionStyle={{ backgroundColor: "#e3f2fd" }}
      />
    </div>
  );
};

export default Slider;

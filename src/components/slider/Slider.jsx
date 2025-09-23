// import ReusableSlider from "./ReusableSlider";
// import { fetchGroceryData } from "../../redux/slices/grocerySlice";
// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";

// // Helper to shuffle array
// const shuffleArray = (array) => {
//   const shuffled = [...array];
//   for (let i = shuffled.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
//   }
//   return shuffled;
// };

// const Slider = () => {
//   const dispatch = useDispatch();
//   const { data, loading } = useSelector((state) => state.grocery);

//   const [flashSale, setFlashSale] = useState([]);
//   const [electronics, setElectronics] = useState([]);
//   const [specialOffers, setSpecialOffers] = useState([]);

//   useEffect(() => {
//     const params = {
//       category_id: "",
//       search: "",
//       page_no: 1,
//       limit: 50,
//     };
//     dispatch(fetchGroceryData(params));
//   }, [dispatch]);

//   useEffect(() => {
//     if (data && Array.isArray(data.grocery)) {
//       const shuffled = shuffleArray(data.grocery);

//       setFlashSale(shuffled.slice(0, 6));
//       setElectronics(shuffleArray(shuffled).slice(6, 12));
//       setSpecialOffers(shuffleArray(shuffled).slice(12, 18));
//     }
//   }, [data]);

//   return (
//     <div className="hero-section">
//       <ReusableSlider
//         title="Flash Sale"
//         products={flashSale}
//         loading={loading}
//         sectionStyle={{ backgroundColor: "#f8f9fa" }}
//       />

//       <ReusableSlider
//         title="Electronics"
//         products={electronics}
//         loading={loading}
//         sectionStyle={{ backgroundColor: "#fff" }}
//       />

//       <ReusableSlider
//         title="Special Offers"
//         products={specialOffers}
//         loading={loading}
//         sectionStyle={{ backgroundColor: "#e3f2fd" }}
//       />
//     </div>
//   );
// };

// export default Slider;

// Slider.jsx
import ReusableSlider from "./ReusableSlider";
import { fetchHomeData } from "../../redux/slices/homeSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

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
        products={flashSale}
        loading={loading}
        sectionStyle={{ backgroundColor: "#f8f9fa" }}
      />
      <ReusableSlider
        title="Best Selling"
        products={bestSelling}
        loading={loading}
        sectionStyle={{ backgroundColor: "#e3f2fd" }}
      />
    </div>
  );
};

export default Slider;

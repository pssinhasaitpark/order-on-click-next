import ReusableSlider from "./ReusableSlider";
import flashSaleProducts from "../../utils/flashSaleProducts.json";
import electronicProducts from "../../utils/electronicProducts.json";

// Main Component showing multiple sliders
const Slider = () => {
  return (
    <div className="hero-section">
      {/* Flash Sale Slider */}

      <ReusableSlider
        title="Flash Sale"
        products={flashSaleProducts}
        sectionStyle={{ backgroundColor: "#f8f9fa" }}
      />

      {/* Electronics Slider */}
      <ReusableSlider
        title="Electronics"
        products={electronicProducts}
        sectionStyle={{ backgroundColor: "#fff" }}
      />

      {/* Another Flash Sale with different styling */}
      <ReusableSlider
        title="Special Offers"
        products={flashSaleProducts.slice(2, 5)}
        sectionStyle={{ backgroundColor: "#e3f2fd" }}
      />
    </div>
  );
};

export default Slider;

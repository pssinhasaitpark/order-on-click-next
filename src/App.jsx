import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import OrderStatus from "./components/Orders/OrderStatus";
import HeaderSeeAll from "./pages/seeAllPage/SeeAllPage";
import LoginForm from "./components/LoginForm/LoginForm";
import { Cart, FlashSaleProducts, Home } from "./pages";
import Video from "./pages/video/Video.jsx";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<OrderStatus />} />
        <Route path="/see-all" element={<HeaderSeeAll />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/flash-sale" element={<FlashSaleProducts />} />
        <Route path="/videos" element={<Video />} />
      </Route>
    </Routes>
  );
}

export default App;

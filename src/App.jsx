import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home/index";
import Cart from "./pages/Cart/index";
import OrderStatus from "./components/Orders/OrderStatus";
import LoginForm from "./components/LoginForm/LoginForm";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<OrderStatus />} />
        <Route path="/login" element={<LoginForm />} />
      </Route>
    </Routes>
  );
}

export default App;

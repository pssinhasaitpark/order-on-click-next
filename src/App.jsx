import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Cart from "./pages/Cart/index";
function App() {
  return (
    <Routes>
      {/* Layout route */}
      <Route path="/" element={<Layout />}>
        {/* Nested routes render inside <Outlet /> */}
        <Route index element={<Home />} />
        <Route path="cart" element={<Cart />} />
      </Route>
    </Routes>
  );
}

export default App;

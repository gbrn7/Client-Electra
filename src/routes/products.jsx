import { Route, Routes } from "react-router-dom";
import Products from "../pages/products";
import Edit from "../pages/products/edit";
import Create from "../pages/products/create";

export default function ProductRoute() {
  return (
    <Routes>
      <Route path="/" element={<Products />} />
      <Route path="/create" element={<Create />} />
      <Route path="/edit/:productId" element={<Edit />} />
    </Routes>
  );
}

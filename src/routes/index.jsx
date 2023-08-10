import { Route, Routes } from "react-router-dom";
import PageSignin from "../pages/signin";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<>Home</>}></Route>
      <Route path="/signin" element={<PageSignin/>}></Route>
    </Routes>
  )
}

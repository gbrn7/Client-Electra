import { Navigate, Route, Routes } from "react-router-dom";
import PageSignin from "../pages/signin";
import GuestOnlyRoute from "../components/GuestOnlyRoute";
import GuardRoute from "../components/GuardRoute";
import ENavbar from "../components/ENavbar";
import ProductRoute from "./products";
import DashboardRoute from "../pages/dashboard";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="signin" 
      element={
        <GuestOnlyRoute>
          <PageSignin/>
        </GuestOnlyRoute>
      }
      />
      <Route
        path="/"
        element={
          <>
            <ENavbar/>
            <GuardRoute/>
          </>
        }
      >
        <Route path="dashboard/*" element={<DashboardRoute/>}/>
        <Route path="products/*" element={<ProductRoute/>}/>
        <Route path="" element={<Navigate to="/dashboard" replace={true}/>}/>
      </Route>
    </Routes>
  )
}

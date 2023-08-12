import { Navigate, Route, Routes } from "react-router-dom";
import PageSignin from "../pages/signin";
import GuestOnlyRoute from "../components/GuestOnlyRoute";
import GuardRoute from "../components/GuardRoute";
import Dashboard from "../pages/dashboard";

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
            <GuardRoute/>
          </>
        }
      >
        <Route path="dashboard/*" element={<Dashboard/>}/>
        <Route path="" element={<Navigate to="/dashboard" replace={true}/>}/>
      </Route>
    </Routes>
  )
}

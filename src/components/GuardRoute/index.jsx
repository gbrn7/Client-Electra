import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export default function GuardRoute({children}){
  let {token} = useSelector((state) => state.auth);

  console.log(token);

  if(!token) return <Navigate to='/signin' replace={true}/>
  return children || <Outlet />;

}
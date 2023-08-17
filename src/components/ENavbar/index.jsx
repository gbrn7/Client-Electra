import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../assets/Vendor/boxicons-master/css/boxicons.min.css";
import "../../assets/Vendor/RemixIcon-master/fonts/remixicon.css";
import "./style.css";
import HeaderSidebar from "../HeaderSidebar";
import logo from "../../assets/img/logo.svg";
import NavLink from "../Navlink";
import $ from "jquery";

function ENavbar() {
  const navigate = useNavigate();
  const [role, setRole] = useState(null);

  const [toggleState, setToggleState] = useState(
    localStorage.getItem("toggleState")
      ? JSON.parse(localStorage.getItem("toggleState"))
      : false
  );

  const toggleHandler = () => {
    setToggleState((toggleState) => !toggleState);
    localStorage.setItem("toggleState", !toggleState);
  };

  const navlinkHandler = (url, event) => {
    // const tes = $("nav .active").removeAttr('.active');
    navigate(`/${url}`);
  };

  const fetchDataAuth = () => {
    let { role } = localStorage.getItem("auth")
      ? JSON.parse(localStorage.getItem("auth"))
      : {};

    setRole(role);
  };

  useEffect(() => {
    fetchDataAuth();
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/signin";
  };

  return (
    <>
      <nav className={`sidebar ${toggleState ? "close" : ""}`}>
        <HeaderSidebar
          clickHandler={toggleHandler}
          name={"Electra-Shop"}
          nameSystem={"Electra Corp"}
          logo={logo}
        />

        <div className="menu-bar h-100 d-flex justify-content-between flex-column">
          <div className="menu d-flex flex-column h-100 justify-content-between">
            <ul className="menu-links d-flex flex-column gap-2">
              <NavLink iconClass={"bx bx-home"} destination={"/"}>
                Dashboard
              </NavLink>
              <NavLink iconClass={"bx bxs-package"} destination={"/products"}>
                Data Products
              </NavLink>
              <NavLink
                iconClass={"bx bxs-wallet"}
                destination={"/transactions"}
              >
                Data Transaction
              </NavLink>
              <NavLink
                iconClass={"bx bx-calendar-event"}
                destination={"/schedule"}
              >
                Data Schedule
              </NavLink>
            </ul>
            <div className="bottom-content ">
              <ul>
                <NavLink iconClass={"bx bx-log-out"} action={handleLogout}>
                  Logout
                </NavLink>
                <li className="mode">
                  <div className="moon-sun">
                    <i className="bx bx-moon icon moon"></i>
                    <i className="bx bx-sun icon sun"></i>
                  </div>
                  <span className="mode-text text">Dark Mode</span>

                  <div className="toggle-switch">
                    <span className="switch dark"></span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      <div className="header-bg position-absolute"></div>

      <div className="footer-wrapper fixed-bottom text-secondary">
        <strong>Copyright © 2023 SUPP MY COFFEE</strong> All Right Reserved
      </div>
    </>
  );
}

export default ENavbar;

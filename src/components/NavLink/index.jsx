import { Link } from "react-router-dom";

export default function NavLink({action, children, iconClass, active}) {
  return (
    <li className={active? 'nav-link active' : 'nav-link'} >
    <Link onClick={action} className="text-decoration-none text-black">
      <i className={iconClass} ></i>
      <span className="text nav-text">{children}</span>
    </Link>
  </li>
  )
}

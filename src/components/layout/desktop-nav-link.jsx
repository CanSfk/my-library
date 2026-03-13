import { NavLink } from "react-router";

export const DesktopNavLink = ({ name = "", to = "/" }) => {
  return (
    <NavLink to={to} className="cursor-pointer">
      {({ isActive }) => (
        <span
          className={`text-sm font-semibold transition-colors duration-300 ${
            isActive ? "text-nav-link-hover" : "text-nav-link"
          }`}
        >
          {name}
        </span>
      )}
    </NavLink>
  );
};

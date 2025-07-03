import React from "react";
import { Link, useLocation } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "../../Redux/Slice/counterSlice";
import { getNavbarStyles } from "./style";

function CustomNavbar() {
  const location = useLocation();

  const theme = useSelector((state: any) => state.counter.theme);
  const dispatch = useDispatch();
  const styles = getNavbarStyles(theme);

  return (
    <nav style={styles.navbar as React.CSSProperties}>
      <div style={styles.brand}>
        <Link to="/" style={styles.brandText as React.CSSProperties}>React Boilerplate</Link>
      </div>
      <ul style={styles.navLinks}>
        {["Home", "About", "Contact", "Redux", "Theme"].map((item) => (
          <li key={item}>
            {item === "Theme" ? (
              <button
                onClick={() => dispatch(changeTheme())}
                style={{
                  ...styles.toggleButton,
                }}
              >
                {theme === "dark" ? "🌞" : "🌙"}
              </button>
            ) : (
              <Link
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                style={{
                  ...styles.navLink,
                  ...(location.pathname === (item === "Home" ? "/" : `/${item.toLowerCase()}`)
                    ? styles.activeLink
                    : {}),
                }}
              >
                {item}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}


export default CustomNavbar;

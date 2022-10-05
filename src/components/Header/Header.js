import { Link } from "react-router-dom";

import { useState, useEffect } from "react";
import { StyledHeader, StyledNav } from "./Header-styles";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const showMobileMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  const hideMobileMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 800) {
        setScreenWidth(window.innerWidth);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <StyledHeader>
      <div className="navbar-logo">Food Recipies</div>
      {(toggleMenu || screenWidth > 800) && (
        <StyledNav>
          {toggleMenu && (
            <img
              src="/cancel-icon.svg"
              className="styled-header-img"
              alt="Cancel Icon"
              onClick={hideMobileMenu}
            />
          )}
          <ul role="list">
            <li>
              <Link to="/" onClick={hideMobileMenu}>
                Home
              </Link>
            </li>
            <li>
              <a href="#">Selections</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Search</a>
            </li>
          </ul>
        </StyledNav>
      )}

      {!toggleMenu && (
        <img
          src="/hamburger-icon.svg"
          className="styled-header-img"
          alt="Hamburger Icon"
          onClick={showMobileMenu}
        />
      )}
    </StyledHeader>
  );
};

export default Header;

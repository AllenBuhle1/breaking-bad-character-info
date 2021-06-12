import React from "react";
import {
  headerContainer,
  logo,
  header,
  logoAndSearch,
} from "./Header.module.css";
import Logo from "../../img/breakingBadIcon.png";
import Search from "./Search";

const Header = ({ onChange }) => {
  return (
    <div className={headerContainer}>
      <div className={header}>
        <div className={logoAndSearch}>
          <img src={Logo} alt="Logo" width="100px" className={logo} />
          <Search onChange={onChange} />
        </div>
      </div>
    </div>
  );
};

export default Header;

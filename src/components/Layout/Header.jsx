/* eslint-disable react/prop-types */

import "./Header.css";
import HeaderCartButton from "./HeaderCartButton";
import SearchBar from "./SearchBar";

const Header = ({ onShowCart, onSearch }) => {
  return (
    <header className="header">
      <h1>React Alışveriş Sitesi</h1>
      <SearchBar onSearch={onSearch} />
      <HeaderCartButton onShowCart={onShowCart} />
    </header>
  );
};

export default Header;

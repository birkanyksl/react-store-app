/* eslint-disable react/prop-types */
import "./Header.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = ({ onShowCart }) => {
  return (
    <header className="header">
      <h1>React Alışveriş Sitesi</h1>
      <HeaderCartButton onShowCart={onShowCart} />
    </header>
  );
};

export default Header;

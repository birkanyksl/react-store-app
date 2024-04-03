/* eslint-disable react/prop-types */
import "./ProductItem.css";
import Rating from "./Rating";
import Card from "../UI/Card";
import { useContext } from "react";
import { CartContext } from "../../context/CartProvider";

const ProductItem = ({ product }) => {
  const { name, description, img, price } = product;
  const { addItem } = useContext(CartContext);

  return (
    <Card>
      <img src={img} alt="" />
      <h3 className="product-title">{name}</h3>
      <p>{description}</p>
      <div className="product-info">
        <Rating />
        <span className="price">{price}₺</span>
      </div>
      <button className="add-to-cart" onClick={() => addItem(product)}>
        Sepete Ekle
      </button>
    </Card>
  );
};

export default ProductItem;

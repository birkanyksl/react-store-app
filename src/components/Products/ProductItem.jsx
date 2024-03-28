/* eslint-disable react/prop-types */
import "./ProductItem.css";
import Rating from "./Rating";
import Card from "../UI/Card";

const ProductItem = ({ product }) => {
  const { name, description, image, price } = product;

  return (
    <Card>
      <img src={image} alt="" />
      <h3 className="product-title">{name}</h3>
      <p>{description}</p>
      <div className="product-info">
        <Rating />
        <span className="price">{price}₺</span>
      </div>
      <button className="add-to-cart">Sepete Ekle</button>
    </Card>
  );
};

export default ProductItem;

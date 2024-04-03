import "./Products.css";
//import products from "../../productData";
import ProductItem from "./ProductItem";
import { useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);

  const productList = products.map((product) => (
    <ProductItem key={product.id} product={product} />
  ));

  const fetchProductsHandler = async () => {
    const response = await fetch(
      "https://my-pos-application-api.onrender.com/api/products/get-all"
    );

    const data = await response.json();

    const newData = data.map((item) => {
      return {
        id: item._id,
        name: item.title,
        amount: 1,
        ...item,
      };
    });
    setProducts(newData);
  };

  return (
    <main className="products-wrapper">
      <ul className="products">{productList}</ul>
      <button className="button" onClick={fetchProductsHandler}>
        Fetch Products
      </button>
    </main>
  );
};

export default Products;

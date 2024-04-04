import "./Products.css";
//import products from "../../productData";
import ProductItem from "./ProductItem";
import { useCallback, useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, SetError] = useState(null);

  function LoadingSpinner() {
    return <div className="spinner"></div>;
  }

  const productList = products.map((product) => (
    <ProductItem key={product.id} product={product} />
  ));

  const fetchProductsHandler = useCallback(async () => {
    setIsLoading(true);
    SetError(null);
    try {
      const response = await fetch(
        "https://api-product-2bfd.onrender.com/myproducts"
      );
      if (response.status !== 200) {
        throw new Error("Something went wrong!");
      }
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
    } catch (error) {
      SetError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchProductsHandler();
  }, [fetchProductsHandler]);

  let content = <p>Found no products!</p>;

  if (products.length > 0) {
    content = productList;
  }
  if (error) {
    content = <p>{error}</p>;
  }
  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <main className="products-wrapper">
      <ul className="products">{content}</ul>
    </main>
  );
};

export default Products;

import { useEffect, useState } from "react";
import { productList } from "../services/productServices";
import ErrorToast from "./ErrorToast";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    getProductsList();
  }, []);

  const getProductsList = async () => {
    try {
      let productsList = await productList(10);
      setProducts(productsList);
    } catch (error) {
      setErrorMessage(error.message);
      setShowError(true);
    }
  };

  return (
    <>
      <h1>Products List</h1>
      <div>
        {products.map((p) => (
          <p key={p.id}>{p.title}</p>
        ))}
      </div>
      <div>
        {showError && (
          <ErrorToast
            message={errorMessage}
            show={showError}
            onClose={() => setShowError(false)}
          />
        )}
      </div>
    </>
  );
};

export default Products;

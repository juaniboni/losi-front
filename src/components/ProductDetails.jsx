import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./ProductDetails.css";
import Footer from "./Footer";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartReducer";

const ProductDetails = ({ toggleCart }) => {
  const [productDetails, setProductDetails] = useState({});
  const [productStocks, setProductStocks] = useState({});
  const [selectedSize, setSelectedSize] = useState(""); // State to store the selected size
  const { id } = useParams();
  const dispatch = useDispatch();

  // Scroll al principio cuando la página se carga
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const handleAddToCart = () => {
    if (
      productDetails.sizes &&
      productDetails.sizes.length > 0 &&
      !selectedSize
    ) {
      // Inform the user to select a size before adding to the cart
      alert("Please select a size before adding to the cart.");
      return;
    }

    // Create a new object representing the product with the selected size
    const productToAdd = {
      ...productDetails,
      selectedSize: selectedSize,
      // sizeId: id.selectedSize
    };

    dispatch(addToCart(productToAdd));
    toggleCart();
  };

  const fetchProductDetails = async (productId) => {
    try {
      const response = await axios.get(
        `http://losi-back-deploy-two.vercel.app/products/${productId}`
      );
      console.log(response.data);
      setProductDetails(response.data);
    } catch (error) {
      console.error("Error fetching product details:", error);
    }
  };

  const fetchProductStock = async (productId) => {
    try {
      const response = await axios.get(
        `http://losi-back-deploy-two.vercel.app/stock/${productId}`
      );
      console.log(response.data);
      setProductStocks(response.data);
    } catch (error) {
      console.error("Error fetching product details:", error);
    }
  };

  useEffect(() => {
    fetchProductDetails(id);
    fetchProductStock(id);
  }, [id]);

  return (
    <div>
      <div className="products-details-container">
        <div className="products-details">
          <h2>{productDetails.name}</h2>
          <p>Price: ${productDetails.price}</p>
          <p>{productDetails.description}</p>
          {productDetails.sizes && (
            <div>
              <p>Available Sizes:</p>
              <div className="size-buttons">
                {productDetails.sizes.map((size) => (
                  <div key={size.id} className="size-button-wrapper">
                    <button
                      className={selectedSize === size.size ? "selected" : ""}
                      onClick={() => handleSizeClick(size.size)}
                    >
                      {size.size}
                    </button>

                    {selectedSize === size.size && (
                      <p className="stock-number">
                        {
                          productStocks.find(
                            (stock) => stock.sizeId === size.id
                          )?.stock
                        }{" "}
                        - remaining in stock
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
          <button className="cart-button" onClick={handleAddToCart}>
            Add to cart
          </button>
        </div>
        <div className="products-image">
          {productDetails && productDetails.photo && (
            <img
              src={
                productDetails.photo.startsWith("https")
                  ? productDetails.photo
                  : `${import.meta.env.VITE_API_URL}/stock/${productId}`
              }
              alt={productDetails.name}
            />
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetails;

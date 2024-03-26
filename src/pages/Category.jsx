import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Category.css";
import FeaturedItem from "../components/FeaturedItem";
import { Link, useParams } from "react-router-dom";
import Footer from "../components/Footer";

const Category = () => {
  const [category, setCategory] = useState([]);
  const { categoryName } = useParams();

  useEffect(() => {
    console.log("categories name:", categoryName);
    const fetchCategory = async () => {
      try {
        const response = await axios.get(
          import.meta.env.VITE_API_URL + `category/${categoryName}`
        );
        setCategory(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching category:", error);
      }
    };

    fetchCategory();
  }, [categoryName]);

  return (
    <div>
      <h2 className="category-text">
        {categoryName &&
          categoryName.charAt(0).toUpperCase() + categoryName.slice(1)}
      </h2>

      <div className="category-container">
        {category.map((product) => (
          <div key={product.id} className="category-item ">
            <Link to={`/product/${product.id}`}>
              <FeaturedItem
                key={product.id}
                imageSrc={
                  product.photo.startsWith("https")
                    ? product.photo
                    : `${import.meta.env.VITE_API_URL}/${product.photo}`
                }
                description={`${product.name}\n$${product.price}`}
              />
            </Link>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Category;

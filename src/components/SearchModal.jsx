import React, { useState } from "react";
import axios from "axios";
import "./SearchModal.css";

const SearchModal = ({ onClose }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const searcher = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/products/search?search=${searchTerm}`
      );
      setSearchResults(response.data);
    } catch (error) {
      console.error("Error searching products:", error);
    }
  };

  return (
    <div className="search-modal-overlay" onClick={onClose}>
      <div
        className="search-modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <input
          className="input-modal"
          type="text"
          value={searchTerm}
          onChange={searcher}
          autoFocus
        />
        <button className="modal-button" onClick={handleSearch}>
          Search
        </button>
        <div className="search-results">
          <ul className="product-list">
            {searchResults.map((product) => (
              <div key={product.id} className="product-item">
                <a className="product-link" href={`/product/${product.id}`}>
                  <li className="product-item" key={product.id}>
                    {product.name}
                    <div className="products-image">
                      <img src={product.photo} />
                    </div>
                  </li>
                </a>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;

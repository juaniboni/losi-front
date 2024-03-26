import React from "react";

const FeaturedItem = ({
  imageSrc,
  FeaturedLink,
  FeaturedName,
  description,
}) => {
  return (
    <div className="featured-item">
      <a className="featured-categories" href={FeaturedLink}>
        <img src={imageSrc} alt={FeaturedName} />
      </a>
      <div className="additional-text">{description}</div>
    </div>
  );
};

export default FeaturedItem;

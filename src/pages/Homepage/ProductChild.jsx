import React from "react";
import "../../pages/Homepage/Product-section.css";

const ProductChild = ({ name, description, price, price2, imgUrl }) => {
  return (
    <div className="main">
      <img src={imgUrl} alt="" />
      <div>
        <h2>{name}</h2>
        <p>{description}</p>
        <span className="h3">{price}</span>
        <span className="sideSpan">{price2}</span>
      </div>
    </div>
  );
};

export default ProductChild;

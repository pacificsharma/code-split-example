import React from "react";
import "./Products.css";

export default function Products() {
  const handleClick = (e) => {
    // Clumsy page navigation
    window.location.href = "https://sjbt0.csb.app/product-details";
  };

  return (
    <div className="Products">
      <h1>Products page on mobile</h1>
      <ul onClick={handleClick}>
        <li>Product 1</li>
        <li>Product 2</li>
        <li>Product 3</li>
        <li>Product 4</li>
        <li>Product 5</li>
      </ul>
    </div>
  );
}

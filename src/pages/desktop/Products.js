import React from "react";
import ProductDescription from "../../components/desktop/ProductDescription";

import "./Products.css";

export default function Products() {
  return (
    <div className="Products">
      <h1>Products page on desktop</h1>
      <ul>
        <li>
          <strong>Product 1</strong>
          <ProductDescription product="Product 1" />
        </li>
        <li>
          <strong>Product 2</strong>
          <ProductDescription product="Product 2" />
        </li>
        <li>
          <strong>Product 3</strong>
          <ProductDescription product="Product 3" />
        </li>
        <li>
          <strong>Product 4</strong>
          <ProductDescription product="Product 4" />
        </li>
        <li>
          <strong>Product 5</strong>
          <ProductDescription product="Product 5" />
        </li>
      </ul>
    </div>
  );
}

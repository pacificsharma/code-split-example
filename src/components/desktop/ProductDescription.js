import React from "react";
import "./ProductDescription.css";

export default function ProductDescription({ product }) {
  return (
    <span className="ProductDescription">
      This is a product desciption of <strong>{product}</strong>.
    </span>
  );
}

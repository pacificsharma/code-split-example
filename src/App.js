import React from "react";
import Import from "./Import";
import Footer from "./components/common/Footer";

import "./styles.css";

export default function App() {
  // Naive way of working with URL paths
  // You should probably use some kind of Router
  const pageName = window.location.pathname.replace("/", "");
  let page = null;

  // Root page
  if (pageName === "") {
    page = (
      <Import
        touch={() => import("./pages/touch/Products")}
        desktop={() => import("./pages/desktop/Products")}
      >
        {(Products) => <Products />}
      </Import>
    );
    // Product details page on mobile
  } else if (pageName === "product-details") {
    page = (
      <Import
        touch={() => import("./pages/touch/ProductDetails")}
        // No ProductDetails on desktop since it doesn't exist
      >
        {(ProductDetails) => <ProductDetails />}
      </Import>
    );
  }

  return (
    <div className="App">
      {page}
      <Footer />
    </div>
  );
}

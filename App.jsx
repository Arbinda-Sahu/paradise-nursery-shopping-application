import React, { useState } from "react";
import "./App.css";
import ProductList from "./components/ProductList";

function App() {
  const [showProducts, setShowProducts] = useState(false);

  return (
    <div>
      {!showProducts ? (
        <div className="landing-page">
          <div className="content">
            <h1>Paradise Nursery</h1>
            <p>Welcome to Paradise Nursery Shopping Application</p>

            <button onClick={() => setShowProducts(true)}>
              Get Started
            </button>
          </div>
        </div>
      ) : (
        <ProductList />
      )}
    </div>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import AdminDetails from "../AdminDetails/AdminDetails";

const Manage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://sleepy-stream-34221.herkuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [products]);

  return (
    <div className="container">
      <div className="row">
        <AdminDetails products={products} />
      </div>
    </div>
  );
};

export default Manage;

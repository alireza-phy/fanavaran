import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../../components/productCard";

function Home() {
  const products = useSelector((state) => state.products.products);

  return (
    <div className="w-full mx-auto">
      <div className="flex flex-wrap gap-8 justify-around w-fit">
        {products?.map((product) => (
          <div key={product.id}>
          <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;

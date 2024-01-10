import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import ProductCard from "../../components/productCard";

function SubCategory() {
  const [subCategory, setSubCategory] = useState([]);
  const products = useSelector((state) => state.products.products);
  const location = useLocation();

  useEffect(() => {
    setSubCategory(
      products.filter(
        (item) =>
          item.catName === location?.pathname?.split("/")?.[1] &&
          item.subCatName === location?.pathname?.split("/")?.[2]
      )
    );
  }, [products, location]);

  return (
    <div className="w-full mx-auto">
      <div className="flex flex-wrap gap-8 justify-around w-fit">
        {subCategory?.map((product) => (
          <div key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SubCategory;

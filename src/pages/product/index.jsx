import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../redux/features/cart.slice";

function Product() {
  const product = useSelector((state) => state.products.selectedProduct);
  const item = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ item: product, count: 1 }));
  };
  console.log(item);
  return (
    <div className="flex flex-col justify-center items-center gap-8">
      <div className="w-[360px] h-[430px] p-4 flex flex-col gap-2 justify-between">
        <img
          src={product.imgUrl}
          width={160}
          className="mx-auto rounded-lg"
          alt={product.name}
        />
        <h2 className="text-center text-text-primary font-semibold">
          {product.name}
        </h2>
        <div className="flex flex-col gap-2 text-text-secondary text-md">
          <div className="flex gap-2 justify-between">
            <span className="text-right font-semibold">نام برند:</span>
            <span className="text-right">{product.brand}</span>
          </div>
          <div className="flex gap-2 justify-between">
            <span className="text-right font-semibold">امتیاز کاربران:</span>
            <span className="text-right">{product.score}</span>
          </div>
          <div className="flex gap-2 justify-between">
            <span className="text-right font-semibold">قیمت (تومان):</span>
            <span className="text-right">{product.price}</span>
          </div>
        </div>
      </div>
      <button
        type="button"
        className="w-full rounded-md px-4 py-2 bg-primary text-sm font-normal text-white hover:bg-secondary w-1/2 max-w-[360px]"
        onClick={handleAddToCart}
      >
        افزودن به سبد خرید
      </button>
    </div>
  );
}

export default Product;

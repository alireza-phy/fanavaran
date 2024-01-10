import { useDispatch } from "react-redux";
import { selectProduct } from "../../redux/features/product.slice";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <Link
      onClick={() => dispatch(selectProduct(product))}
      to={`/${product.catName}/${product.subCatName}/id=${product.id}`}
    >
      <div className="w-[320px] h-[420px] rounded p-4 border border-primary flex flex-col gap-2 justify-between hover:w-[330px] hover:h-[430px] hover:bg-header cursor-pointer">
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
    </Link>
  );
};

export default ProductCard;

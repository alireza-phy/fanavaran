import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const CategoryCard = ({ data, selectFunction }) => {
  const dispatch = useDispatch();
  return (
    <Link onClick={() => dispatch(selectFunction(data))} to={`${data.name}`}>
      <div className="w-[320px] h-[420px] rounded p-4 border border-primary flex flex-col gap-2 justify-between hover:w-[330px] hover:h-[430px] hover:bg-header cursor-pointer">
        <img
          src={data.imgUrl}
          width={240}
          className="mx-auto rounded-lg"
          alt={data.name}
        />
        <h2 className="text-center text-text-primary text-xl font-semibold">
          {data.nameFa}
        </h2>
        {/* <div className="flex gap-4 justify-between">
          <button
            type="button"
            className="w-full rounded-md px-4 py-2 bg-primary text-sm font-normal text-white hover:bg-secondary w-1/2 max-w-[360px]"
          >
            ویرایش
          </button>
          <button
            type="button"
            className="w-full rounded-md px-4 py-2 bg-primary text-sm font-normal text-white hover:bg-secondary w-1/2 max-w-[360px]"
          >
            حذف
          </button>
        </div> */}
      </div>
    </Link>
  );
};

export default CategoryCard;

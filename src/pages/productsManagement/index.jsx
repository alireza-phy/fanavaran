import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import ProductCard from "../../components/productCard";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import Input from "../../components/InputComponent";
import { addNewProduct } from "../../redux/features/product.slice";

const schema = yup.object({
  name: yup.string().required("نام محصول را وارد کنید"),
  brand: yup.string().required("نام برند را وارد کنید"),
  score: yup.number().optional(),
  price: yup.number().required("قیمت محصول را وارد کنید"),
});

function ProductsManagement() {
  const [product, setProduct] = useState([]);
  const [category, setCategory] = useState({});
  const [subCategory, setSubCategory] = useState([]);
  const products = useSelector((state) => state.products.products);
  const subCategories = useSelector(
    (state) => state.subCategories.subCategories
  );
  const categories = useSelector((state) => state.categories.categories);
  const location = useLocation();
  const dispatch = useDispatch();
  const [addNew, setAddNew] = useState(false);
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  console.log(category);
  console.log(subCategory);

  const handleSubmitForm = async (data) => {
    console.log(data);
    const formData = {
      name: data?.name,
      brand: data?.brand,
      score: data?.score || 3,
      price: data?.price,
      catId: category?.id,
      catName: category?.name,
      subCatId: subCategory?.id,
      subCatName: subCategory?.name,
      imgUrl:
        "https://static.vecteezy.com/system/resources/previews/003/240/508/original/beautiful-purple-daisy-flower-isolated-on-white-background-vector.jpg",
      id: Math.floor(Math.random() * 10000),
    };
    dispatch(addNewProduct(formData));
    reset();
    setAddNew(false);
  };

  useEffect(() => {
    setProduct(
      products.filter(
        (item) => item.subCatName === location?.pathname?.split("/")?.[3]
      )
    );
    setSubCategory(
      subCategories.filter(
        (item) => item.name === location?.pathname?.split("/")?.[3]
      )?.[0]
    );
    setCategory(
      categories.filter(
        (item) => item.name === location?.pathname?.split("/")?.[2]
      )?.[0]
    );
  }, [products, location]);

  return (
    <div className="w-full mx-auto">
      <div className="flex flex-wrap gap-8 justify-around w-fit">
        {product?.map((product) => (
          <div key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
        {addNew ? (
          <form onSubmit={handleSubmit(handleSubmitForm)}>
            <div className="w-[320px] h-[420px] rounded p-4 border border-primary flex flex-col gap-2 justify-around items-center">
              <div className="flex flex-col gap-2 justify-between w-full">
                <span> نام محصول </span>
                <Controller
                  name="name"
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      type="text"
                      errors={errors}
                      fieldName={field.name}
                    />
                  )}
                />
              </div>
              <div className="flex flex-col gap-2 justify-between w-full">
                <span> نام برند </span>
                <Controller
                  name="brand"
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      type="text"
                      errors={errors}
                      fieldName={field.name}
                    />
                  )}
                />
              </div>
              <div className="flex flex-col gap-2 justify-between w-full">
                <span> امتیاز کاربران </span>
                <Controller
                  name="score"
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      type="number"
                      errors={errors}
                      fieldName={field.name}
                    />
                  )}
                />
              </div>
              <div className="flex flex-col gap-2 justify-between w-full">
                <span> قیمت </span>
                <Controller
                  name="price"
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      type="number"
                      errors={errors}
                      fieldName={field.name}
                    />
                  )}
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-md px-4 py-2 bg-primary text-sm font-normal text-white hover:bg-secondary w-1/2 max-w-[360px]"
              >
                ثبت
              </button>
            </div>
          </form>
        ) : (
          <div
            onClick={() => setAddNew(true)}
            className="w-[320px] h-[420px] rounded p-4 border border-primary flex flex-col gap-2 justify-center items-center hover:w-[330px] hover:h-[430px] hover:bg-header cursor-pointer"
          >
            <p className="text-center text-text-primary text-[80px] font-bold">
              +
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductsManagement;

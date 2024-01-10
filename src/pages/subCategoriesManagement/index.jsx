import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  addNewSubCategory,
  selectSubcategory,
} from "../../redux/features/subCategory.slice";
import CategoryCard from "../../components/categoryCard";
import Input from "../../components/InputComponent";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";

const schema = yup.object({
  name: yup.string().required("اجباری"),
  nameFa: yup.string().required("اجباری"),
});

function SubCategoriesManagement() {
  const dispatch = useDispatch();
  const [subCategory, setSubCategory] = useState([]);
  const [category, setCategory] = useState({});
  const subCategories = useSelector(
    (state) => state.subCategories.subCategories
  );
  const categories = useSelector((state) => state.categories.categories);
  const location = useLocation();
  const [addNew, setAddNew] = useState(false);
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleSubmitForm = async (data) => {
    const formData = {
      name: data?.name,
      nameFa: data?.nameFa,
      catId: category?.id,
      catName: category?.name,
      imgUrl:
        "https://static.vecteezy.com/system/resources/previews/003/240/508/original/beautiful-purple-daisy-flower-isolated-on-white-background-vector.jpg",
      id: Math.floor(Math.random() * 10000),
    };
    const isExist = subCategory.some(
      (item) => item.name === data?.name || item?.nameFa === data?.nameFa
    );
    if (isExist) {
      console.log("اطلاعات تکراری است");
    } else {
      dispatch(addNewSubCategory(formData));
      reset();
      setAddNew(false);
    }
  };

  useEffect(() => {
    setSubCategory(
      subCategories.filter(
        (item) => item.catName === location?.pathname?.split("/")?.[2]
      )
    );
    setCategory(
      categories.filter(
        (item) => item.name === location?.pathname?.split("/")?.[2]
      )?.[0]
    );
  }, [subCategories, categories, location]);

  return (
    <div className="w-full mx-auto">
      <div className="flex flex-wrap gap-8 justify-around w-fit">
        {subCategory?.map((subcategory) => (
          <div key={subcategory.id}>
            <CategoryCard
              data={subcategory}
              selectFunction={selectSubcategory}
            />
          </div>
        ))}
        {addNew ? (
          <form onSubmit={handleSubmit(handleSubmitForm)}>
            <div className="w-[320px] h-[420px] rounded p-4 border border-primary flex flex-col gap-4 justify-around items-center">
              <div className="flex flex-col gap-2 justify-between w-full">
                <span> نام فارسی دسته </span>
                <Controller
                  name="nameFa"
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
                <span> نام انگلیسی دسته </span>
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

export default SubCategoriesManagement;

import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export function ContentLinks(key) {
  const allCategories = useSelector((state) => state.categories.categories);
  const allSubCategories = useSelector(
    (state) => state.subCategories.subCategories
  );
  const [data, setData] = useState({});

  useEffect(() => {
    setData({});
    const tempData = {};

    allCategories.forEach((category) => {
      tempData[category.name] = {
        title: `تمام محصولات ${category.nameFa}`,
        mainLink: `/${category.name}`,
        links: [],
      };
    });

    allSubCategories.forEach((subCategory) => {
      const categoryKey = subCategory.catName;
      if (tempData[categoryKey]) {
        tempData[categoryKey].links.push({
          title: subCategory.nameFa,
          link: `/${subCategory.catName}/${subCategory.name}`,
        });
      }
    });

    setData(tempData);
  }, [allCategories, allSubCategories]);
  return data[`${key}`];
}

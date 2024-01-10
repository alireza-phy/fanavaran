import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export function ContentLinks() {
  const allCategories = useSelector((state) => state.categories.categories);
  const allSubCategories = useSelector(
    (state) => state.subCategories.subCategories
  );
  const [data, setData] = useState([]);

  useEffect(() => {
    setData([]);
    const tempData = [];
    allCategories.map((category) =>
      tempData.push({
        title: category.nameFa,
        mainLink: `/${category?.name}`,
        links: [],
      })
    );

    allSubCategories.map((subCategory) =>
      tempData.forEach((item, index) => {
        if (item.mainLink === `/${subCategory.catName}`) {
          tempData[index] = {
            ...item,
            links: [
              ...item.links,
              {
                title: subCategory.nameFa,
                link: `/${subCategory.catName}/${subCategory.name}`,
              },
            ],
          };
        }
      })
    );
    tempData.map((item) => {
      return {
        ...item,
        links: item.links.unshift({
          title: "همه محصولات",
          link: item.mainLink,
        }),
      };
    });
    setData(tempData);
  }, [allCategories, allSubCategories]);

  return data;
}

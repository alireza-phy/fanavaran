import Content from "./content";
import { ContentLinks } from "./contentLinks";
import { useSelector } from "react-redux";

export function Items() {
  const allCategories = useSelector((state) => state.categories.categories);
  const tempData = [];
  allCategories.map((category) =>
    tempData.push({
      name: <div className={"flex gap-1 items-center"}>{category.nameFa}</div>,
      content: (setShowMegaMenu) => (
        <Content
          data={ContentLinks(`${category.name}`)}
          setShowMegaMenu={setShowMegaMenu}
        />
      ),
      slug: `${category.name}`,
    })
  );
  console.log(tempData);
  return tempData;
}

import Content from "./content";
import { ContentLinks } from "./contentLinks";

export const Items = [
  {
    name: <div className={"flex gap-1 items-center"}>کالای دیجیتال</div>,
    content: (setShowMegaMenu) => (
      <Content
        data={ContentLinks?.DigitalProducts}
        setShowMegaMenu={setShowMegaMenu}
      />
    ),
    slug: "DigitalProducts",
  },
  {
    name: <div className={"flex gap-1 items-center"}>خانه و آشپزخانه</div>,
    content: (setShowMegaMenu) => (
      <Content
        data={ContentLinks?.HomeAndKitchen}
        setShowMegaMenu={setShowMegaMenu}
      />
    ),
    slug: "HomeAndKitchen",
  },
  {
    name: <div className={"flex gap-1 items-center"}>مد و پوشاک</div>,
    content: (setShowMegaMenu) => (
      <Content
        data={ContentLinks?.FashionAndClothing}
        setShowMegaMenu={setShowMegaMenu}
      />
    ),
    slug: "FashionAndClothing",
  },
];

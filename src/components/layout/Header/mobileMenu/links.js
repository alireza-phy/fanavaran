import { HomeIcon, GiftIcon } from "@heroicons/react/24/outline";
export const Links = [
  { title: "خانه", link: "/", icon: <HomeIcon width={24} color="#00058a" /> },
  {
    title: "دسته بندی ها",
    onClick: true,
    icon: <GiftIcon width={24} color="#00058a" />,
  },
];
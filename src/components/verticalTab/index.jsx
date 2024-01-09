import clsx from "clsx";
import React from "react";
import { useState } from "react";

export default function VerticalTab({ tabs, setShowMegaMenu }) {
  const [openTab, setOpenTab] = useState(tabs[1].slug);

  const selectTab = (slug) => {
    setOpenTab(slug);
  };

  return (
    <div className="w-max flex mt-2  border-secondary">
      <ul className="flex flex-col space-x-reverse w-full z-10 bg-menu rounded-r-sm border-r border-y border-secondary p-4 text-md font-semibold">
        {tabs.map((tab, index) => (
          <React.Fragment key={`verticalTab${index}`}>
            <li
              onMouseOver={() => selectTab(tab?.slug)}
              className={clsx(
                tab?.slug === openTab
                  ? "rounded-md bg-white p-1"
                  : "hover:text-text-secondary",
                `p-2 cursor-pointer whitespace-nowrap text-text-primary`
              )}
            >
              {tab?.name}
            </li>
          </React.Fragment>
        ))}
      </ul>
      <div
        className={clsx(
          "rounded-l-sm bg-menu p-4 w-max min-w-[300px] overflow-y-auto border-y border-l border-secondary shadow-2 text-md"
        )}
      >
        {tabs.filter((item) => item.slug === openTab)?.[0]?.content(setShowMegaMenu)}
      </div>
    </div>
  );
}

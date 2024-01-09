import React, { useState } from "react";
import MegaMenu from "./megaMenu";
import { Bars3Icon } from "@heroicons/react/24/outline";
import clsx from "clsx";
const DesktopMenu = () => {
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  return (
    <div className={"shadow-lg py-4 w-full overflow-x-auto hidden md:block"}>
      <div>
        <nav>
          <ul className={"flex items-center gap-8 w-full"}>
            <li
              onMouseEnter={() => setShowMegaMenu(true)}
              onMouseLeave={() => setShowMegaMenu(false)}
              className={`z-40 px-4 text-main-text-primary`}
            >
              <div>
                <span
                  className={
                    "flex w-full items-center gap-1 text-md font-bold cursor-pointer hover:text-primary"
                  }
                >
                  <Bars3Icon width={24} />
                  دسته بندی محصولات
                </span>
                {showMegaMenu && (
                  <MegaMenu
                    setShowMegaMenu={setShowMegaMenu}
                    showMegaMenu={showMegaMenu}
                  />
                )}
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default DesktopMenu;

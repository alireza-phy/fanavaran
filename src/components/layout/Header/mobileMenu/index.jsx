import React, { useState } from "react";
import { Links } from "../mobileMenu/links";
import Sidebar from "../../../Sidebar";

const MobileMenu = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  return (
    <>
      <div
        className={
          "fixed bottom-0 w-full h-[72px] z-50 bg-white block md:hidden"
        }
      >
        {/***menu links***/}
        <div
          className={
            "h-[72px] flex justify-between items-center relative z-50 gap-2"
          }
        >
          <div className={"flex justify-around items-center w-full"}>
            {Links?.map((item, index) => (
              <div
                onClick={() => {
                  item?.onClick && setOpenSidebar(!openSidebar);
                }}
                key={`headerMobileRight${index}`}
                className={`flex flex-col items-center justify-center gap-1 font-medium cursor-pointer`}
              >
                {item?.icon}
                {item?.link ? (
                  <a href={item?.link} className="font-bold text-md">{item?.title}</a>
                ) : (
                  <span className="font-bold text-md">{item?.title}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <Sidebar isOpen={openSidebar} setIsOpen={setOpenSidebar} />
    </>
  );
};

export default MobileMenu;

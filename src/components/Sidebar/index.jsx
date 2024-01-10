import React from "react";
import { ContentLinks } from "./catData";
import clsx from "clsx";
import Accordion from "../accordion";
import { Link } from "react-router-dom";

const Sidebar = ({ isOpen, setIsOpen }) => {
  return (
    <div
      className={clsx(
        "transition-all",
        isOpen
          ? "fixed top-0 left-0 bottom-0 right-0 bg-primary bg-opacity-10 opacity-100 z-[50]"
          : "opacity-0 z-[-1]"
      )}
      onClick={() => setIsOpen(false)}
    >
      <div
        className={clsx(
          isOpen
            ? `fixed overflow-y-auto top-0 right-0 bottom-0 z-[51] h-full border-l border-customGray bg-white transition-all py-3 min-w-[256px] max-w-[256px] visible opacity-100`
            : "h-0 min-w-[0px] max-w-[0px] opacity-0 z-[-1] hidden"
        )}
      >
        <Accordion items={ContentLinks()} line={false} className={"px-3"} />
      </div>
    </div>
  );
};

export default Sidebar;

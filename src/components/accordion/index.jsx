import clsx from "clsx";
import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

export const AccordionItem = ({ title, content, isOpen, setIsOpen }) => {
  const toggle = (title) => {
    title === isOpen ? setIsOpen(false) : setIsOpen(title);
  };

  return (
    <div>
      <div
        onClick={(e) => {
          e.stopPropagation();
          toggle(title);
        }}
        className="flex p-3 cursor-pointer justify-between items-center"
      >
        <h3
          className={clsx(
            isOpen === title && "text-primary",
            `font-bold hover:text-secondary`
          )}
        >
          {title}
        </h3>
        <div className={clsx(isOpen === title && "rotate-180")}>
          <ChevronDownIcon width={20} color={"#161C24"} />
        </div>
      </div>
      <div
        className={clsx(
          isOpen === title
            ? "h-auto opacity-1 pb-3 overflow-auto"
            : "h-0 overflow-hidden opacity-0 pb-0",
          "transition-all ease-linear px-3 text-primary flex flex-col gap-2"
        )}
      >
        {content.map((item) => (
          <a href={item.link}> {item.title}</a>
        ))}
      </div>
    </div>
  );
};

const Accordion = ({ items = [], className }) => {
  console.log(items);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      id="accrodion"
      className={clsx(
        "bg-white rounded-2xl ",
        className,
      )}
    >
      {items.map((item, idx) => (
        <AccordionItem
          key={`${item.title}-${idx}`}
          title={item.title}
          content={item.links}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      ))}
    </div>
  );
};

export default Accordion;

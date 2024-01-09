import React, { useState, useRef, useEffect } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";

function Select(props) {
  const {
    placeholder,
    selectOptions,
    onChange,
    fieldName,
    errors,
    value,
    readonly = false,
  } = props;
  const [openDropDown, setOpenDropDown] = useState(false);

  const [selectedOption, setSelectedOption] = useState({
    value: "",
    label: placeholder,
  });

  const selectRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target)
      ) {
        setOpenDropDown(false);
      }
    };
    // Attach the event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    value &&
      setSelectedOption(
        selectOptions.filter((item) => item?.value === value)[0]
      );
  }, [value]);

  return (
    <div className="relative w-full" ref={selectRef}>
      <button
        onClick={() => !readonly && setOpenDropDown(!openDropDown)}
        type="button"
        className={clsx(
          "w-full rounded-md px-4 py-2 bg-main-primary text-sm font-normal text-main-text-primary",
          [
            {
              "text-main-text-secondary": readonly,
            },
          ]
        )}
      >
        <div className="flex gap-4 text-xl w-full items-center justify-between">
          <p>{selectedOption?.label}</p>
          {!readonly && (
            <ChevronDownIcon className="h-4 w-4 text-main-border-primary stroke-2" />
          )}
        </div>
      </button>
      {openDropDown && (
        <div className="origin-top-right absolute right-0 w-full rounded-md bg-main-primary ring-1 ring-main-border-primary ring-opacity-5 z-10">
          <ul className="py-1 cursor-pointer">
            {selectOptions?.length > 0 ? (
              selectOptions?.map((option) => (
                <li
                  key={option?.value}
                  className="flex flex-end px-4 py-2 text-xl text-main-text-primary hover:bg-main-secondary rounded m-1"
                  onClick={() => {
                    setSelectedOption(option);
                    setOpenDropDown(false);
                    onChange && fieldName && onChange(option.value, fieldName);
                  }}
                >
                  {option?.label}
                </li>
              ))
            ) : (
              <div className="w-full flex justify-center items-center text-main-text-primary py-2">
                <p> اطلاعاتی وجود ندارد</p>
              </div>
            )}
          </ul>
        </div>
      )}
      {fieldName && errors?.[fieldName] && (
        <span className="text-main-text-primary text-sm pl-1">
          * {errors?.[fieldName]?.message}
        </span>
      )}
    </div>
  );
}

export default Select;

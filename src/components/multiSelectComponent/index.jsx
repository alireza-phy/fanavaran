import React, { useState, useRef, useEffect } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Checkbox from "../checkboxComponent";
import clsx from "clsx";

function MultiSelect(props) {
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
  const [selectedOptions, setSelectedOptions] = useState([]);
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

  const toggleOption = (option) => {
    const optionIndex = selectedOptions.findIndex(
      (selectedOption) => selectedOption.value === option.value
    );

    let updatedSelectedOptions;

    if (optionIndex === -1) {
      // Option not selected, add it to the selectedOptions
      updatedSelectedOptions = [...selectedOptions, option];
    } else {
      // Option already selected, remove it from the selectedOptions
      updatedSelectedOptions = selectedOptions.filter(
        (selectedOption) => selectedOption.value !== option.value
      );
    }

    setSelectedOptions(updatedSelectedOptions);

    // Update field values directly here
    const tempArray = updatedSelectedOptions.map(
      (item) => item.value
    );
    fieldName && onChange && onChange(tempArray, fieldName);
  };

  useEffect(() => {
    let initialSelectedOptions = [];

    if (value) {
      initialSelectedOptions = selectOptions.filter((item) =>
        value.includes(item.value)
      );
    }
    setSelectedOptions(initialSelectedOptions);
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
          <p>
            {selectedOptions.length === 0
              ? placeholder
              : selectedOptions.map((option) => option.label).join(", ")}
          </p>
          {!readonly && (
            <ChevronDownIcon className="h-4 w-4 text-main-border-primary stroke-2" />
          )}
        </div>
      </button>
      {openDropDown && (
        <div className="origin-top-right absolute right-0 w-full rounded-md bg-main-primary ring-1 ring-main-border-primary ring-opacity-5 z-10">
          <ul className="py-1 cursor-pointer flex flex-col">
            {selectOptions.length > 0 ? (
              selectOptions?.map((option, index) => (
                <div key={option.value}>
                  <li
                    className={`flex-shrink-0 flex justify-between px-4 py-2 hover:bg-main-secondary rounded m-1 gap-1`}
                    onClick={() => toggleOption(option)}
                  >
                    <p className="text-right text-xl text-main-text-primary w-max-[100px]">
                      {option.label}
                    </p>
                    <Checkbox
                      checked={selectedOptions.some(
                        (selectedOption) =>
                          selectedOption.value === option.value
                      )}
                      onChange={() => toggleOption(option)}
                    />
                  </li>
                  {index !== selectOptions?.length - 1 && (
                    <div className="flex-grow border-b border-main-text-primary mx-5" />
                  )}
                </div>
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

export default MultiSelect;

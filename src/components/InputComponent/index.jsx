import clsx from "clsx";
import React from "react";


const Input = (props) => {
  const {
    placeholder,
    type,
    onChange,
    value = "",
    errors,
    fieldName,
    readonly,
  } = props;

  const handleInputType = () => {
    switch (type) {
      case "text":
        return (
          <input
            readOnly={readonly}
            type="text"
            className={clsx(
              "bg-main-primary border-none focus:outline-none rounded-md h-9 w-full p-2 caret-main-text-primary text-main-text-primary",
              [
                {
                  "text-main-text-secondary": readonly,
                },
              ]
            )}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
          />
        );
      case "textarea":
        return (
          <textarea
            readOnly={readonly}
            rows={4}
            className={clsx(
              "bg-main-primary border-none focus:outline-none rounded-md w-full p-2 caret-main-text-primary text-main-text-primary",
              [
                {
                  "text-main-text-secondary": readonly,
                },
              ]
            )}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
          />
        );

      default:
        break;
    }
  };
  return (
    // <div className="flex gap-9 items-start justify-end w-full">
    //   <p className="font-normal text-xxl text-main-text-primary w-48">
    //     {title}
    //   </p>
    <div className="w-full flex flex-col gap-1">
      {handleInputType()}
      {fieldName && errors?.[fieldName] && (
        <span className="text-main-text-primary text-sm pl-1">
          * {errors?.[fieldName]?.message}
        </span>
      )}
    </div>
    // </div>
  );
};

export default Input;

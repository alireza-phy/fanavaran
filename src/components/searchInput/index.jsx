import React, { useEffect, useRef } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const SearchInput = ({
  autofocus,
  onClick,
  onKeyDown,
  placeholder = "",
  className,
  value,
  onChange,
  action,
}) => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div
      className={`rounded-lg py-2 px-2 flex items-center gap-2 ${className}`}
    >
      <div className={"cursor-pointer"} onClick={action}>
        <MagnifyingGlassIcon />
      </div>
      <input
        ref={autofocus ? inputRef : null}
        onClick={onClick}
        onKeyDown={onKeyDown}
        className={"h-full w-full px-2 py-5 focus:outline-none focus-visible:outline-none rounded"}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default SearchInput;

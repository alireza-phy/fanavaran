import React from "react";
import { CheckIcon } from "@heroicons/react/24/outline";

const CustomCheckbox = ({
  checked,
  onChange,
}) => {
  return (
    <div className="flex items-center">
      {/* Checkbox Input */}
      <div
        onClick={() => onChange(!checked)}
        className="w-6 h-6 border border-main-border-primary bg-main-secondary"
      >
        {checked && <CheckIcon className="stroke-[4px] text-yellow" />}
      </div>
    </div>
  );
};

export default CustomCheckbox;

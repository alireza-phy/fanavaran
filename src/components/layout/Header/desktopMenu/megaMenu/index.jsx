import VerticalTab from "../../../../verticalTab";
import { Items } from "./items";

import clsx from "clsx";

const MegaMenu = ({ showMegaMenu, setShowMegaMenu }) => {
  return (
    <div
      className={clsx(
        "w-max absolute z-50 pt-5 rounded-sm transition-all",
        !showMegaMenu && "hidden"
      )}
    >
      <VerticalTab setShowMegaMenu={setShowMegaMenu} tabs={Items} />
    </div>
  );
};

export default MegaMenu;

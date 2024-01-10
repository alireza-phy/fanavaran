import Search from "./Search";
import DesktopMenu from "./desktopMenu";
import MobileMenu from "./mobileMenu";
import LogoImg from "../../../assets/images/entekhab.jpeg";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="sticky z-[2000] bg-header w-full">
      <div className="overflow-x-auto flex items-center justify-between">
        <div className="flex items-center px-4 w-full">
          <Link to={"/"} className="hidden md:block">
            <div className="w-full h-full relative">
              <img
                src={LogoImg}
                alt="logo"
                width={48}
                height={48}
                placeholder="empty"
                loading={"eager"}
              />
            </div>
          </Link>
          <Search />
          <div className="hidden md:block w-full px-3 font-bold text-primary hover:text-secondary">
            <Link to="/management">مدیریت محصولات</Link>
          </div>
        </div>
      </div>
      <MobileMenu />
      <DesktopMenu />
    </header>
  );
};

export default Header;

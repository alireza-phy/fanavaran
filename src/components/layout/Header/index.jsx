import Search from "./Search";
import DesktopMenu from "./desktopMenu";
import MobileMenu from "./mobileMenu";
import LogoImg from "../../../assets/images/entekhab.jpeg"
const Header = () => {
  return (
    <header className="sticky z-[2000] bg-header w-full">
      <div className="overflow-x-auto flex items-center justify-between">
        <div className="flex items-center px-4 w-full">
          <a href={"/"} className="hidden md:block">
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
          </a>
          <Search/>
        </div>
      </div>
      <MobileMenu />
      <DesktopMenu />
    </header>
  );
};

export default Header;

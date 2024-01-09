import React, { useEffect } from "react";
import SearchInput from "../../../../searchInput";

const SearchModal = ({
  handleSearch,
  searchResults,
  searchParam,
  searchValue,
  setShowSearchModal,
  showSearchModal,
}) => {
  const toggle = () => {
    setShowSearchModal && setShowSearchModal(false);
  };

  // useEffect(() => {
  //   const windowlocal = location.pathname;
  //   /**Handles the back navigation */
  //   showSearchModal &&
  //     window.history.pushState({ modalActive: true }, windowlocal);
  //   showSearchModal && window.addEventListener("popstate", toggle);
  //   return () => {
  //     window.removeEventListener("popstate", toggle);
  //   };
  // }, [showSearchModal]);

  return (
    <div className="z-[200] fixed flex w-full h-full md:h-[calc(100%-90px)] top-0 left-0 items-center justify-center md:mt-[90px]">
      <div
        className="absolute inset-0 w-full overflow-x-hidden bg-[rgba(0,0,0,0.7)]"
        onClick={toggle}
      />
      <div className="relative z-[51] w-full md:w-[600px] h-full md:h-max md:max-h-[96%] overflow-hidden md:rounded-lg bg-white md:min-w-5/12">
        <>
          <div
            onClick={() => {
              setShowSearchModal(false);
            }}
            className={
              "absolute top-4 right-4 cursor-pointer border border-black rounded-lg w-[40px] h-[40px] flex items-center justify-center text-2xl md:hidden"
            }
          >
            x
          </div>
          <div className="flex flex-col gap-2 jsutify-between items-center p-2 mb-32 md:my-0 h-full min-h-[30vh] w-full">
            <SearchInput
              autofocus
              className="h-[45px] mt-28 w-full block md:hidden"
              placeholder={"نام محصول یا دسته بندی مورد نظر"}
              value={searchValue}
              onChange={(e) => handleSearch(e.target.value)}
            />
            {searchParam?.length > 2 ? (
              <>
                {searchResults?.tables?.length === 0 &&
                searchResults?.categories?.length === 0 ? (
                  <div className="flex gap-2 justify-center mt-8">
                    <span className="font-bold text-lg">
                      نتیجه ای برای عبارت
                    </span>
                    <span className="font-bold text-lg">
                      &quot; {searchParam} &quot;
                    </span>
                    <span className="font-bold text-lg">یافت نشد</span>
                  </div>
                ) : (
                  <div className="flex flex-col gap-6 w-full justify-between h-max p-4">
                    <div className="flex gap-2 justify-center hidden md:block">
                      <span className="font-bold">نتایج جستجو برای عبارت</span>
                      <span className="font-bold">
                        &quot; {searchParam} &quot;
                      </span>
                    </div>
                    <button className="w-full max-w-sm mx-auto bg-primary" type="button">
                      مشاهده نتایج بیشتر
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className="flex gap-2 justify-center pt-4">
                <span className="font-bold">
                  برای شروع جستجو لازم است بیش از 3 کاراکتر وارد کنید
                </span>
              </div>
            )}
          </div>
        </>
      </div>
    </div>
  );
};

export default SearchModal;

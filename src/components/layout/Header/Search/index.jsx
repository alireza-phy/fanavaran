import SearchInput from "../../../searchInput";
import { useEffect, useMemo, useState } from "react";
// import { toast } from "react-toastify";
// import { searchServiceApi } from "@/apis/services/searchApi";
// import debounce from "lodash.debounce";
import SearchModal from "./searchModal";
import clsx from "clsx";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchParam, setSearchParam] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showSearchModal, setShowSearchModal] = useState(false);

  // const autoCompleteSearch = async (key) => {
  //   setSearchParam(key);
  //   if (key.length > 2) {
  //     try {
  //       const searchResult = await searchServiceApi.autoComplete(key);
  //       setSearchResults(searchResult?.data?.data);
  //       setShowSearchModal(true);
  //     } catch (e) {
  //       toast.error("مشکلی در جستجو بوجود آمده است");
  //     }
  //   } else {
  //     setSearchResults([]);
  //   }
  // };

  // const handleKeyDown = (event) => {
  //   if (event.key === "Enter" && event.target.value.length > 2) {
  //     setShowSearchModal(false);
  //     router.push(`/search?searchparam=${event.target.value}`);
  //   }
  // };

  // const onInputClick = () => {
  //   !showSearchModal &&
  //     (searchParam.length > 2 || display === "mobile") &&
  //     setShowSearchModal(true);
  // };

  // const handleSearch = useMemo((key) => {
  //   setSearchValue(key);
  //   return debounce(autoCompleteSearch, 500);
  // }, []);

  // useEffect(() => {
  //   return () => {
  //     handleSearch.cancel();
  //   };
  // });

  return (
    <div className={clsx(`py-3 shadow-lg md:shadow-none w-full`)}>
      <SearchInput
        // onClick={onInputClick}
        // action={() => router.push(`/search?searchparam=${searchParam}`)}
        // onKeyDown={handleKeyDown}
        className="h-[45px] w-full md:w-[400px]"
        placeholder={"نام محصول یا دسته بندی مورد نظر"}
        value={searchValue}
        // onChange={(e) => handleSearch(e.target.value)}
      />
      {showSearchModal && (
        <SearchModal
          showSearchModal={showSearchModal}
          // handleSearch={handleSearch}
          searchResults={searchResults}
          searchParam={searchParam}
          searchValue={searchValue}
          setShowSearchModal={setShowSearchModal}
        />
      )}
    </div>
  );
};

export default Search;

import React from "react";

const Content = ({ data, setShowMegaMenu }) => {
  return (
    <ul className={"max-h-auto"}>
      <li className={"flex gap-10"}>
        {data?.map((item, index) => (
          <ul className={"flex flex-col"} key={`item${index}`}>
            {item?.mainLink ? (
              <a href={item?.mainLink}>
                <li
                  className={
                    "font-semibold border-r-2 text-text-secondary mb-4 p-1"
                  }
                >
                  <span className="hover:bg-white p-1 rounded-sm">
                    {item?.title}
                  </span>
                </li>
              </a>
            ) : (
              <li className={"p-1 font-semibold border-r-2 text-black mb-4"}>
                {item?.title}
              </li>
            )}
            {item?.links?.map((link, index2) => (
              <a key={`link${index}${index2}`} href={link?.link}>
                <li
                  onClick={() => setShowMegaMenu(false)}
                  className={"mb-4 cursor-pointer w-fit"}
                >
                  <span className="hover:bg-white p-1 rounded-sm">
                    {link?.title}
                  </span>
                </li>
              </a>
            ))}
          </ul>
        ))}
      </li>
    </ul>
  );
};

export default Content;

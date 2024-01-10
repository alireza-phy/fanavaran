import React from "react";
import { Link } from "react-router-dom";

const Content = ({ data, setShowMegaMenu }) => {
  console.log(data);
  return (
    <ul className={"max-h-auto"}>
      <li className={"flex gap-10"}>      
          <ul className={"flex flex-col"}>
            {data?.mainLink ? (
              <Link to={data?.mainLink}>
                <li
                  className={
                    "font-semibold border-r-2 text-text-secondary mb-4 p-1"
                  }
                >
                  <span className="hover:bg-white p-1 rounded-sm">
                    {data?.title}
                  </span>
                </li>
              </Link>
            ) : (
              <li className={"p-1 font-semibold border-r-2 text-black mb-4"}>
                {data?.title}
              </li>
            )}
            {data?.links?.map((link, index) => (
              <Link key={`link${index}`} to={link?.link}>
                <li
                  onClick={() => setShowMegaMenu(false)}
                  className={"mb-4 cursor-pointer w-fit"}
                >
                  <span className="hover:bg-white p-1 rounded-sm">
                    {link?.title}
                  </span>
                </li>
              </Link>
            ))}
          </ul>
      </li>
    </ul>
  );
};

export default Content;

import React from "react";
import Header from "./Header";
// import Footer from "./Footer";

function Layout({ children }) {
  return (
    <main className="relative">
      <Header />
      <div className={"p-4"}>{children}</div>
      {/* <Footer /> */}
    </main>
  );
}

export default Layout;

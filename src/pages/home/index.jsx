import React, { useState } from "react";
import { useSelector } from "react-redux";

function Home() {
  const data = useSelector((state) => state.products);
  console.log(data);
  return <h1>خانه</h1>;
}

export default Home;

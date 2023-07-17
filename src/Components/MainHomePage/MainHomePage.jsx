import React from "react";
import BestRetailer from "../BestRetailer/BestRetailer";
import BestSeller from "../BestSeller/BestSeller";
import FindStore from "../FindStore/FindStore";
import Home from "../Home/Home";
import NewStore from "../NewStore/NewStore";

const MainHomePage = () => {
  return (
    <>
      <Home />
      <FindStore />
      <NewStore />
      <BestSeller />
      <BestRetailer />
      <BestRetailer />
    </>
  );
};

export default MainHomePage;

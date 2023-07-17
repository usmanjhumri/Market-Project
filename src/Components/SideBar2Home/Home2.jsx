import React from "react";
import BevMo from "../Bevmo/BevMo";
import Cheese from "../Cheese/Chees";
import CleanSunday from "../CleanSunday/CleanSunday";
import FreshFruit from "../FreshFruit/FreshFruit";
import FreshVegetable from "../FreshVegetable/FreshVegetable";
import FrozenEntree from "../FrozenEntries/FrozenEntree";
import FrozenSnacks from "../FrozenSnacks/FrozenSnacks";
import Snacks from "../Snacks/Snacks";
import Treat from "../Treat/Treat";

const Home2 = () => {
  return (
    <>
      <BevMo />
      <FreshFruit />
      <FreshVegetable />
      <CleanSunday />
      <Snacks />
      <FrozenSnacks />
      <FrozenEntree />
      <Cheese />
      <Treat />
    </>
  );
};

export default Home2;

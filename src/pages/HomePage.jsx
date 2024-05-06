import React from "react";
import {
  MenProducts,
  WomenProducts,
  KidsProducts,
} from "../components/Products";
import "./HomePage.css";

import { Tabs } from "antd";
const { Items } = Tabs;

// function callback(key) {
//   console.log(key);
// }

const ProductsTab = () => (
  <Tabs>
    <Items tab="Men" key="1">
      <MenProducts />
    </Items>
    <Items tab="Women" key="2">
      <WomenProducts />
    </Items>
    <Items tab="Kids" key="3">
      <KidsProducts />
    </Items>
  </Tabs>
);

const HomePage = () => {
  console.log("fine");
  return (
    <div className="home-page">
      <ProductsTab />
    </div>
  );
};

export default HomePage;

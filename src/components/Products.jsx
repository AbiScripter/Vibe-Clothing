import { useSelector } from "react-redux";
import Product from "./Product";
import { menProducts, womenProducts, kidsProducts } from "../data/productsData";

export function MenProducts() {
  const list = menProducts;
  console.log(list);

  return (
    <div className="products-wrapper">
      {list.map((item) => (
        <Product data={item} key={item.id} />
      ))}
    </div>
  );
}

export function WomenProducts() {
  const list = womenProducts;

  return (
    <div className="products-wrapper">
      {list.map((item) => (
        <Product data={item} key={item.id} />
      ))}
    </div>
  );
}

export function KidsProducts() {
  const list = kidsProducts;

  return (
    <div className="products-wrapper">
      {list.map((item) => (
        <Product data={item} key={item.id} />
      ))}
    </div>
  );
}

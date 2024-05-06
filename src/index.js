import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import WishListPage from "./pages/WishListPage";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
console.log("ommala");

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<App />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/wishlist" element={<WishListPage />} />
        <Route path="/cart" element={<CartPage />} />
        {/* <Route path="/user" element={<User />}>
          <Route path=":userId" element={<User />} />
        </Route> */}
      </Route>
      <Route path="*" element={<h2>Not found</h2>} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

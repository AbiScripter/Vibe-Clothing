import React from "react";
import "./WishListPage.css";

import { useDispatch, useSelector } from "react-redux";
import { Button, Card, Flex } from "antd";
import emptyWishlist from "../asset/empty-wishlist.png";
import { NavLink } from "react-router-dom";
import { deleteFromWishList } from "../slices/wishlistSlice";
import { addToCart } from "../slices/cartSlice";

const WishlistPage = () => {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.wishlist.wishlist);

  if (list.length === 0) {
    return <EmptyWishlist />;
  }

  const handleDeleteWishlist = (item) => {
    dispatch(deleteFromWishList(item));
  };

  const handleMovingToCart = (item) => {
    dispatch(deleteFromWishList(item));
    dispatch(addToCart(item));
  };

  return (
    <div className="wishlist_container">
      {list.map((item) => {
        return (
          <div className="wishlist_product">
            <Card
              key={item.id}
              cover={<img src={item.imageUrl} alt="product" />}
            >
              <p>
                <span>{item.name}</span>
                <br />
                <span> Rs. {item.price}</span>
              </p>
              <Flex gap={5} justify="center">
                <Button onClick={() => handleMovingToCart(item)}>
                  MOVE TO BAG
                </Button>
                <Button danger onClick={() => handleDeleteWishlist(item)}>
                  REMOVE
                </Button>
              </Flex>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

const EmptyWishlist = () => {
  return (
    <div className="empty_wishlist">
      <img src={emptyWishlist} alt="empty-wishlist" />
      <p>Your Wish list is empty</p>
      <Button>
        <NavLink to="/">Explore More</NavLink>
      </Button>
    </div>
  );
};

export default WishlistPage;

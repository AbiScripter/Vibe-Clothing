import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fullHeart, emptyHeart } from "../asset/svgs";
import { cartAction, wishlistAction } from "../store/Cart/CartActionTypes";
import { Button, Card, notification } from "antd";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import { addToCart, removeFromCart } from "../slices/cartSlice";
import { addToWishlist, deleteFromWishList } from "../slices/wishlistSlice";

const Product = ({ data }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const wishlist = useSelector((state) => state.wishlist.wishlist);

  const getProductQuantity = (productId) => {
    const product = cart.find((p) => p.id === productId);
    return product ? product.quantity : 0;
  };

  const getIsProductWishlisted = (productId) => {
    const product = wishlist.find((p) => p.id === productId);
    return product ? true : false;
  };

  const qty = getProductQuantity(data.id);
  const isWishlisted = getIsProductWishlisted(data.id);

  // const imageUrl = `${window.location.origin}/${data.imageUrl}`;

  const handleCartAdd = (item) => {
    dispatch(addToCart(item));
    handleNotification("bag", "add");
  };

  const handleCartSub = (item) => {
    dispatch(removeFromCart(item));
    handleNotification("bag", "remove");
  };

  const handleAddWishlist = (item) => {
    dispatch(addToWishlist(item));
    // dispatch(wishlistAction(item, "add"));
    handleNotification("wishlist", "add");
  };

  const handleDeleteWishlist = (item) => {
    dispatch(deleteFromWishList(item));
    // dispatch(wishlistAction(item, "delete"));
    handleNotification("wishlist", "remove");
  };

  const handleNotification = (where, actionType) => {
    notification.open({
      message: `Product ${actionType}${
        actionType === "add" ? "ed to" : "d from"
      } the ${where}`,
      duration: 1,
      type: "success",
    });
  };

  return (
    <div className="product">
      <Card
        cover={
          <img src={data.imageUrl} alt="product" className="product-card" />
        }
      >
        {isWishlisted ? (
          <span className="heart" onClick={() => handleDeleteWishlist(data)}>
            {fullHeart}
          </span>
        ) : (
          <span className="heart" onClick={() => handleAddWishlist(data)}>
            {emptyHeart}
          </span>
        )}

        <p>
          <span>{data.name}</span>
          <br />
          <span>Rs. {data.price}</span>
        </p>

        {qty >= 1 ? (
          <div>
            <Button size="small" onClick={() => handleCartSub(data)}>
              <MinusOutlined />
            </Button>
            <span> {qty} </span>

            <Button size="small" onClick={() => handleCartAdd(data)}>
              <PlusOutlined />
            </Button>
          </div>
        ) : (
          <Button onClick={() => handleCartAdd(data)}>Add to cart</Button>
        )}
      </Card>
    </div>
  );
};

export default Product;

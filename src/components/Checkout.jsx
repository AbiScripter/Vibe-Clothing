import React from "react";
import { Button, Col, Row } from "antd";
import "../pages/CartPage.css";

const CheckoutSummary = ({ list, total, couponDiscountPercent }) => {
  const platformFee = 20;
  let shippingCost = 0;
  let finalTotal = 0;
  const couponDiscount = Math.floor((couponDiscountPercent / 100) * total);

  const isShippingFree = Boolean(total > 1000);

  function totalCalcHelper(total, isShippingFree) {
    const cartDiscount = Math.floor((10 / 100) * total);
    if (isShippingFree) {
      shippingCost = 20;
    }
    return total - cartDiscount + platformFee + shippingCost - couponDiscount;
  }

  finalTotal = totalCalcHelper(total, isShippingFree);

  return (
    <div className="checkout_container">
      <p>PRICE DETAILS</p>
      <Row>
        <Col span={12}>Total MRP</Col>
        <Col span={12}>₹{Math.floor(total)}</Col>
      </Row>
      <Row>
        <Col span={12}>Discount on MRP (10%) </Col>
        <Col style={{ color: "#03A685" }} span={12}>
          -₹{Math.floor((10 / 100) * total)}
        </Col>
      </Row>

      <Row>
        <Col span={12}>Coupon Discount </Col>
        <Col style={{ color: "#03A685" }} span={12}>
          -₹{couponDiscount}
        </Col>
      </Row>
      <Row>
        <Col span={12}>Platform Fee</Col>
        <Col span={12}>₹20</Col>
      </Row>
      <Row>
        <Col span={12}>Shipping Fee</Col>
        <Col style={{ color: `${isShippingFree ? "#03A685" : ""}` }} span={12}>
          ₹{isShippingFree ? "FREE" : 20}
        </Col>
      </Row>
      <Row className="total">
        <Col span={12}>Total Amount</Col>
        <Col span={12}>₹{finalTotal}</Col>
      </Row>

      <Button block type="primary">
        PLACE ORDER
      </Button>
    </div>
  );
};

export default CheckoutSummary;

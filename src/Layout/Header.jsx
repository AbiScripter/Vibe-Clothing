import { NavLink } from "react-router-dom";
import { Row, Col } from "antd";
import { HeartOutlined, ShoppingOutlined } from "@ant-design/icons";
import "./Header.css";
import logo from "../asset/myntra-logo.png";

const Header = () => {
  return (
    <div>
      <Row className="nav" align="middle">
        <Col span={20}>
          <NavLink to="/" className="navlink">
            <img src={logo} alt="logo" className="logo" />
          </NavLink>
        </Col>
        <Col span={2}>
          <NavLink to="/wishlist" className="navlink">
            <span>
              <HeartOutlined />
              &nbsp; Wishlist
            </span>
          </NavLink>
        </Col>
        <Col span={2}>
          <NavLink to="/cart" className="navlink">
            <span>
              <ShoppingOutlined />
              &nbsp;Bag
            </span>
          </NavLink>
        </Col>
      </Row>
    </div>
  );
};

export default Header;

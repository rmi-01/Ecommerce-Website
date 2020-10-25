import React from "react";
import "./header.styles.scss";
import { ReactComponent as Logo } from "../../assets/4.3 crown.svg";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/utils";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../redux/selectors";
import CartIcon from "../cart-icon/cart-icon";

function Header() {
  const currentUser = useSelector(selectCurrentUser);
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="shop">
          SHOP
        </Link>
        <Link className="option" to="contact">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="sign-in">
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
    </div>
  );
}

export default Header;

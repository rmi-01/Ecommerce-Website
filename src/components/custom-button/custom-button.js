import React from "react";
import "./custom-button.styles.scss";

function CustomButton({
  children,
  isGoogleSignIn,
  invertedColor,
  ...otherProps
}) {
  return (
    <button
      {...otherProps}
      className={`${invertedColor ? "inverted-color" : ""} ${
        isGoogleSignIn ? "google-sign-in" : ""
      } custom-button`}
    >
      {children}
    </button>
  );
}

export default CustomButton;

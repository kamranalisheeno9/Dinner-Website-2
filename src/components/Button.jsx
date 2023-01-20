import React from "react";
import "./Button.css";
const Button = (props) => {
  const { font, btnName, padding, Func,type } = props;
  return (
    <button
    type={type}
      onClick={() => Func()}
      className="button"
      style={{ fontSize: font, padding: padding }}
    >
      {btnName}
    </button>
  );
};

export default Button;

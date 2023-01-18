import React from "react";
import "./Button.css";
const Button = (props) => {
  const { font, btnName, padding, Func } = props;
  return (
    <div
      onClick={() => Func()}
      className="button"
      style={{ fontSize: font, padding: padding }}
    >
      {btnName}
    </div>
  );
};

export default Button;

import React from "react";
import PropTypes from "prop-types";
function Button({ label, backgroundColor = "red", size = "md", onClick }) {
  let scale = 1;
  if (size === "sm") {
    scale = 0.75;
  }
  if (size === "lg") {
    scale = 1.5;
  }
  const style = {
    backgroundColor,
    padding: `${scale * 0.5}rem ${scale * 1}rem`,
  };
  return (
    <button style={style} onClick={onClick}>
      {label}
    </button>
  );
}
Button.prototype = {
  label: PropTypes.string,
  backgroundColor: PropTypes.string,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
};
export default Button;

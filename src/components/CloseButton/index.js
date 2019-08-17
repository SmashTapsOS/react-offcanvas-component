import React from "react";
import PropTypes from "prop-types";
import classNames from "./CloseButton.module.css";

function CloseButton({ children, onClick, style, className }) {
  return (
    <button
      onClick={onClick}
      className={`${classNames.closeButton} ${className}`}
      style={style}
    >
      {children}
    </button>
  );
}

CloseButton.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  onClick: PropTypes.func.isRequired,
  style: PropTypes.object,
  className: PropTypes.string
};

export default CloseButton;

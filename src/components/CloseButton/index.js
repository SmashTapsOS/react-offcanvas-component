import React from "react";
import PropTypes from "prop-types";
import classNames from "./CloseButton.module.css";

function CloseButton({ children, onClick, style }) {
  return (
    <button onClick={onClick} className={classNames.closeButton} style={style}>
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
  style: PropTypes.object
};

export default CloseButton;

import React, { Children, cloneElement } from "react";
import posed from "react-pose";
import PropTypes from "prop-types";
import classNames from "./MenuItem.module.css";

// TODO: Accept dropdown icon classname via props

const Item = posed.div({
  open: {
    y: 0,
    opacity: 1
  },
  close: { y: 20, opacity: 0 }
});

function MenuItem({
  children,
  onClick,
  dropdownOpen,
  style,
  className,
  hasDropdown,
  dropdownIconClassName
}) {
  const updatedChildren = Children.map(children, child => {
    if (child.type && child.type.__name === "dropdown") {
      return cloneElement(child, {
        open: dropdownOpen
      });
    }
    return child;
  });
  return (
    <Item
      onClick={onClick}
      style={style}
      className={`${classNames.menuItem} ${className ? className : ""}`}
    >
      {updatedChildren}{" "}
      {hasDropdown &&
        (dropdownOpen ? (
          <div
            className={`${classNames.dropdownIcon} ${
              dropdownIconClassName ? dropdownIconClassName : ""
            }`}
          >
            -
          </div>
        ) : (
          <div
            className={`${classNames.dropdownIcon} ${
              dropdownIconClassName ? dropdownIconClassName : ""
            }`}
          >
            +
          </div>
        ))}
    </Item>
  );
}

MenuItem.__name = "MenuItem";

MenuItem.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  style: PropTypes.object,
  onClick: PropTypes.func,
  dropdownOpen: PropTypes.bool,
  className: PropTypes.string,
  dropdownIconClassName: PropTypes.string,
  hasDropdown: PropTypes.bool
};

export default MenuItem;

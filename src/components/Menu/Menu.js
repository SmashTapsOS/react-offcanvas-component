import React, { cloneElement, Children, useState } from "react";
import MenuItem from "./MenuItem";
import PropTypes from "prop-types";

function Menu({ el: El = "div", className, ...props }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleClick = child => event => {
    if (child.props.onClick) {
      child.props.onClick(event);
    }
    if (child.props.hasDropdown) {
      setIsDropdownOpen(
        isDropdownOpen === child.props.name ? false : child.props.name
      );
    }
  };

  const children = Children.map(props.children, child => {
    return cloneElement(child, {
      onClick: handleClick(child),
      dropdownOpen: child.props.hasDropdown
        ? isDropdownOpen === child.props.name
        : null
    });
  });

  return <El className={className}>{children}</El>;
}

Menu.propTypes = {
  el: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

Menu.Item = MenuItem;

export default Menu;

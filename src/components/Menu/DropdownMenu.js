import React, { Children, cloneElement } from "react";
import PropTypes from "prop-types";
import posed from "react-pose";
import classNames from "./DropdownMenu.module.css";

// Todo: Add an icon to indicate the dropdown

const DropdownWrapper = posed.div({
  dropdownOpen: {
    height: "auto"
  },
  dropdownClose: {
    height: 0
  }
});

function DropDownMenu({ children, open = false, style, className }) {
  const handleClick = child => event => {
    event.stopPropagation();
    if (child.props.onClick) {
      child.props.onClick(event);
    }
  };

  const updatedChildren = Children.map(children, child =>
    cloneElement(child, {
      onClick: handleClick(child)
    })
  );

  return (
    <DropdownWrapper
      className={`${classNames.dropdown} ${className ? className : ""}`}
      pose={open ? "dropdownOpen" : "dropdownClose"}
      style={style}
    >
      {updatedChildren}
    </DropdownWrapper>
  );
}

DropDownMenu.__name = "dropdown";

DropDownMenu.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  style: PropTypes.object,
  open: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  className: PropTypes.string
};

export default DropDownMenu;

import React from "react";
import posed from "react-pose";
import PropTypes from "prop-types";
import classNames from "./SidebarWrapper.module.css";
import Overlay from "../Overlay";

const SidebarWrapperPanel = posed.section({
  open: {
    x: ({ open }) => open.x,
    transition: ({ open }) => ({ ...open.transition }),
    delayChildren: ({ open }) => open.delayChildren,
    staggerChildren: ({ open }) => open.staggerChildren
  },
  close: {
    x: ({ close }) => close.x,
    delayChildren: ({ close }) => close.delayChildren,
    transition: ({ close }) => ({ ...close.transition }),
    afterChildren: ({ close }) => close.afterChildren
  }
});

function SidebarWrapper({
  children,
  open = false,
  className,
  style,
  openAnimation,
  closeAnimation,
  overlay,
  overlayClassName
}) {
  const defaultOpenAnimation = {
    x: "-100px",
    transition: {
      ease: [0.175, 0.885, 0.32, 1.275],
      duration: 300
    },
    delayChildren: 150,
    staggerChildren: 100
  };

  const defaultCloseAnimation = {
    x: "-100%",
    transition: {
      duration: 100
    },
    afterChildren: true
  };

  const updatedOpenAnimation = Object.assign(
    {},
    defaultOpenAnimation,
    openAnimation
  );

  const updatedCloseAnimation = Object.assign(
    {},
    defaultCloseAnimation,
    closeAnimation
  );

  const props = {
    className: `${classNames.wrapper} ${className}`,
    pose: open ? "open" : "close",
    style,
    open: updatedOpenAnimation,
    close: updatedCloseAnimation
  };

  if (overlay) {
    return (
      <>
        <Overlay open={open} className={overlayClassName} />{" "}
        <SidebarWrapperPanel {...props}>{children}</SidebarWrapperPanel>
      </>
    );
  }

  return <SidebarWrapperPanel {...props}>{children}</SidebarWrapperPanel>;
}

SidebarWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  open: PropTypes.bool.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
  openAnimation: PropTypes.object,
  closeAnimation: PropTypes.object,
  overlay: PropTypes.bool,
  overlayClassName: PropTypes.bool
};

export default SidebarWrapper;

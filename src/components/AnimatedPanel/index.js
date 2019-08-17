import React from "react";
import posed from "react-pose";
import PropTypes from "prop-types";
import classNames from "./AnimatedPanel.module.css";

const PoseComponent = posed.div({
  open: {
    x: ({ open }) => open.x,
    transition: ({ open }) => ({ ...open.transition }),
    delayChildren: ({ open }) => open.delayChildren,
    staggerChildren: ({ open }) => open.staggerChildren
  },
  close: {
    x: ({ close }) => close.x,
    transition: ({ close }) => ({ ...close.transition }),
    afterChildren: ({ close }) => ({ ...close.afterChildren })
  }
});

function AnimatedPanel({
  children,
  style,
  closeAnimation,
  openAnimation,
  className
}) {
  const openDefaultAnimation = {
    x: "0%",
    transition: {
      ease: [0.175, 0.885, 0.32, 1.275],
      duration: 300
    },
    delayChildren: 300,
    staggerChildren: 100
  };

  const open = Object.assign({}, openDefaultAnimation, openAnimation, style);

  const closeDefaultAnimation = {
    x: "-100%",
    transition: {
      duration: 100
    },
    afterChildren: true
  };

  const close = Object.assign({}, closeDefaultAnimation, closeAnimation);

  return (
    <PoseComponent
      open={open}
      close={close}
      style={style}
      className={`${classNames.animatedPanel} ${className ? className : ""}`}
    >
      {children}
    </PoseComponent>
  );
}

AnimatedPanel.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  style: PropTypes.object,
  closeAnimation: PropTypes.object,
  openAnimation: PropTypes.object,
  className: PropTypes.string
};

export default AnimatedPanel;

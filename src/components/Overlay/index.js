import React from "react";
import posed, { PoseGroup } from "react-pose";
import PropTypes from "prop-types";
import classNames from "./Overlay.module.css";

const AnimatedOverlay = posed.div({
  enter: { opacity: 1 },
  exit: { opacity: 0, delay: 500 }
});

const Overlay = ({ className, open }) => {
  return (
    <PoseGroup>
      {open && (
        <AnimatedOverlay
          key="overlay"
          pose={open ? "enter" : "exit"}
          className={classNames.overlay + (className ? " " + className : "")}
        />
      )}
    </PoseGroup>
  );
};

Overlay.propTypes = {
  className: PropTypes.string,
  open: PropTypes.bool
};

export default Overlay;

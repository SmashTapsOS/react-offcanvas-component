import React, { useState } from "react";
import ReactOffcanvasComponent from "react-offcanvas-component";
import classNames from "./ThreePanels.module.css";
import {
  FaCog,
  FaEnvelope,
  FaCommentAlt,
  FaMagic,
  FaUserAstronaut,
  FaHome,
  FaIntercom,
  FaBaby,
  FaShareAlt
} from "react-icons/fa";
const {
  AnimatedPanel,
  CloseButton,
  DropdownMenu,
  Menu
} = ReactOffcanvasComponent;

const MenuItem = Menu.Item;

function ThreePanels() {
  const [visibility, setVisibility] = useState(false);

  const handleClick = () => {
    setVisibility(visibility => !visibility);
  };
  return (
    <div className="App">
      <button onClick={handleClick}>
        {visibility ? "close" : "open"} Three Panels
      </button>
      <ReactOffcanvasComponent
        overlay
        open={visibility}
        onClose={handleClick}
        className={classNames.wrapper}
      >
        <AnimatedPanel className={classNames.panelMid}>
          <AnimatedPanel className={classNames.panelTop}>
            <CloseButton onClick={handleClick} style={{ color: "#fff" }}>
              x
            </CloseButton>
            <h1 style={{ color: "#fff", textAlign: "center" }}>Logo</h1>
            <Menu className={classNames.menu}>
              <MenuItem>
                <FaUserAstronaut /> Astro
              </MenuItem>
              <MenuItem>
                <FaHome /> Home
              </MenuItem>
              <MenuItem>
                <FaCog /> Settings
              </MenuItem>
              <MenuItem
                hasDropdown
                name="dropdown-b"
                dropdownIconClassName={classNames.dropdownIcon}
              >
                <FaIntercom /> Dropdown
                <DropdownMenu className={classNames.dropdown}>
                  <MenuItem>Abc</MenuItem>
                  <MenuItem>Abc</MenuItem>
                  <MenuItem>Abc</MenuItem>
                </DropdownMenu>
              </MenuItem>
              <MenuItem>
                <FaBaby /> Baby{" "}
              </MenuItem>
              <MenuItem
                hasDropdown
                name="dropdown-a"
                dropdownIconClassName={classNames.dropdownIcon}
              >
                <FaShareAlt /> Dropdown
                <DropdownMenu className={classNames.dropdown}>
                  <MenuItem>Abc</MenuItem>
                  <MenuItem>Abc</MenuItem>
                  <MenuItem>Abc</MenuItem>
                </DropdownMenu>
              </MenuItem>
            </Menu>
            <div className={classNames.settingsPanel}>
              <FaCog />
              <FaEnvelope />
              <FaCommentAlt />
              <FaMagic />
            </div>
          </AnimatedPanel>
        </AnimatedPanel>
      </ReactOffcanvasComponent>
    </div>
  );
}

export default ThreePanels;

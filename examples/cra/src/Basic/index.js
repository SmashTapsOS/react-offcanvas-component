import React, { useState } from "react";
import ReactOffcanvasComponent from "react-offcanvas-component";
import "./Basic.css";
import { FaTimes } from "react-icons/fa";

const { Menu, DropdownMenu, CloseButton } = ReactOffcanvasComponent;

const MenuItem = Menu.Item;

function Basic() {
  const [visibility, setVisibility] = useState(false);

  const handleClick = () => {
    setVisibility(visibility => !visibility);
  };

  const openAnimation = {
    x: 0,
    transition: {
      duration: 200
    }
  };

  return (
    <div>
      <button className="button" onClick={handleClick}>
        {!visibility ? "Basic" : "Close basic"}
      </button>
      <ReactOffcanvasComponent
        className="wrapper"
        open={visibility}
        openAnimation={openAnimation}
      >
        <CloseButton onClick={handleClick} style={{ right: 10 }}>
          <FaTimes />
        </CloseButton>
        <div className="logo">ROC</div>
        <Menu>
          <MenuItem className="menu-item">Home</MenuItem>
          <MenuItem className="menu-item">Another Menu Item</MenuItem>
          <MenuItem hasDropdown name="dropdown-b" className="dropdown">
            Dropdown
            <DropdownMenu>
              <MenuItem className="dropdown-item">Abc</MenuItem>
              <MenuItem className="dropdown-item">Abc</MenuItem>
              <MenuItem className="dropdown-item">Abc</MenuItem>
            </DropdownMenu>
          </MenuItem>
          <MenuItem className="menu-item">Is n't it awesome</MenuItem>
        </Menu>
      </ReactOffcanvasComponent>
    </div>
  );
}

export default Basic;

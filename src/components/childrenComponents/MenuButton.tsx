import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface Iaction {
  toogle: () => void;
}

const MenuButton: React.FC<Iaction> = ({ toogle }): JSX.Element => {
  return (
    <div id="menu-button" className="d-lg-none" onClick={toogle}>
      <FontAwesomeIcon icon={faBars} className="icon" />
    </div>
  );
};

export default MenuButton;

import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MenuButton = () : JSX.Element  => {
    return (
        <div id="menu-button" className="d-lg-none">
             <FontAwesomeIcon icon={faBars} className="icon" />
        </div>
    );
};

export default MenuButton;
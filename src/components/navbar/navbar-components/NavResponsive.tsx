import dataHelper from "@/helpers/dataHelper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavResponsive = (): JSX.Element => {
  const { navItems, socialIcons } = dataHelper();
  return (
    <div className="menu-responsive d-lg-none">
      <ul>
        {navItems.map((item, index) => (
          <li key={index} id={item.id}>
            {item.icon !== null && (
              <FontAwesomeIcon icon={item.icon} className="mx-2" />
            )}
            {item.label}
          </li>
        ))}
        <li>
          <div className="line"></div>
          <div className="socialIcons">
              {socialIcons.map((item, index)=>(
                  <div className="icons" key={index}>
                      <img src={item.icon} alt="" />
                  </div>
              ))}
          </div>
        </li>
      </ul>
    </div>
  );
};

export default NavResponsive;

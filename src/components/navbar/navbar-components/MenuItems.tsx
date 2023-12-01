import dataHelper from "@/helpers/dataHelper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MenuItems = (): JSX.Element => {
  const { navItems } = dataHelper();
  return (
    <div className="menu-items d-none d-lg-flex">
      <ul>
        {navItems.map((item, index) => (
          <li key={index} id={item.id}>
            {item.icon !== null && (
              <FontAwesomeIcon icon={item.icon} className="mx-2" />
            )}
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuItems;

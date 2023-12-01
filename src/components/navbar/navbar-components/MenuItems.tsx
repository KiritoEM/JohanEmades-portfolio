import dataHelper from "@/helpers/dataHelper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import { useNav } from "@/hook/useNav";

const MenuItems = (): JSX.Element => {
  const { navItems } = dataHelper();
  const router = useRouter();
  const { closeNav } = useNav();
  return (
    <div className="menu-items d-none d-lg-flex">
      <ul>
        {navItems.map((item, index) => (
          <li
            key={index}
            id={item.id}
            className={router.pathname === item.url ? "active" : ""}
            onClick={() => {
              router.push(`${item.url}`);
              closeNav();
            }}
          >
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

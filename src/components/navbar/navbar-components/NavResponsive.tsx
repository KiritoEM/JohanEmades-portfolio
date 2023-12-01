import dataHelper from "@/helpers/dataHelper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNav } from "@/hook/useNav";
import { useRouter } from "next/router";

const NavResponsive = (): JSX.Element => {
  const { navItems, socialIcons } = dataHelper();
  const { openMenu } = useNav();
  const router = useRouter();
  return (
    <div
      className={`menu-responsive d-lg-none ${
        openMenu ? "open-menu" : "close-menu"
      }`}
    >
      <ul>
        {navItems.map((item, index) => (
          <li
            key={index}
            id={item.id}
            className={router.pathname === item.url ? "active" : ""}
            onClick={() => {
              router.push(`${item.url}`);
            }}
          >
            {item.icon !== null && (
              <FontAwesomeIcon icon={item.icon} className="mx-2" />
            )}
            {item.label}
          </li>
        ))}
        <li>
          <div className="line"></div>
          <div className="socialIcons">
            {socialIcons.map((item, index) => (
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

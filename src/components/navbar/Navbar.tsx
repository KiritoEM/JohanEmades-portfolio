import MenuItems from "./navbar-components/MenuItems";
import NavResponsive from "./navbar-components/NavResponsive";

const Navbar = (): JSX.Element => {
  return (
    <nav id="nav">
      <div id="nav__container">
        {/* ===================logo of navbar================ */}
        <div className="logo">
          <img src="/images/logo.png" alt="" />
          <h4>
            Johan<span>Emades</span>
          </h4>
        </div>

        {/* ===================menu items================ */}
        <MenuItems />
      </div>
      <NavResponsive /> 
    </nav>
  );
};

export default Navbar;

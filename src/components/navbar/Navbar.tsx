import MenuItems from "./navbar-components/MenuItems";

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
    </nav>
  );
};

export default Navbar;

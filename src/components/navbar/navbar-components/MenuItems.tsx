import dataHelper from "@/helpers/dataHelper";

const MenuItems = (): JSX.Element => {
  const { navItems } = dataHelper();
  return (
    <div className="menu-items">
      <ul>
        {navItems.map((item, index) => (
          <li key={index}>{item.label}</li>
        ))}
      </ul>
    </div>
  );
};

export default MenuItems;

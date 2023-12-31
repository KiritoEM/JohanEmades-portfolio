import React, { ReactNode, createContext, useContext, useState } from "react";

interface IAuthProvider {
  children?: ReactNode;
}

interface INavContext {
  openMenu: boolean;
  openOverlay: boolean;
  menuToogle: () => void;
  closeNav: () => void;
}

interface IDefaultNavContext {
    openMenu: false;
    openOverlay: false;
    menuToogle: () => null;
    closeNav: () => null;
  }
const NavContext = createContext<INavContext | IDefaultNavContext | null>(null);

export const NavProvider: React.FC<IAuthProvider> = ({ children }): JSX.Element => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [openOverlay, setOpenOverlay] = useState<boolean>(false);

  //fonction pour le toogle
  const menuToogle = () => {
    setOpenMenu(!openMenu);
    setOpenOverlay(!openOverlay);
  };

  const closeNav = () => {
    setOpenMenu(false);
    setOpenOverlay(false);
  };

  return (
    <NavContext.Provider
      value={{
        openMenu,
        openOverlay,
        menuToogle,
        closeNav
      }}
    >
      {children}
    </NavContext.Provider>
  );
};

//hooks exportation
export const useNav = () => {
  const context = useContext(NavContext);

  if (!context) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
};

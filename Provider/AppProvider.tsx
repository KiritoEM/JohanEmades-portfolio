import { ReactNode } from "react";
import { NavProvider } from "@/hook/useNav";

interface Ichildren {
  children?: ReactNode;
}

const AppProvider: React.FC<Ichildren> = ({ children }): JSX.Element => {
  return <NavProvider>{children}</NavProvider>;
};

export default AppProvider;

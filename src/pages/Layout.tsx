import Footer from "@/components/Footer";
import Navbar from "@/components/navbar/Navbar";
import React, { Fragment, ReactNode } from "react";

interface Ichilden {
  children: ReactNode;
}

const Layout: React.FC<Ichilden> = ({ children }): JSX.Element => {
  return (
    <Fragment>
      <Navbar />
      {children}
      <footer>
        <Footer />
      </footer>
    </Fragment>
  );
};

export default Layout;

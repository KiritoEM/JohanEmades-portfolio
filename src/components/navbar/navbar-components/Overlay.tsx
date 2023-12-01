import React, { Fragment } from "react";

interface IoverlayProps {
  overlay: boolean;
}

const Overlay: React.FC<IoverlayProps> = ({ overlay }): JSX.Element => {
  return (
    <Fragment>
      {overlay && <div id="overlay" className="d-none-lg"></div>}
    </Fragment>
  );
};

export default Overlay;

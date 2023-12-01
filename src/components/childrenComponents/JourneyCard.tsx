import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface IjourneyProps {
  icon: IconProp;
  img: string;
  text: string;
  title: string;
}

const JourneyCard: React.FC<IjourneyProps> = ({
  icon,
  img,
  text,
  title,
}): JSX.Element => {
  return (
    <div className="journey-card">
      <div className="row">
        <div className="col-md-2 d-flex justify-content-center ">
          <div className="first-section">
            <div className="line"></div>
            <div className="square">
              <FontAwesomeIcon icon={icon} id="icon" />
            </div>
          </div>
        </div>
        <div className="col-md-10">
          <div className="second-section">
            <div className="row">
              <div className="col-5">
                <div className="section-cover">
                  <img src={img} alt="" />
                </div>
              </div>
              <div className="col-7">
                <div className="section-header">
                  <div className="title">
                    <h5>{title}</h5>
                  </div>
                  <div className="line"></div>
                  <div className="text">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Dolore hic magni eveniet facilis at laboriosam iste fuga
                      deleniti ab unde. Odio repellendus nihil soluta explicabo
                      blanditiis optio at eaque possimus.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JourneyCard;

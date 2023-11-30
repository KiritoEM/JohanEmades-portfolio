import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import dataHelper from "@/helpers/dataHelper";
import JourneyCard from "../childrenComponents/JourneyCard";
import Fade from "react-reveal/Fade";

const Journey = (): JSX.Element => {
  const { journeyData } = dataHelper();
  return (
    <Fade bottom cascade>
      <section id="home-journey">
        <div className="header">
          <div className="subtitle">
            <div className="spinner"></div>
            <h4>My studies</h4>
          </div>
          <div className="title mt-2">
            <h3>The path that I have crossed</h3>
          </div>
        </div>
        <div className="journey-container">
          {journeyData.map((item, index) => (
            <JourneyCard key={index} {...item} />
          ))}
        </div>
      </section>
    </Fade>
  );
};

export default Journey;

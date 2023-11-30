import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import dataHelper from "@/helpers/dataHelper";
import JourneyCard from "../childrenComponents/JourneyCard";

const Journey = (): JSX.Element => {
  const { journeyData } = dataHelper();
  return (
    <section id="home-journey">
        <div className="header">
          <div className="subtitle">
            <div className="spinner"></div>
            <h4>My studies</h4>
          </div>
          <div className="title mt-2">
            <h2>The path that I have crossed</h2>
          </div>
        </div>
        <div className="journey-container">
          {journeyData.map((item, index) => (
            <JourneyCard key={index} {...item} />
          ))}
        </div>
    </section>
  );
};

export default Journey;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BoxPreview from "../childrenComponents/BoxPreview";
import dataHelper from "@/helpers/dataHelper";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import Fade from "react-reveal/Fade";

const TechnoPreview = (): JSX.Element => {
  const { previewTechno } = dataHelper();
  return (
    <section id="home-preview">
      <div id="home-preview__container">
        <Fade bottom>
          <div className="section-header">
            <div className="subtitle">
              <div className="spinner"></div>
              <h4>My technos</h4>
            </div>
            <div className="title mt-2">
              <h3>The langage I use mostly</h3>
            </div>
          </div>
        </Fade>

        <Fade bottom>
          <div className="section-content mt-5">
            <div className="row gx-5 gy-5 gy-lg-2">
              {previewTechno.map((item, index) => (
                <BoxPreview icon={"function"} key={index} {...item} />
              ))}
            </div>
            <div className="btn-all">
              <a href="/techno">
                <button className="btn">
                  <FontAwesomeIcon icon={faCode} className="mx-2" /> See all my
                  techno
                </button>
              </a>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default TechnoPreview;

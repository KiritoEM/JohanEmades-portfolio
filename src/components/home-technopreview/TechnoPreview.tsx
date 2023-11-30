import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BoxPreview from "../childrenComponents/BoxPreview";
import dataHelper from "@/helpers/dataHelper";
import { faCode } from "@fortawesome/free-solid-svg-icons";

const TechnoPreview = (): JSX.Element => {
  const { previewTechno } = dataHelper();
  return (
    <section id="home-preview">
      <div id="home-preview__container">
        <div className="section-header">
          <div className="subtitle">
            <div className="spinner"></div>
            <h4>My technos</h4>
          </div>
          <div className="title mt-2">
            <h3>The langage I use mostly</h3>
          </div>
        </div>

        <div className="section-content mt-5">
          <div className="row gx-4">
            {previewTechno.map((item, index) => (
              <BoxPreview key={index} {...item} />
            ))}
          </div>
          <div className="btn-all">
             <button className="btn"><FontAwesomeIcon icon={faCode} className="mx-2"/> See all my techno</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnoPreview;

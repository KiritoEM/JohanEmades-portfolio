import dataHelper from "@/helpers/dataHelper";
import BoxPreview from "../childrenComponents/BoxPreview";

const Tools = (): JSX.Element => {
  const { toolData } = dataHelper();
  return (
    <section id="techno-tools">
      <div id="techno-tools__container">
        <div className="section-header">
          <div className="subtitle">
            <div className="spinner"></div>
            <h4>Tools</h4>
          </div>
          <div className="title">
            <h3>All the Langage I use and their libraries</h3>
          </div>
        </div>
        <div className="section-content">
            <div className="row gx-0 gx-md-4 gy-5">
              {toolData.map((item, index) => (
                <BoxPreview icon={"function"} key={index} {...item} />
              ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Tools;

import dataHelper from "@/helpers/dataHelper";

const Overview = (): JSX.Element => {
  const { overviewData } = dataHelper();

  return (
    <section id="home-overview">
      <div id="home-overview__container">
        <div className="row">
          {overviewData.map((item, index) => (
            <div className="col-4" key={index}>
              <div className="overview-item" id={item.id}>
                <h3>{item.statisitic}</h3>
                <h5>{item.label}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Overview;

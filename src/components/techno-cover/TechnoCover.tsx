import dataHelper from "@/helpers/dataHelper";

const TechnoCover = (): JSX.Element => {
  const { StackIcon } = dataHelper();
  return (
    <section id="techno-cover">
      <div className="section-header">
        <div className="rocket-svg">
          <img src="/images/rocket.svg" alt="" />
        </div>
        <div className="title">
          <h2>My Stack</h2>
        </div>
      </div>
      <div className="line"></div>
      <div className="section-icons">
        {StackIcon.map((item, index) => (
          <div className="icon" key={index}>
            <img src={item.icon} alt="" />
          </div>
        ))}
      </div>
    </section>
  );
};
export default TechnoCover;

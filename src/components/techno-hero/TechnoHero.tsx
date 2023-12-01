const TechnoHero = (): JSX.Element => {
  return (
    <section id="techno-hero">
      <div id="techno-hero__container">
        <div className="row">
          <div className="col-7">
            <div className="section-header">
              <div className="subtitle">
                <div className="spinner"></div>
                <h4>Stack</h4>
              </div>
              <div className="title">
                <h3>I use MERN Stack for fullstack Web Application</h3>
              </div>
            </div>
          </div>
          <div className="col-5">
            <div className="section-animation"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnoHero;

const Journey = (): JSX.Element => {
  return (
    <section id="home-journey">
      <div id="home-journey__container">
        <div className="header">
          <h2>My studies</h2>
        </div>
        <div className="app-content">
          <div className="row">
            <div className="col-2 d-flex justify-content-center ">
              <div className="first-section">
                <div className="line"></div>
                <div className="square"></div>
              </div>
            </div>
            <div className="col-10">
              <div className="second-section">
                <div className="row">
                  <div className="col-5">
                    <div className="section-cover">
                         <img src="" alt="" />
                    </div>
                  </div>
                  <div className="col-7">
                    <div className="section-header"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;

import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Journey = (): JSX.Element => {
  return (
    <section id="home-journey">
      <div id="home-journey__container">
        <div className="header">
          <div className="subtitle">
            <div className="spinner"></div>
            <h4>My studies</h4>
          </div>
          <div className="title mt-2">
            <h2>The path that I have crossed</h2>
          </div>
        </div>
        <div className="app-content">
          <div className="row">
            <div className="col-2 d-flex justify-content-center ">
              <div className="first-section">
                <div className="line"></div>
                <div className="square">
                  <FontAwesomeIcon icon={faGraduationCap} id="icon" />
                </div>
              </div>
            </div>
            <div className="col-10">
              <div className="second-section">
                <div className="row">
                  <div className="col-5">
                    <div className="section-cover">
                      <img src="/images/day1.jpg" alt="" />
                    </div>
                  </div>
                  <div className="col-7">
                    <div className="section-header">
                      <div className="title">
                        <h5>High School grade</h5>
                      </div>
                      <div className="line"></div>
                      <div className="text">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Dolore hic magni eveniet facilis at laboriosam
                          iste fuga deleniti ab unde. Odio repellendus nihil
                          soluta explicabo blanditiis optio at eaque possimus.
                        </p>
                      </div>
                    </div>
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

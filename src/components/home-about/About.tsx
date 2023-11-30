import { faCode, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const About = (): JSX.Element => {
  return (
    <section id="home-about">
      <div id="home-about__container">
        <div className="row">
          <div className="col-5">
            <div className="section-cover">
              <img src="/images/pdp.jpg" alt="" />
            </div>
          </div>
          <div className="col-7">
            <div className="section-header">
              <div className="subtitle">
                <div className="spinner"></div>
                <h4>About me</h4>
              </div>
              <div className="title mt-2">
                <h2>
                  I am looking for the responsiveness of my{" "}
                  <span> web apps</span>
                </h2>
              </div>
              <div className="text mt-4">
                <p>
                  {" "}
                  I'm <b> Emadisson Nirina Johannès Loick </b> and I'm 18 years
                  old. I'm a <b>Javascript Fullstack developer</b> and mostly I
                  use modern technologies to make my applications efficient,
                  fast and dynamic . I have a minimum of experience in web
                  development because now I'm in License 1 and I will pass in
                  License 2 in next year. Now , I study in ISPM Antsobolo where
                  I discover and learn new thing about IT development.
                </p>
              </div>
              <div className="button mt-4">
                 <button className="btn"><FontAwesomeIcon icon={faEnvelope} className="mx-2"/> Contact me</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

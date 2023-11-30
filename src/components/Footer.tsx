import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = (): JSX.Element => {
  return (
    <section id="footer">
      <div id="footer__container">
        <div className="row">
          <div className="col-5">
            <div className="title">
                 <h3><FontAwesomeIcon icon={faEnvelope}/> Contact-me</h3>
            </div>
            <div className="section-info">
              <div className="item">
                <p>
                  {" "}
                  <FontAwesomeIcon icon={faEnvelope} className="icon mx-3" />{" "}
                  loickemadesemadisson@gmail.com
                </p>
              </div>
            </div>
          </div>
          <div className="col-7">
            <div className="section-email"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;

import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import dataHelper from "@/helpers/dataHelper";

const Footer = (): JSX.Element => {
  const { socialIcons } = dataHelper();
  return (
    <section id="footer">
      <div id="footer__container">
        <div className="row">
          <div className="col-5">
            <div className="title">
              <h3>
                <FontAwesomeIcon icon={faEnvelope} /> Contact-me
              </h3>
              <div className="line"></div>
            </div>
            <div className="section-info">
              {socialIcons.map((item, index)=>(
                <div className="social-icons" key={index}>
                     <img src={item.icon} alt="" />
                </div>
              ))}
            </div>
          </div>
          <div className="col-7">
            <div className="section-email">
                 
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;

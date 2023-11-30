import { faEnvelope, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import dataHelper from "@/helpers/dataHelper";
import FooterForm from "./FooterForm";

const Footer = (): JSX.Element => {
  const { socialIcons } = dataHelper();
  return (
    <section id="footer">
      <div id="footer__container">
        <div className="row">
          <div className="col-6">
            <div className="title">
              <h3>
                <FontAwesomeIcon icon={faUser} className="mx-2" /> Contact-me
              </h3>
              <div className="line"></div>
            </div>
            <div className="section-info">
              {socialIcons.map((item, index) => (
                <div className="social-icons" key={index}>
                  <img src={item.icon} alt="" />
                </div>
              ))}
            </div>
          </div>
          <FooterForm />
        </div>
      </div>
    </section>
  );
};

export default Footer;

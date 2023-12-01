import { faEnvelope, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import dataHelper from "@/helpers/dataHelper";
import FooterForm from "./FooterForm";

const Footer = (): JSX.Element => {
  const { socialIcons } = dataHelper();
  return (
    <section id="footer">
      <div id="footer__container">
        <div className="row gy-5 gy-md-2 gx-5 gx-lg-2">
          <div className="col-md-6 col-lg-8">
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

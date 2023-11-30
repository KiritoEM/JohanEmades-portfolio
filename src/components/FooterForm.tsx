import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const FooterForm = (): JSX.Element => {
  return (
    <div className="col-6">
        <div className="title">
              <h3>
                <FontAwesomeIcon icon={faEnvelope} className="mx-2" /> Send Email
              </h3>
              <div className="line"></div>
        </div>
      <div className="section-email">
         <form action="">
         <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Your email ..."
                />
              </div>
              <div className="form-group mt-4">
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  name="password"
                  placeholder="Your messsage ..."
                />
              </div>
              <div className="button mt-4">
                <button type="submit" className="btn">
                  Send Email
                </button>
              </div>
         </form>
      </div>
    </div>
  );
};

export default FooterForm;

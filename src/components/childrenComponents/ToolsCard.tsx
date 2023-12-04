import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faCog, faDatabase, faLaptop } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface IpreviewProps {
  img: string;
  title: string;
  usage: string;
  icon: IconProp;
  text: string;
}

const ToolsCard: React.FC<IpreviewProps> = ({
  img,
  title,
  usage,
  icon,
  text,
}): JSX.Element => {
  return (
    <div className="col-md-6 col-lg-4">
      <div className="box-tools">
        <div className="box-tools__cover">
          <img src={img} alt="" />
        </div>
        <div className="box-tools__content">
          <div className="header">
            <div className="title">
              <h5>{title}</h5>
            </div>
            <div className="usage">
              <h5>
                {" "}
                {usage === "Frontend" ? (
                  <FontAwesomeIcon icon={faLaptop} className="mx-2" />
                ) : (
                  <FontAwesomeIcon icon={faDatabase} className="mx-2" />
                )}
                {usage}
              </h5>
            </div>
          </div>
          <div className="text mt-2">
            <p>{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolsCard;

import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faCog, faLaptop } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface IpreviewProps {
  img: string;
  title: string;
  usage: string;
  icon: IconProp;
  text: string;
}

const BoxPreview: React.FC<IpreviewProps> = ({
  img,
  title,
  usage,
  icon,
  text,
}): JSX.Element => {
  return (
    <div className="col-4">
      <div className="box-preview">
        <div className="box-preview__cover">
          <img src={img} alt="" />
        </div>
        <div className="box-preview__content">
          <div className="header">
            <div className="title">
              <h4>{title}</h4>
            </div>
            <div className="usage">
              <h5>
                {" "}
                <FontAwesomeIcon icon={icon} className="mx-2" />
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

export default BoxPreview;

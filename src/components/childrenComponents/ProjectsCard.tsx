  import React from "react";

  interface IprojectsProps {
    img: string;
    title: string;
    text: string;
    techno: Itechno[];
    urlDemo?: string;
    urlGit?: string;
  }

  interface Itechno {
    text: string;
  }

  const ProjectsCard: React.FC<IprojectsProps> = ({
    img,
    title,
    text,
    techno,
    urlDemo,
    urlGit,
  }): JSX.Element => {
    return (
      <div className="box-projects">
        <div className="box-projects__cover">
          <img src={`${img}`} alt="" />
        </div>
        <div className="box-projects__content">
          <div className="header">
            <h5>{title}</h5>
            <p className="mt-3">{text}</p>
          </div>
          <div className="langages">
            {techno.map((item, index) => (
              <div className="item" key={index}>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
          <div className="buttons">
            <div className="btn-1">
              <a href={`${urlDemo}`} target="_blank">
                <button className="btn">
                  <img src="/images/demo.svg" alt="" />
                  View demo
                </button>
              </a>
            </div>
            <div className="btn-2">
              <a href={`${urlGit}`} target="_blank">
                <button className="btn">
                  <img src="/images/git.png" alt="" />
                  Github Link
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default ProjectsCard;

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
        <img src="/images/tools/boostrap.jpg" alt="" />
      </div>
      <div className="box-projects__content">
        <div className="header">
          <h5>Madagascar Visit Company</h5>
          <p className="mt-3"></p>
        </div>
        <div className="langages">
          <div className="item">
            <p>React</p>
          </div>
          <div className="item">
            <p>React</p>
          </div>
          <div className="item">
            <p>React</p>
          </div>
          <div className="item">
            <p>React</p>
          </div>
        </div>
        <div className="buttons">
          <div className="btn-1">
            <button className="btn">
              <img src="/images/demo.svg" alt="" />
              View demo
            </button>
          </div>
          <div className="btn-2">
            <button className="btn">
              <img src="/images/git.png" alt="" />
              Github Link
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;

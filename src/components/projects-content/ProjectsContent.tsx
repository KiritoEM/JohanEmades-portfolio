import ProjectsCard from "../childrenComponents/ProjectsCard";
import dataHelper from "@/helpers/dataHelper";

const ProjectsContent = (): JSX.Element => {
  const { projectsData } = dataHelper();
  return (
    <section id="projects-content">
      <div className="row">
        {projectsData.map((item, index) => (
          <div className="col-4" key={index}>
            <ProjectsCard {...item} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsContent;

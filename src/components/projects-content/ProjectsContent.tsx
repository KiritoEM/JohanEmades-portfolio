import ProjectsCard from "../childrenComponents/ProjectsCard";
import dataHelper from "@/helpers/dataHelper";

const ProjectsContent = (): JSX.Element => {
  const { projectsData } = dataHelper();
  let reversedArray = projectsData.reverse();
  return (
    <section id="projects-content">
      <div className="row gy-4">
        {reversedArray.map((item, index) => (
          <div className="col-4" key={index}>
            <ProjectsCard {...item} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsContent;

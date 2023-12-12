import ProjectsCard from "../childrenComponents/ProjectsCard";

const ProjectsContent = (): JSX.Element => {
  return (
    <section id="projects-content">
      <div className="row">
        <div className="col-4">
          <ProjectsCard />
        </div>
      </div>
    </section>
  );
};

export default ProjectsContent;

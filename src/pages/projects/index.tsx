import Layout from "../Layout";
import PageHeading from "../PageHeading";
import ProjectsCover from "@/components/projects-cover/ProjectsCover";
import ProjectsContent from "@/components/projects-content/ProjectsContent";

const index = (): JSX.Element => {
  return (
    <Layout>
      <PageHeading title="All my projects" />
      <section id="projects-page">
        <main>
          <ProjectsCover />
          <ProjectsContent />
        </main>
      </section>
    </Layout>
  );
};

export default index;

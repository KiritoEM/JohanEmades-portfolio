import Layout from "../Layout";
import PageHeading from "../PageHeading";
import ProjectsCover from "@/components/projects-cover/ProjectsCover";

const index = (): JSX.Element => {
  return (
    <Layout>
      <PageHeading title="All my projects" />
      <section id="projects-page">
        <main>
          <ProjectsCover />
        </main>
      </section>
    </Layout>
  );
};

export default index;

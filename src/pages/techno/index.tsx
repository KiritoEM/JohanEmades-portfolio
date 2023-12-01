import Layout from "../Layout";
import PageHeading from "../PageHeading";
import TechnoCover from "@/components/techno-cover/TechnoCover";
import TechnoHero from "@/components/techno-hero/TechnoHero";
import Tools from "@/components/techno-tools/Tools";

const Techno = (): JSX.Element => {
  return (
    <Layout>
      <PageHeading title="My Stack" />
      <section id="Techno-page">
        <main>
          <TechnoCover />
          <TechnoHero />
          <Tools />
        </main>
      </section>
    </Layout>
  );
};
export default Techno;

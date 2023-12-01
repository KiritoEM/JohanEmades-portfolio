import Layout from "../Layout";
import PageHeading from "../PageHeading";
import TechnoCover from "@/components/techno-cover/TechnoCover";

const Techno = (): JSX.Element => {
  return (
    <Layout>
      <PageHeading title="My Stack" />
      <section id="Techno-page">
        <main>
          <TechnoCover />
        </main>
      </section>
    </Layout>
  );
};
export default Techno;

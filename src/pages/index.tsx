import Layout from "./Layout";
import metaHelper from "@/helpers/metaHelper";
import PageHeading from "./PageHeading";
import Hero from "@/components/home-hero/Hero";
import Overview from "@/components/home-overview/Overview";

const homePage = (): JSX.Element => {
  const { metaTitle } = metaHelper();
  return (
    <Layout>
      <PageHeading title={metaTitle.homeTitle} />
      <section id="home-page">
        {/* ===================home body=============== */}
        <main>
          <Hero />
          <Overview />
        </main>

        <footer></footer>
      </section>
    </Layout>
  );
};

export default homePage;

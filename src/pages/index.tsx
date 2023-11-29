import Layout from "./Layout";
import metaHelper from "@/helpers/metaHelper";
import PageHeading from "./PageHeading";
import Hero from "@/components/home-page/Hero";

const homePage = (): JSX.Element => {
  const { metaTitle } = metaHelper();
  return (
    <Layout>
      <PageHeading title={metaTitle.homeTitle} />
      <section id="home-page">
        {/* ===================home body=============== */}
        <main>
          <Hero />
        </main>

        <footer></footer>
      </section>
    </Layout>
  );
};

export default homePage;

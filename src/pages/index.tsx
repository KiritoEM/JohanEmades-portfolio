import Layout from "./Layout";
import metaHelper from "@/helpers/metaHelper";
import PageHeading from "./PageHeading";

const homePage = (): JSX.Element => {
  const { metaTitle } = metaHelper();
  return (
    <Layout>
      <PageHeading title={metaTitle.homeTitle} />
      <section id="home-page"></section>
    </Layout>
  );
};

export default homePage;

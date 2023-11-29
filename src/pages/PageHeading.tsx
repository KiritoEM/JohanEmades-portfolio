import Head from "next/head";
import React from "react";

interface Ititle {
  title: string;
}

const PageHeading: React.FC<Ititle> = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
};

export default PageHeading;

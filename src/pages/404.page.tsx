import Template from "@/components/templates/404.template";
import { NextPage } from "next";
import Head from "next/head";
import { Fragment } from "react";

const Page: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Not Found Page</title>
      </Head>
      <Template />
    </Fragment>
  );
};

export default Page;

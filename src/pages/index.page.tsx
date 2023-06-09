import Template from "@/components/templates/top.template";
import { NextPage } from "next";
import Head from "next/head";
import { Fragment, memo } from "react";

const Page: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Top Page</title>
      </Head>
      <Template />
    </Fragment>
  );
};

export default memo(Page);

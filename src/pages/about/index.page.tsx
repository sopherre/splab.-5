import { NextPage } from "next";
import { useRouter } from "next/router";
import { Fragment, memo } from "react";

const Page: NextPage = () => {
  const router = useRouter();

  return (
    <Fragment>
      <h1>About Page</h1>
      <button onClick={() => router.push("/")}>to Top Page</button>
    </Fragment>
  );
};

export default memo(Page);

import { NextPage } from "next";
import { Router, useRouter } from "next/router";
import { memo } from "react";

const Page: NextPage = () => {
  const router = useRouter();

  return (
    <div>
      <h1>Top Page</h1>
      <button onClick={() => router.push("/about")}>to About Page</button>
    </div>
  );
};

export default memo(Page);

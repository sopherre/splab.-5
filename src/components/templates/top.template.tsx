import { useRouter } from "next/router";

const Template: React.FC = () => {
  const router = useRouter();

  return (
    <div>
      <h1>Top Page</h1>
      <button onClick={() => router.push("/sample")}>to Sample Page</button>
    </div>
  );
};

export default Template;

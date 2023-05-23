import { useRouter } from "next/router";

const Template: React.FC = () => {
  const router = useRouter();

  return (
    <div>
      <h1>Not Found Page</h1>
      <button onClick={() => router.push("/")}>return to Top Page</button>
    </div>
  );
};

export default Template;

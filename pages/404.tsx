import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

interface Props {}

const PageNotFound: React.FC<Props> = ({}) => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);

  return (
    <div className="not-found">
      <h1>Oooops...</h1>
      <h2>That page cannot be found.</h2>
      <p>
        Go back to the{" "}
        <Link href={"/"}>
          <a>Homepage</a>
        </Link>
      </p>
    </div>
  );
};

export default PageNotFound;

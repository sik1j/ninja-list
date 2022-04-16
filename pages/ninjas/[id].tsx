import React from "react";
import { Ninja } from "./index";
import { GetStaticPaths, GetStaticProps } from "next";

interface Props {
  ninja: Ninja;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  const paths = data.map((ninja: Ninja) => {
    return {
      params: { id: ninja.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${context?.params?.id}`
  );
  let data = await response.json();
  // const id = context?.params?.id;
  // data = data[Number.parseInt(id as string) - 1];

  return {
    props: { ninja: data },
  };
};

const Details: React.FC<Props> = ({ ninja }) => {
  console.log(ninja);
  return (
    <div>
      <h1>{ninja.name}</h1>
      <p>{ninja.email}</p>
      <p>{ninja.website}</p>
      <p>{ninja.address.city}</p>
    </div>
  );
};

export default Details;

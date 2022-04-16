import React from "react";
import styles from "../../styles/Jobs.module.css";
import Link from "next/link";
import { GetStaticProps } from "next";

interface Props {
  ninjas: any;
}

export interface Ninja {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  return {
    props: {
      ninjas: data,
    },
  };
};

const Index: React.FC<Props> = ({ ninjas }) => {
  return (
    <div>
      <h1>All Ninjas</h1>
      {ninjas.map((ninja: Ninja) => (
        <div>
          <Link key={ninja.id} href={`ninjas/${ninja.id}`}>
            <a className={styles.single}>
              <h3>{ninja.name}</h3>
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Index;

import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
      </Head>
      <div>
        <h1 className={styles.title}>Hello World</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          omnis, accusamus temporibus eaque necessitatibus dignissimos?
          Laboriosam neque perferendis aliquid voluptatum porro repellendus?
          Quis quidem, eius aliquid iusto voluptas fugiat fuga.
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          omnis, accusamus temporibus eaque necessitatibus dignissimos?
          Laboriosam neque perferendis aliquid voluptatum porro repellendus?
          Quis quidem, eius aliquid iusto voluptas fugiat fuga.
        </p>
        <Link href={"/ninjas"}>
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  );
};

export default Home;

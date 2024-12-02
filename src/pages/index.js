import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>GymBull</title>
        <meta name="description" content="Discover the future of personal training!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>Join the Fitness Revolution!</h1>
      </main>
    </>
    )
  }
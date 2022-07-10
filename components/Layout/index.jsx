import Head from "next/head";
import Link from "next/link";
import React from "react";
import { Avatar } from "../Avatar";
import { Navbar } from "../Navbar";
import styles from "./index.module.scss";
export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Minimal Life</title>
        <meta name="description" content="Minimal Life Blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <Avatar />
        <Navbar />
      </header>
      <main className={styles.main}>{children}</main>
      {/* <footer>123</footer> */}
    </div>
  );
}
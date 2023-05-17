import styles from "./page.module.css";
import Container from "./components/Container";
import React from "react";

export default function Home() {
  return (
    <main className={styles.main}>
      <Container>home</Container>
    </main>
  );
}

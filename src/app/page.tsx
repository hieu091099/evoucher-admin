import Image from "next/image";
import styles from "./page.module.css";
import Container from "./components/Container";

export default function Home() {
  return (
    <main className={styles.main}>
      <Container>home</Container>
    </main>
  );
}

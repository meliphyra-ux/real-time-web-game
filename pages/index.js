import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.scss';
;
import Button from '../components/button/Button.component';

export default function Home() {
  return (
    <>
      <Head>
        <title>Real Time Web Game</title>
        <meta
          name="description"
          content="Project created by fans of Horoshenyk"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.main}>
        <h1>Welcome to The Real Time Web Game</h1>
        <h2>Created By Horoshenyk fans</h2>
        <Link href="/login">
          <Button style="inverted">
            Login
          </Button>
        </Link>
      </div>
    </>
  );
}

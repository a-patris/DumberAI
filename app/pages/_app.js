import '../styles/globals.css';
import Head from 'next/head';

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Dumber AI, the new ChatGPT for all students</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;

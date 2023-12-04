import '../styles/globals.css';
import Head from 'next/head';

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>NDumber AI, the new ChatGPT for "La Capsule" students</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;

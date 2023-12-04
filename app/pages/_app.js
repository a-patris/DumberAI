import '../styles/globals.css';
import Head from 'next/head';

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Dumber AI, the new ChatGPT for all students</title>
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5BGSWBMQ"
          height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;

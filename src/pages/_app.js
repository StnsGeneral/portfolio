import Theme from '../styles/theme';

export default function App({ Component, pageProps }) {
  return (
    <>
      <head>
        <title>Tristan Miller's Portfolio</title>
      </head>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}

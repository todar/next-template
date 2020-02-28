import Head from "next/head";
import Layout from "../components/layout";
import { AppProvider } from "../context/AppContext";
import "../styles.css";

/**
 * This overides Next.js default `App`. This allows
 * the ability to persist layout between pages,
 * keep state when navigating pages, inject additional data
 * into pages.
 * @see https://nextjs.org/docs/advanced-features/custom-app
 * @param {*} Component The `Component` prop is the active `page`
 * @param {Object} pageProps is an object with the initial props that were
 *                           preloaded for your page, it's an empty object if
 *                           the page is not using `getInitialProps`.
 */
function App({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
          key="viewport"
        />
        <link rel="shortcut icon" href="/favicon.ico" key="favicon" />
      </Head>
      <AppProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AppProvider>
    </React.Fragment>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// App.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default App;

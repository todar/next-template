import Head from "next/head";
import content from "../../content/about-page.md";

function AboutPage() {
  const { attributes, html } = content;
  return (
    <React.Fragment>
      <Head>
        <title>{attributes.title}</title>
      </Head>
      <h1>{attributes.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <style jsx>{`
        h1,
        div {
          text-align: center;
        }
      `}</style>
    </React.Fragment>
  );
}

export default AboutPage;

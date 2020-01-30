import Head from 'next/head';
import content from '../content/home-page.md';
import { useContext as useCustomContext, types } from '../context/TemplateContext';

function HomePage() {
  const [state, dispatch] = useCustomContext();
  const { attributes, html } = content;
  return (
    <React.Fragment>
      <Head>
        <title>{attributes.title}</title>
      </Head>
      <section className="container">
        <div dangerouslySetInnerHTML={{ __html: html }} />
        <input
          value={state.value}
          onChange={e => dispatch({ type: types.SET_VALUE, payload: { value: e.target.value } })}
        />
      </section>
      <style jsx>{`
        h1,
        div {
          text-align: center;
        }

        section {
          text-align: center;
        }
      `}</style>
    </React.Fragment>
  );
}

export default HomePage;

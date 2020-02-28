import Head from "next/head";
import content from "../../content/blog-page.md";
import Link from "next/link";

function BlogPage({ blogPosts }) {
  const { attributes } = content;
  return (
    <React.Fragment>
      <Head>
        <title>{attributes.title}</title>
      </Head>
      <div className="Blog-posts container">
        {blogPosts.map(post => {
          return (
            <Link key={post.slug} href={`blog/post/${post.slug}`}>
              <a>
                <h2>{post.attributes.title}</h2>
                <img src={post.attributes.thumbnail} />
              </a>
            </Link>
          );
        })}
        <style jsx>{`
          .Blog-posts {
            display: grid;
            justify-content: space-evenly;
            gap: 1rem;
            grid-template-columns: auto auto;
          }

          h2 {
            margin: 0 0 5px;
          }

          a {
            text-decoration: none;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            padding: 16px;
            border-radius: 4px;
            border: 1px solid rgba(0, 0, 0, 0.2);
          }
          img {
            max-width: 100%;
            max-height: 100px;
          }
        `}</style>
      </div>
    </React.Fragment>
  );
}

// This imports blog posts from the blog post Markdown files
// and dynamically creates them.
// This is an adaptation from the article I read:
// @see https://medium.com/@shawnstern/importing-multiple-markdown-files-into-a-react-component-with-webpack-7548559fce6f
const importBlogPosts = async () => {
  // second flag in require.context function is if subdirectories should be searched
  const markdownFiles = require
    .context("../../content/blogPosts", false, /\.md$/)
    .keys()
    .map(relativePath => relativePath.substring(2));
  return Promise.all(
    markdownFiles.map(async path => {
      const markdown = await import(
        `../../content/blogPosts/${path}`
      );
      return {
        ...markdown,
        slug: path.substring(0, path.length - 3),
      };
    })
  );
};

// This will run in build time since this app is statically generated.
BlogPage.getInitialProps = async context => {
  const blogPosts = await importBlogPosts();
  return { blogPosts };
};

export default BlogPage;

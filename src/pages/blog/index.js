import Link from "next/link";

const importBlogPosts = async () => {
  // https://webpack.js.org/guides/dependency-management/#requirecontext
  const markdownFiles = require
    .context("../../content/blogPosts", false, /\.md$/)
    .keys()
    .map(relativePath => relativePath.substring(2));

  return Promise.all(
    markdownFiles.map(async path => {
      const markdown = await import(`../../content/blogPosts/${path}`);
      return { ...markdown, slug: path.substring(0, path.length - 3) };
    })
  );
};

const Blog = ({ postsList }) => (
  <>
    {postsList.map(post => (
      <div key={post.slug} className="post">
        <Link href="/blog/post/[slug]" as={`/blog/post/${post.slug}`}>
          <a>
            <img src={post.attributes.thumbnail} />
            <h2>{post.attributes.title}</h2>
          </a>
        </Link>
      </div>
    ))}
    <style jsx>{`
      .post {
        text-align: center;
      }
      img {
        max-width: 100%;
        max-height: 300px;
      }
    `}</style>
  </>
);

Blog.getInitialProps = async () => {
  const postsList = await importBlogPosts();
  return { postsList };
};

export default Blog;

function Post(props) {
  const {
    html,
    attributes: { thumbnail, title },
  } = props.blogpost.default;

  if (!props.blogpost) return <div>not found</div>;
  return (
    <>
      <article>
        <h1>{title}</h1>
        <img src={thumbnail} />
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </article>
      <style jsx>{`
        article {
          margin: 0 auto;
        }
        h1 {
          text-align: center;
        }
      `}</style>
    </>
  );
}

Post.getInitialProps = async context => {
  const { slug } = context.query;
  const blogpost = await import(`../../../content/blogPosts/${slug}.md`).catch(error => null);

  return { blogpost };
};

export default Post;

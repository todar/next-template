import Link from "next/link";

function NavLink({ to, text }) {
  return (
    <React.Fragment>
      <Link href={to}>
        <a>{text}</a>
      </Link>
      <style jsx>{`
        a {
          padding: 14px;
          text-decoration: none;
          color: #fff;
          transition: 0.2s;
          text-align: center;
        }

        a:hover {
          background: #222;
        }
      `}</style>
    </React.Fragment>
  );
}

/**
 * This is the main layout that will be shared between each page.
 * @param {*} children This will be each page as it is passed in through our
 *                     custom `_app.js` file.
 */
function Layout({ children }) {
  return (
    <React.Fragment>
      <nav>
        <div className="container">
          <NavLink to={"/"} text={"Home"} />
          <NavLink to={"/blog"} text={"Blog"} />
          <NavLink to={"/about"} text={"About"} />
        </div>
      </nav>
      <main>{children}</main>
      <style jsx>{`
        nav {
          height: 50px;
          background: #333;
        }
        nav .container {
          display: flex;
          align-items: center;
        }
        main {
          display: flex;
          flex-direction: column;
          margin-top: 10px;
        }
        .container {
          margin: 0 auto;
          max-width: 80%;
        }
      `}</style>
    </React.Fragment>
  );
}

export default Layout;

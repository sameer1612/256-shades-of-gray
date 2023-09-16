export default function Header() {
  return (
    <nav className="navbar bg-info shadow-sm">
      <div className="container-fluid mx-4">
        <h1 className="navbar-brand text-light mb-0">256 Shades of Gray</h1>
        <a
          href="http://github.com/sameer1612/256-shades-of-gray"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-light btn-sm text-muted"
        >
          Github
          <i className="ms-2 bi bi-box-arrow-up-right"></i>
        </a>
      </div>
    </nav>
  );
}

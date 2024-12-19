import { Link } from "react-router-dom";

const Header = ({urlLogo, children}) => {
  return (
    <header className="header">

      <nav className="nav">
        <button>
            <Link to={`/authors`}>Authors</Link>
        </button>
        <button>
            <Link to={`/books`}>Books</Link>
        </button>
      </nav>
    </header>
  );
};

export default Header;

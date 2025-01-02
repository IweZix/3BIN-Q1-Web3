import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <nav className="nav" style={{ display: "flex", justifyContent: "center" }}>
        <button>
            <Link to={`/`}>Home</Link>
        </button>
        <button>
            <Link to={`/famous-jokes`}>Gestion de blagues</Link>
        </button>
      </nav>
    </header>
  );
};

export default Header;

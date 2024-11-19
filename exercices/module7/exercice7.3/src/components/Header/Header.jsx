import { Link, Outlet, useMatch, useNavigate } from "react-router-dom";
import "./Header.css";
import CinemaPage from "components/Pages/CinemaPage";
import HomePage from "components/Pages/HomePage";
import MovieListPage from "components/Pages/MovieListPage";

const Header = ({urlLogo, children}) => {
  return (
    <header className="header">
      <img src={urlLogo} alt="logo" className="logo" />
      <div>{children}</div>

      <nav className="nav">
        <Link to={`/home`}>Home</Link>
        <Link to={`/cinema`}>Cinema</Link>
        <Link to={`/movie-list`}>Movie List</Link>
      </nav>
    </header>
  );
};

export default Header;

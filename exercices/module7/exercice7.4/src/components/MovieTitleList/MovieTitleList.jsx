import { Link } from 'react-router-dom';

export const MovieTitleList = ({ movies }) => {
    return (
        <div>
            <ul>
                {movies.map((movie, index) => (
                    <li key={index}>
                        <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

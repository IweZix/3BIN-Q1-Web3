import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <div>
            <div>
                <p>Amazing Guess a Word Game</p>
            </div>
            <div>
                <button>
                    <Link to={`/`}>Play</Link>
                </button>
                <button>
                    <Link to={`/add-word`}>Add word</Link>
                </button>
            </div>
        </div>
    );
}

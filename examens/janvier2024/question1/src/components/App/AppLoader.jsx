import { JokesProvider } from "contexts/JokesContext";
import App from "components/App/App";

export const AppLoader = () => {
    return (
        <JokesProvider>
            <App />
        </JokesProvider>
    );
};
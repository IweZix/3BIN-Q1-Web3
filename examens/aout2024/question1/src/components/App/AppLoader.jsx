
import { BookProvider } from "contexts/BookContext";
import App from "components/App/App";

export const AppLoader = () => {
    return (
        <BookProvider>
            <App />
        </BookProvider>
    );
}

import { createContext, useState, useEffect } from "react";
import axios from "axios";

const JokesContext = createContext();

const JokesProvider = ({ children }) => {
    const [jokes, setJokes] = useState([]);

    const fetchJokes = async () => {
        console.log('fetching jokes');
        try {
            const res = await axios.get('http://localhost:3000/famous-jokes');
            setJokes(res.data);
        } catch (error) {
            console.error('Error fetching jokes:', error);
        }
    }

    const updateJokeState = async (jokeId, newimageUrl) => {
        try {
            await axios.patch(`http://localhost:3000/famous-jokes/${jokeId}`, { imageUrl: newimageUrl });
            fetchJokes();
        } catch (error) {
            console.error('Error updating joke state:', error);
        }
    }

    useEffect(() => {
        fetchJokes();
    }, []);

    return (
        <JokesContext.Provider value={{ jokes, updateJokeState, fetchJokes }}>
            {children}
        </JokesContext.Provider>
    );
};

export {
    JokesContext,
    JokesProvider
}
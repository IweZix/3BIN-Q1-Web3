import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const BookContext = createContext();

const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    console.log('fetching books');
    try {
      const response = await axios.get('http://localhost:3000/books');
      setBooks(response.data);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  const updateBookState = async (bookId, newState) => {
    try {
      await axios.patch(`http://localhost:3000/books/${bookId}`, { state: newState });
      fetchBooks(); // Re-fetch books after updating the state
    } catch (error) {
      console.error('Error updating book state:', error);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <BookContext.Provider value={{ books, updateBookState, fetchBooks }}>
      {children}
    </BookContext.Provider>
  );
};

export { BookContext, BookProvider };
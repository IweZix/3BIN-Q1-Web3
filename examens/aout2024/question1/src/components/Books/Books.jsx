import { useContext } from 'react';
import { BookContext } from '../../contexts/BookContext';

export const Books = () => {
  const { books, updateBookState } = useContext(BookContext);

  const handleStateChange = (e, bookId) => {
    const newState = e.target.value;
    updateBookState(bookId, newState);
  };

  return (
    <div>
      <h2>All Books</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>State</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>
                <select value={book.state} onChange={(e) => handleStateChange(e, book.id)}>
                  <option value="read">lu</option>
                  <option value="to_read">à lire</option>
                  <option value="reading">en cours de lecture</option>
                </select>
              </td>
              <td>
                <button onClick={() => updateBookState(book.id, book.state)}>Mettre à jour l’état</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

import React from 'react';
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_BOOK, ALL_BOOKS } from '../../queries/queries';

export const AddBook = (props) => {
    const [ title, setTitle ] = useState('');
    const [ author, setAuthor ] = useState('');
    const [ published, setPublished ] = useState('');
    const [ genres, setGenres ] = useState([]);

    const [ addBook ] = useMutation(ADD_BOOK, {
        refetchQueries: [ { query: ALL_BOOKS } ],
        onError: (error) => {
            const msg = error.graphQLErrors.map(e => e.message).join('\n');
            console.log(msg);
        }
    });

    const submit = (event) => {
        event.preventDefault();

        addBook({ variables: { title, author, published, genres } });

        setTitle('');
        setAuthor('');
        setPublished('');
        setGenres([]);
    };

    return (
        <div>
            <h2>add book</h2>
            <form onSubmit={submit}>
                <div>
                    title 
                    <input value={title}
                        onChange={({ target }) => setTitle(target.value)}
                    />
                </div>
                <div>
                    author 
                    <input value={author}
                        onChange={({ target }) => setAuthor(target.value)}
                    />
                </div>
                <div>
                    published 
                    <input value={published}
                        onChange={({ target }) => setPublished(Number(target.value))}
                    />
                </div>
                <div>
                    genres 
                    <input value={genres}
                        onChange={({ target }) => setGenres(target.value)}
                    />
                </div>
                <button type='submit'>add book</button>
            </form>
        </div>
    );
}

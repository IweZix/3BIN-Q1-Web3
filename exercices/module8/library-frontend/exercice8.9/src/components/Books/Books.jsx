import React from 'react';
import { useQuery } from '@apollo/client';
import { ALL_BOOKS } from '../../queries/queries';

export const Books = (props) => {
    const result = useQuery(ALL_BOOKS, {
        pollInterval: 2000
    });

    if (result.loading) {
        return <div>loading...</div>
    }

    return (
        <div>
            <h2>Books</h2>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>
                            author
                        </th>
                        <th>
                            published
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {result.data.allBooks.map(b =>
                        <tr key={b.title}>
                            <td>{b.title}</td>
                            <td>{b.author.name}</td>
                            <td>{b.published}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

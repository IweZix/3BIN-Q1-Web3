import { useQuery } from '@apollo/client'
import { ALL_AUTHORS } from '../../queries/queries';
import { SetBorn } from './SetBorn';

export const Authors = () => {
    const result = useQuery(ALL_AUTHORS, {
        pollInterval: 2000
    });

    if (result.loading) {
        return <div>loading...</div>
    }
    
    return (
        <div>
            <h2>Authors</h2>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>
                            born
                        </th>
                        <th>
                            books
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {result.data.allAuthors.map(a =>
                        <tr key={a.name}>
                            <td>{a.name}</td>
                            <td>{a.born}</td>
                            <td>{a.bookCount}</td>
                        </tr>
                    )}
                </tbody>
            </table>
            <SetBorn />
        </div>
    );
}

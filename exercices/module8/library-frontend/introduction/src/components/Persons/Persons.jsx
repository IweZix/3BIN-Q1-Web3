import { gql, useQuery } from '@apollo/client'
import { Person } from '../Person/Person';
import { useState } from 'react';
import { FIND_PERSON } from '../../queries/queries';

export const Persons = ({ persons }) => {
    const [nameToSearch, setNameToSearch] = useState(null);
    const result = useQuery(FIND_PERSON, {
        variables: { nameToSearch },
        skip: !nameToSearch
    });

    if (nameToSearch && result.data) {
        return (
            <Person
                person={result.data.findPerson}
                onClose={() => setNameToSearch(null)}
            />
        )
    }

    return (
        <div>
            <div>
                <h2>Persons</h2>
                {persons.map(p =>
                    <div key={p.id}>
                        {p.name} {p.phone}
                        <button onClick={() => setNameToSearch(p.name)} >
                            show address
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

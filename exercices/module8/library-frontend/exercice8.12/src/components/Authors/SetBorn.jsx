import React from 'react';
import { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { ALL_AUTHORS, SET_DATE } from '../../queries/queries';

export const SetBorn = (props) => {
    const [ name, setName ] = useState('');
    const [ born, setBorn ] = useState('');

    const result = useQuery(ALL_AUTHORS)
    
    if (result.loading) {
        return <div>loading...</div>
    }
    

    const [ setBornDate ] = useMutation(SET_DATE, {
        refetchQueries: [ { query: ALL_AUTHORS } ],
        onError: (error) => {
            const msg = error.graphQLErrors.map(e => e.message).join('\n');
            console.log(msg);
        }
    });

    const submit = (event) => {
        event.preventDefault();

        setBornDate({ variables: { name, born} });

        setName('');
        setBorn('');
    }


    return (
        <div>
            <h2>Set birthyear</h2>
            <form onSubmit={submit}>
                <div>
                    name 
                    <select value={name} onChange={({ target }) => setName(target.value)}>
                        {result.data.allAuthors.map(a =>
                            <option key={a.name} value={a.name}>{a.name}</option>
                        )}
                    </select>
                </div>
                <div>
                    born 
                    <input value={born}
                        onChange={({ target }) => setBorn(Number(target.value))}
                    />
                </div>
                <button type='submit'>update author</button>
            </form>
        </div>
    );
}

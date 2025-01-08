import { useMutation } from "@apollo/client";
import { useState } from "react";
import { ADD_WORD, ALL_WORDS } from "../../queries/queries";

export const AddWord = () => {
    const [word, setWord] = useState('');
    const [hint1, setHint1] = useState('');
    const [hint2, setHint2] = useState('');
    const [hint3, setHint3] = useState('');

    const [ addWord ] = useMutation(ADD_WORD, {
        refetchQueries: [ { query: ALL_WORDS } ],
        onError: (error) => {
            const msg = error.graphQLErrors.map(e => e.message).join('\n');
            if (msg.includes('word must be unique')) {
                document.querySelector('.msg').style.color = 'red';
                document.querySelector('.msg').innerHTML = `word "${word}" already exists`;
            } else {
                document.querySelector('.msg').style.color = 'red';
                document.querySelector('.msg').innerHTML = `Error: ${msg}`;
            }
        }
    });

    const submit = async (event) => {
        event.preventDefault();

        const result = await addWord({ variables: { word, hints: [hint1, hint2, hint3] } });

        if (result.data.addWord) {
            document.querySelector('.msg').style.color = 'green';
            document.querySelector('.msg').innerHTML = `Word added successfully`;
        }

        setWord('');
        setHint1('');
        setHint2('');
        setHint3('');
    }

    return (
        <div>
            <h1>Add a word</h1>
            <form onSubmit={submit}>
                <div>
                    word:
                    <input value={word}
                        onChange={({ target }) => setWord(target.value)}
                    />
                </div>
                <div>
                    hint:
                    <input value={hint1}
                        onChange={({ target }) => setHint1(target.value)}
                    />
                </div>
                <div>
                    <input value={hint2}
                        onChange={({ target }) => setHint2(target.value)}
                    />
                </div>
                <div>
                    <input value={hint3}
                        onChange={({ target }) => setHint3(target.value)}
                    />
                </div>
                <button type='submit'>add word</button>
            </form>
            <div className="msg"></div>
        </div>
    );
}

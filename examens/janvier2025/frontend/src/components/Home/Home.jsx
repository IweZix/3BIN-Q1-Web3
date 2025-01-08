import { useQuery } from '@apollo/client';
import { ALL_WORDS } from '../../queries/queries';
import { useState, useEffect } from 'react';

export const Home = () => {
    const [errors, setErrors] = useState(0);
    const [actualWord, setActualWord] = useState(0);
    const [won, setWon] = useState(false);

    const result = useQuery(ALL_WORDS, {
        pollInterval: 2000
    });

    useEffect(() => {
        const hint2Timer = setTimeout(() => {
            if (document.querySelector('.hint2')) {
                document.querySelector('.hint2').style.display = 'block';
            }
        }, 5000);

        const hint3Timer = setTimeout(() => {
            if (document.querySelector('.hint3')) {
                document.querySelector('.hint3').style.display = 'block';
            }
        }, 10000);

        return () => {
            clearTimeout(hint2Timer);
            clearTimeout(hint3Timer);
        };
    }, [actualWord]);

    if (result.loading) {
        return <div>loading...</div>
    }

    if (result.data.allWords.length == 0) {
        return (
            <div>
                <h1>Play</h1>
                <h2>Please add some words to guess</h2>
            </div>
        );
    }

    const submit = (event) => {
        event.preventDefault();

        const word = event.target[0].value;
        if (word == result.data.allWords[actualWord].word) {
            setWon(true);
        } else {
            setErrors(errors + 1);
        }
    }

    const playAgain = (event) => {
        event.preventDefault();
        setActualWord(actualWord + 1);
        setWon(false);
    }

    if (won) {
        // clear timeout
        

        if (actualWord == result.data.allWords.length - 1) {
            return (
                <div>
                    <h1>Play</h1>
                    <h2>Welcome to guess a word game</h2>
                    <h2>Error count : {errors}</h2>
                    <h2>You won!</h2>
                    <h2>No more new game to play</h2>
                </div>
            );
        }

        return (
            <div>
                <h1>Play</h1>
                <h2>Welcome to guess a word game</h2>
                <h2>Error count : {errors}</h2>
                <form onSubmit={playAgain}>
                    <h2>You won!</h2>
                    <button>Play again</button>
                </form>
            </div>
        );
    }

    return (
        <div>
            <h1>Play</h1>
            <h2>Welcome to guess a word game</h2>
            <h2>Error count : {errors}</h2>

            <div>
                <h2>Hint n°1: {result.data.allWords[actualWord].hints[0]}</h2>
                <h2 className='hint2' style={{display: 'none'}}>Hint N°2: {result.data.allWords[actualWord].hints[1]}</h2>
                <h2 className='hint3' style={{display: 'none'}}>Hint N°3: {result.data.allWords[actualWord].hints[2]}</h2>    
            </div>
            <form onSubmit={submit}>
                <input type="text" placeholder="Enter the word" />
                <button>Submit</button>
            </form>
            <div className="msg"></div>
        </div>
    );
}

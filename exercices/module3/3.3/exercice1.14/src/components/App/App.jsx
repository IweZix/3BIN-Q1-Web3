import { useState } from 'react'
import { Button } from 'components/Button/Button';


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
   
  const [selected, setSelected] = useState(0)

  const generateNewAnecdote = () => {
    const random = Math.floor(Math.random() * 7);
    return setSelected(random);
  }

  const [votes, setVote] = useState([0, 0, 0, 0, 0, 0, 0])

  const vote = () => {
    let copy = [...votes]
    copy[selected]++;
    setVote(copy);
  }

  let anecdoteWithMostVotes = 0;

  const mostVote = () => {
    let nbZero = 0;
    for (let i = 0; i < votes.length; i++) {
      if (votes[i] === 0) {
        nbZero++;
      }
      if (votes[i] > votes[anecdoteWithMostVotes]) {
        anecdoteWithMostVotes = i;
      }
    }
    if (nbZero === votes.length) {
      return -1;
    }
    return anecdoteWithMostVotes;
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <br />
      has {votes[selected]} votes
      <Button handler={generateNewAnecdote} text={'next anecdote'}/>
      <Button handler={vote} text={'vote'}/>

      <h1>Anecdote with most votes</h1>
      {mostVote() === -1 ? 'No votes yet' : anecdotes[mostVote()]}
      <br />
      {mostVote() === -1 ? '' : `has ${votes[mostVote()]} votes`}
    </div>
  )
}

export default App
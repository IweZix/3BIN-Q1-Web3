import { Button } from 'components/Button/Button'
import { Title } from 'components/Display/Title'
import { StatisticLine } from 'components/Display/StatisticLine'
import { Average } from 'components/Display/Average'
import { Positive } from 'components/Display/Positive'
import { useState } from 'react'

const Stats = ({ good, neutral, bad }) => {
  if (good === 0 && neutral === 0 && bad === 0) {
    return (
      <div>
        <Title title={'Statistics'} />
        No feedback given
      </div>
    )
  } else {
    return (
      <div>
        <Title title={'Statistics'} />
        <table>
          <tbody>
            <StatisticLine value={good} text={'Good'} />
            <StatisticLine value={neutral} text={'Neutral'} />
            <StatisticLine value={bad} text={'Bad'} />
            <Average average={(good - bad) / (good + neutral + bad) || 0} />
            <Positive positive={(good / (good + neutral + bad)) * 100 || 0} />
          </tbody>
        </table>
      </div>
    )
  }
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Title title={'Give feedback'} />
      <Button handleClick={() => setGood(good + 1)} text={'Good'} />
      <Button handleClick={() => setNeutral(neutral + 1)} text={'Neutral'} />
      <Button handleClick={() => setBad(bad + 1)} text={'Bad'} />
      
      <Stats good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
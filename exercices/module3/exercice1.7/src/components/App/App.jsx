import { Button } from 'components/Button/Button'
import { Title } from 'components/Display/Title'
import { Value } from 'components/Display/Value'
import { Average } from 'components/Display/Average'
import { Positive } from 'components/Display/Positive'
import { useState } from 'react'

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
      
      <Title title={'Statistics'} />
      <Value value={good} text={'Good'} />
      <Value value={neutral} text={'Neutral'} />
      <Value value={bad} text={'Bad'} />
      <Average average={(good-bad)/(good+neutral+bad) || 0} />
      <Positive positive={(good/(good+neutral+bad))*100 || 0} />
    </div>
  )
}

export default App
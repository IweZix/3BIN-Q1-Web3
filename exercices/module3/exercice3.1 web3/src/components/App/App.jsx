import { useState } from 'react'

import { Button } from 'components/Button/Button'
import { Title } from 'components/Display/Title'
import { Stats } from 'components/Stats/Stats'

const Loading = () => {
  return (
    <div>
      Loading...
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [loading, setLoading] = useState(true)

  setTimeout(() => setLoading(false), 3000)

  if (loading === true) {
    return (
      <Loading />
    )
  } else {
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
}

export default App
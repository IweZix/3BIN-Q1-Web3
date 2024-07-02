import { useState } from "react"
import Display from "components/Display/Display"
import Button from "components/Button/Button"

const App = () => {
  const [counter, setCounter] = useState(0)

  const changeCount = (delta) => {
    if (delta === 0) {
      return () => {
        setCounter(0)
      }
    }
    return () => {
      setCounter(counter + delta)
    }
  }

  return (
    <div>
      <Display counter={counter} />
      <Button changeCount={changeCount(+1)} text="plus" delta={1}/>
      <Button changeCount={changeCount(0)} text="zero" delta={0}/>
      <Button changeCount={changeCount(-1)} text="minus" delta={-1}/>
    </div>
  )
} 

export default App
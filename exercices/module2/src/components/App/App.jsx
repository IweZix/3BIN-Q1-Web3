import { Button } from 'components/Button/Button'
import { Display } from 'components/Display/Display'
import { useState } from 'react'

const App = () => {
  const basicValue = JSON.parse(localStorage.getItem("counter")) || 0;
  let [counter, setCounter] = useState(basicValue);

  const changeCount = (delta) => {
    setCounter(currentCounter => {
      const updatedCounter = currentCounter + delta;
      localStorage.setItem("counter", JSON.stringify(updatedCounter));
      return updatedCounter;
    });
  }

  return (
    <div>
      <Display counter={counter} />
      <Button changeCount={changeCount} text="plus" delta={1}/>
      <Button changeCount={changeCount} text="zero" delta={-counter}/>
      <Button changeCount={changeCount} text="minus" delta={-1}/>
    </div>
  )
} 

export default App
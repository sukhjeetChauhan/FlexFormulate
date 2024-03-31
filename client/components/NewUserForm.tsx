import { useState } from 'react'
import ChooseDays from './ChooseDays'
import ChooseMuscle from './ChooseMuscle'

export default function NewUserForm() {
  const [workoutDays, setWorkoutDays] = useState([])

  const handlerFunction = (data) => {
    setWorkoutDays(data)
  }
  return (
    <>
      <ChooseDays fn={handlerFunction} val={workoutDays} />
      <ChooseMuscle />
      <button onClick={() => console.log(workoutDays)}>button</button>
    </>
  )
}

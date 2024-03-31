import { useState } from 'react'
import ChooseDays from './ChooseDays'
import ChooseMuscle from './ChooseMuscle'

export default function NewUserForm() {
  const [workoutDays, setWorkoutDays] = useState([])
  const [status, setStatus] = useState(false)

  const handlerFunction = (data) => {
    setWorkoutDays(data)
  }
  return (
    <>
      <ChooseDays
        fn={handlerFunction}
        val={workoutDays}
        setStatus={setStatus}
      />
      {status && <ChooseMuscle val={workoutDays} />}
    </>
  )
}

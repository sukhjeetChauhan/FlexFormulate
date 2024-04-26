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
    <div className="div-container">
      <h1>User Exercise Preferences</h1>
      <ChooseDays
        fn={handlerFunction}
        val={workoutDays}
        setStatus={setStatus}
      />
      {status && <ChooseMuscle val={workoutDays} />}
    </div>
  )
}

// import { workoutDays, workoutWeek } from '../../data/general'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { addSchedule } from '../api/scheduleDbApi'
import { useAuth0 } from '@auth0/auth0-react'
import { useGetUserByAuth } from './Hooks'

function ChooseMuscle({ val: workoutDays }) {
  const navigate = useNavigate()
  const initialCountState = workoutDays.map(() => 1)

  const [count, setCount] = useState(initialCountState) // This state will track number of workouts chosen for each day.
  const [data, setData] = useState({})

  const { user } = useAuth0()

  const authId = user?.sub

  const { data: currentUser, isLoading, isError } = useGetUserByAuth(authId)

  // ///////////////////////////////////////////////////////////////////////////////////////
  function insertOptionsHtml(day: string, count: number) {
    const choiceArray = []
    const choice = function (day: string, num: number) {
      return (
        <select
          key={`${day}-${num}`}
          className={`${day}-${num} options`}
          name={`${day}${num}`}
          onChange={handleChange}
        >
          <option value="">Select your muscle</option>
          <option value="back">Back</option>
          <option value="chest">Chest</option>
          <option value="shoulders">Shoulders</option>
          <option value="neck">Neck</option>
          <option value="lower%20arms">Lower Arms</option>
          <option value="upper%20arms">Upper Arms</option>
          <option value="lower%20legs">Lower Legs</option>
          <option value="upper%20legs">Upper Legs</option>
          <option value="cardio">Cardio</option>
          <option value="waist">Waist</option>
        </select>
      )
    }

    for (let i = 0; i < count; i++) {
      choiceArray.push(choice(day, i))
    }
    return choiceArray
  }

  // ////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  function handleChange(e) {
    console.log(e.target.value)
  }

  function handleData(e) {
    e.preventDefault()
    const workoutWeek = {}
    workoutDays.forEach((day: string, index: number) => {
      const res = []
      for (let i = 0; i < count[index]; i++) {
        res.push(e.target[`${day}${i}`].value)
      }
      const val = res.join('_')
      workoutWeek[day] = val
    })
    workoutWeek.created_by = currentUser[0]?.id
    addSchedule(workoutWeek)
    navigate(`/user/${currentUser[0]?.id}`)
    console.log(workoutWeek)
  }

  const result =
    workoutDays.length !== 0 ? (
      <fieldset className="choose-muscleGroup">
        <legend>Choose a muscle group for each chosen day</legend>
        <form onSubmit={handleData}>
          {workoutDays.map((day, i) => (
            <div key={day}>
              <label htmlFor={day}>{day[0].toUpperCase() + day.slice(1)}</label>
              <div className={`options options-${day}`}>
                {insertOptionsHtml(day, count[i]).map((choice) => choice)}
                <button
                  type="button"
                  onClick={() => {
                    const array = count.map((num, index) => {
                      const result = i === index && num < 3 ? num + 1 : num // adds 1 to the element whose add button is clicked.

                      return result
                    })
                    setCount(array)

                    // setValue(value[day]) //need to figure out to increase value having error
                  }}
                  className={`add add-${day}`}
                >
                  +
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const array = count.map((num, index) => {
                      const result = i === index && num > 1 ? num - 1 : num // subtract 1 to the element whose sub button is clicked.

                      return result
                    })
                    setCount(array)
                  }}
                  className={`sub sub-${day}`}
                >
                  -
                </button>
              </div>
            </div>
          ))}
          <button type="submit" className="muscleGroup-submit">
            Submit
          </button>
        </form>
      </fieldset>
    ) : (
      <>
        <h1>No Workout days selected </h1>
        <button>
          <link to="/newUserForm">Go Back</link>
        </button>
      </>
    )
  return result
}

export default ChooseMuscle

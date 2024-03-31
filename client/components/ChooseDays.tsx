import { days } from '../../data/general'
// import { workoutDays } from '../../data/general'
import { Link } from 'react-router-dom'

function ChooseDays({ fn: handlerFunction, val: workoutDays }) {
  function handleChange(e: { target: { checked: any; value: any } }) {
    const isChecked = e.target.checked
    const nonWorkingDay = !isChecked && e.target.value

    const workoutDay: string = isChecked && e.target.value
    if (workoutDay) {
      workoutDays.includes(workoutDay) || workoutDays.push(workoutDay) //pushes the value of workout day if it does not include in the workout array
    } else {
      const index = workoutDays.findIndex((day) => day === nonWorkingDay) //removes the value from workout days array if unchecked
      workoutDays.splice(index, 1)
    }
    handlerFunction(workoutDays)
  }

  return (
    <fieldset>
      <legend>What days would you like to workout?</legend>
      {days.map((day) => (
        <div key={day}>
          <input
            key={day}
            className="day"
            onChange={handleChange}
            id={day}
            value={day}
            type="checkbox"
          />
          <label key={`label-${day}`} htmlFor={day}>
            {day[0].toUpperCase() + day.slice(1)}
          </label>
        </div>
      ))}
      <button className="day-submit">
        <Link to="/welcome/chooseMuscle">Submit</Link>
      </button>
    </fieldset>
  )
}

export default ChooseDays

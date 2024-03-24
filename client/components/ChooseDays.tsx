import { days } from '../../data/general'
import { workoutDays } from '../../data/general'
import { Link } from 'react-router-dom'

function ChooseDays() {
  function handleChange(e: { target: { checked: any; value: any } }) {
    const isChecked = e.target.checked
    const nonWorkingDay = !isChecked && e.target.value

    const workoutDay: string = isChecked && e.target.value
    if (workoutDay) {
      workoutDays.includes(workoutDay) || workoutDays.push(workoutDay)
    } else {
      const index = workoutDays.findIndex((day) => day === nonWorkingDay)
      workoutDays.splice(index, 1)
    }
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
        <Link to="/chooseMuscle">Submit</Link>
      </button>
    </fieldset>
  )
}

export default ChooseDays

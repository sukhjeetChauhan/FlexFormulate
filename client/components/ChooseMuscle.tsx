import { workoutDays } from '../../data/general'
import { useState } from 'react'

function insertOptionsHtml(day: string, count: number) {
  const choiceArray = []
  const choice = (
    <select className={`${day}-options`} name={day}>
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

  for (let i = 0; i < count; i++) {
    choiceArray.push(choice)
  }
  return choiceArray
}

function ChooseMuscle() {
  const initialState = workoutDays.map((day) => 1)

  const [count, setCount] = useState(initialState)

  const result =
    workoutDays.length !== 0 ? (
      <fieldset className="choose-muscleGroup">
        <legend>Choose a muscle group for each chosen day</legend>
        {workoutDays.map((day, i) => (
          <div key={day}>
            <label htmlFor={day}>{day[0].toUpperCase() + day.slice(1)}</label>
            <div className={`options options-${day}`}>
              {insertOptionsHtml(day, count[i]).map((choice) => choice)}
              {}

              <button
                onClick={() => {
                  const array = count.map((num, index) => {
                    const result = i === index ? num + 1 : num
                    console.log(result)
                    return result
                  })
                  setCount(array)
                }}
                className={`add add-${day}`}
              >
                +
              </button>
            </div>
          </div>
        ))}
        <button className="muscleGroup-submit">Submit</button>
      </fieldset>
    ) : (
      <h1>No Workout days selected </h1>
    )
  return result
}

export default ChooseMuscle

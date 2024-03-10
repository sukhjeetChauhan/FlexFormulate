import { workoutDays } from '../../data/general'
import { useState } from 'react'

function insertOptionsHtml(day: string, count: number) {
  const choiceArray = []
  const choice = function (day: string, num: number) {
    return (
      <select
        onChange={(e) => handleChange(e)}
        key={`${day}-${num}`}
        className={`${day}-${num} options`}
        name={day}
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

function handleChange(e) {
  const value = e.target.value
  const day = e.target.className.split('-')[0]
  const index = e.target.className.split('-')[1].split(' ')[0]

  // setValue((obj[day][index] = value))
}

function handleData() {}

function ChooseMuscle() {
  const valueObj = {}
  const initialCountState = workoutDays.map((day) => 1)

  const [count, setCount] = useState(initialCountState)

  workoutDays.forEach((day, index) => {
    valueObj[day] = []

    valueObj[day].push(null)
  })

  const [value, setValue] = useState(valueObj)

  const result =
    workoutDays.length !== 0 ? (
      <fieldset className="choose-muscleGroup">
        <legend>Choose a muscle group for each chosen day</legend>
        {workoutDays.map((day, i) => (
          <div key={day}>
            <label htmlFor={day}>{day[0].toUpperCase() + day.slice(1)}</label>
            <div className={`options options-${day}`}>
              {insertOptionsHtml(day, count[i], setValue, value).map(
                (choice) => choice
              )}
              <button
                onClick={() => {
                  const array = count.map((num, index) => {
                    const result = i === index ? num + 1 : num

                    return result
                  })
                  setCount(array)
                  console.log(day)
                  setValue(value[day]) //need to figure out to increase value having error
                }}
                className={`add add-${day}`}
              >
                +
              </button>
            </div>
          </div>
        ))}
        <button onSubmit={handleData} className="muscleGroup-submit">
          Submit
        </button>
      </fieldset>
    ) : (
      <h1>No Workout days selected </h1>
    )
  return result
}

export default ChooseMuscle

import e from 'express'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function UserForm() {
  const navigate = useNavigate()
  const [data, setData] = useState({
    name: null,
    age: null,
    weight_kgs: null,
    height_cm: null,
    activity_level: null,
  })

  function handleSubmit(e) {
    e.preventDefault()
    console.log(data)
  }

  function handleChange(e) {
    setData({ ...data, [e.target.name]: e.target.value })
    console.log(data)
  }

  return (
    <form className="user-form" onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        name="name"
        id="name"
        type="text"
        placeholder="Full Name"
        onChange={handleChange}
      />
      <label htmlFor="age">Age:</label>
      <input
        name="age"
        id="age"
        type="text"
        placeholder="Age"
        onChange={handleChange}
      />
      <label htmlFor="weight">Weight:</label>
      <input
        name="weight_kgs"
        id="weight"
        type="Weight"
        placeholder="Weight in Kgs"
        onChange={handleChange}
      />
      <label htmlFor="height">Height:</label>
      <input
        name="height_cm"
        id="height"
        type="text"
        placeholder="Height in cms"
        onChange={handleChange}
      />
      <p>What is your current activity level?</p>
      <label htmlFor="low">No Exercise</label>
      <input
        id="low"
        type="radio"
        name="activity_level"
        value="no exercise"
        onChange={handleChange}
      />
      <label htmlFor="med">1 - 3 times</label>
      <input
        id="med"
        type="radio"
        name="activity_level"
        value="1 - 3 times"
        onChange={handleChange}
      />
      <label htmlFor="high">4 - 5 times</label>
      <input
        id="high"
        type="radio"
        name="activity_level"
        value="4 - 5 times"
        onChange={handleChange}
      />
      <button>Submit</button>
    </form>
  )
}

import { useAuth0 } from '@auth0/auth0-react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { addUser } from '../../api/userDbApi'

export default function AddUser() {
  const navigate = useNavigate()
  const [data, setData] = useState({
    name: null,
    gender: null,
    age: null,
    weight_kgs: null,
    height_cm: null,
    activity_level: null,
  })

  const auth = useAuth0().user?.sub

  function handleSubmit(e) {
    e.preventDefault()

    const postData = { ...data, bmr_cals: calculateBMR(), user_auth: auth }

    addUser(postData)
    navigate('/newUserForm')
  }

  function handleChange(e) {
    if (e.target.type === 'number')
      setData({ ...data, [e.target.name]: Number(e.target.value) })
    else {
      setData({ ...data, [e.target.name]: e.target.value })
    }
  }

  function calculateBMR() {
    if (data.gender === 'male') {
      return 10 * data.weight_kgs + 6.25 * data.height_cm - 5 * data.age + 5
    }
    if (data.gender === 'female') {
      return 10 * data.weight_kgs + 6.25 * data.height_cm - 5 * data.age - 161
    }
  }

  return (
    <div className="div-container">
      <h1>User Detail Form</h1>
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
          type="number"
          placeholder="Age"
          onChange={handleChange}
        />
        <div>
          <p>Please Select your gender?</p>
          <label htmlFor="male">Male:</label>
          <input
            name="gender"
            id="male"
            type="radio"
            value="male"
            onChange={handleChange}
          />
          <label htmlFor="female">Female:</label>
          <input
            name="gender"
            id="female"
            type="radio"
            value="female"
            onChange={handleChange}
          />
        </div>
        <label htmlFor="weight">Weight:</label>
        <input
          name="weight_kgs"
          id="weight"
          type="number"
          placeholder="Weight in Kgs"
          onChange={handleChange}
        />
        <label htmlFor="height">Height:</label>
        <input
          name="height_cm"
          id="height"
          type="number"
          placeholder="Height in cms"
          onChange={handleChange}
        />
        <div>
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
        </div>
        <button>Submit</button>
      </form>
    </div>
  )
}

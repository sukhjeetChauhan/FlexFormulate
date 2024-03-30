import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Dashboard({ data }) {
  const [user, setUser] = useState(0)

  console.log(data)
  const navigate = useNavigate()
  function handleClick() {
    navigate('/Exercise')
  }
  return (
    <>
      <h1>Profile Page</h1>
      <div className="profile">
        <p>Name : {data[user].name}</p>
        <p>Age : {data[user].age}</p>
        <p>Weight : {`${data[user].weight_kgs} kg`}</p>
        <p>Height : {`${data[user].height_cm} cm`}</p>
        <p>BMR : {`${data[user].bmr_cals} calories`}</p>
      </div>
      <div>
        <button onClick={handleClick}>Exercises</button>
        <button>Diet</button>
      </div>
    </>
  )
}

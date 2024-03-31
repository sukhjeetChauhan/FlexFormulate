import { useState, createContext, useCallback, SetStateAction } from 'react'
import { useNavigate } from 'react-router-dom'
import { getScheduleById } from '../api/scheduleDbApi'

const PreferencesData = createContext(null)

export default function Dashboard({ data }) {
  const [user, setUser] = useState(0)
  const [preference, setPreference] = useState(null)

  getScheduleById(1)
    // .then(useCallback((res: SetStateAction<null>) => setPreference(res), []))
    .catch((e) => {
      console.log('error', e)
    })

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
        <PreferencesData.Provider value={preference}>
          <button onClick={handleClick}>Exercises</button>
        </PreferencesData.Provider>
        <button>Diet</button>
      </div>
    </>
  )
}

import { useState, createContext, useEffect } from 'react'

import { getScheduleByUserId } from '../api/scheduleDbApi'
import Exercise from './Exercise'
import { useGetById } from './Hooks'
import { getUsersByIdApi } from '../api/userDbApi'
import { Link, useParams } from 'react-router-dom'

export const PreferencesContext = createContext(null)

export default function Dashboard() {
  const [count, setCount] = useState(0)
  const [preference, setPreference] = useState(null)
  const [showExercise, setShowExercise] = useState(false)
  const [showProfile, setShowProfile] = useState(true)

  const { id } = useParams()
  const id2 = Number(id)

  const { data } = useGetById(getUsersByIdApi(id2), 'user')
  const { data: res } = useGetById(getScheduleByUserId(id2), 'schedule')

  useEffect(() => {
    setPreference(res)
  }, [res])

  if (data)
    return (
      <div className="div-container">
        <h1>Home for personal health</h1>
        <nav className="dashboard-navigaton">
          <button
            className="exercise"
            onClick={() => {
              setShowExercise(!showExercise)
              setShowProfile(false)
            }}
          >
            Exercises
          </button>
          <button
            className="profile"
            onClick={() => {
              setShowProfile(!showProfile)
              setShowExercise(false)
            }}
          >
            Profile
          </button>
          <button>Diet</button>
        </nav>
        <div className="dashboard-main">
          {showProfile && (
            <div className="profile">
              <h1>Profile Page</h1>
              <p>Name : {data[count].name}</p>
              <p>Age : {data[count].age}</p>
              <p>Weight : {`${data[count].weight_kgs} kg`}</p>
              <p>Height : {`${data[count].height_cm} cm`}</p>
              <p>BMR : {`${data[count].bmr_cals} calories`}</p>
            </div>
          )}
          <div>
            <PreferencesContext.Provider value={preference}>
              {/* Render Exercise component only when showExercise is true */}
              {showExercise && <Exercise />}
              {/* Button toggles the visibility of Exercise */}
            </PreferencesContext.Provider>
          </div>
        </div>
        <button className="btn-home">
          <Link to="/">Home</Link>
        </button>
      </div>
    )
}

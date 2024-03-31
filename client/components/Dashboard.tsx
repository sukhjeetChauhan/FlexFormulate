import { useState, createContext, useEffect } from 'react'

import { getScheduleById } from '../api/scheduleDbApi'
import Exercise from './Exercise'

export const PreferencesContext = createContext(null)

export default function Dashboard({ data }) {
  const [user, setUser] = useState(0)
  const [preference, setPreference] = useState(null)
  const [showExercise, setShowExercise] = useState(false)
  const [showProfile, setShowProfile] = useState(false)

  useEffect(() => {
    getScheduleById(1)
      .then((res) => setPreference(res))
      .catch((e) => {
        console.log('error', e)
      })
  }, [])

  console.log(preference)

  return (
    <>
      <button
        onClick={() => {
          setShowExercise(!showExercise)
          setShowProfile(false)
        }}
      >
        Exercises
      </button>
      <button
        onClick={() => {
          setShowProfile(!showProfile)
          setShowExercise(false)
        }}
      >
        Profile
      </button>
      <button>Diet</button>
      {showProfile && (
        <div className="profile">
          <h1>Profile Page</h1>
          <p>Name : {data[user].name}</p>
          <p>Age : {data[user].age}</p>
          <p>Weight : {`${data[user].weight_kgs} kg`}</p>
          <p>Height : {`${data[user].height_cm} cm`}</p>
          <p>BMR : {`${data[user].bmr_cals} calories`}</p>
        </div>
      )}
      <div>
        <PreferencesContext.Provider value={preference}>
          {/* Render Exercise component only when showExercise is true */}
          {showExercise && <Exercise />}
          {/* Button toggles the visibility of Exercise */}
        </PreferencesContext.Provider>
      </div>
    </>
  )
}

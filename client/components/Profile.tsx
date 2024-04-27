import { useEffect, useState } from 'react'

export default function Profile({ data, res }) {
  useEffect(() => {
    Object.keys(res).forEach((key) => res[key] === null && delete res[key])
  }, [res])

  function handleScheduleValue(str) {
    const strArr = str.split('_')
    const result = strArr.map((str) =>
      str.includes('%20') ? str.split('%20').join(' ') : str,
    )
    console.log(result)
    return result.join(',')
  }
  const week = [
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
    'sunday',
  ]
  return (
    <>
      <div className="profile">
        <h1>Profile</h1>
        <p>Name : {data.name}</p>
        <p>Age : {data.age}</p>
        <p>Weight : {`${data.weight_kgs} kg`}</p>
        <p>Height : {`${data.height_cm} cm`}</p>
        <p>BMR : {`${data.bmr_cals} calories`}</p>
      </div>
      <div className="schedule">
        <h1>Schedule</h1>
        <ul>
          {week.map(
            (day, i) =>
              res[day] && (
                <li key={i}>{`${day} : ${handleScheduleValue(res[day])}`}</li>
              ),
          )}
        </ul>
      </div>
    </>
  )
}

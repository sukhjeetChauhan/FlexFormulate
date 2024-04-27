import { useState } from 'react'

export default function Profile({ data }) {
  return (
    <div className="profile">
      <h1>Profile Page</h1>
      <p>Name : {data.name}</p>
      <p>Age : {data.age}</p>
      <p>Weight : {`${data.weight_kgs} kg`}</p>
      <p>Height : {`${data.height_cm} cm`}</p>
      <p>BMR : {`${data.bmr_cals} calories`}</p>
    </div>
  )
}

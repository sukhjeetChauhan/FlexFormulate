import request from 'superagent'
import getExercise from '../api/exerciseApi'
import { useState, useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import { workoutWeek, workoutDays } from '../../data/general'

export default function Exercise() {
  const [day, setDay] = useState(0) //workoutDays[0]
  // const [part, setPart] = useState(workoutWeek[0][0])

  // Need to define a function that calls everytime a body part changes
  // const { data, isLoading, isError } = useQuery({
  //   queryKey: ['exercise', part],
  //   queryFn: () => getExercise(part),
  //   enabled: !!part,
  // })

  // Need buttons  to change state of workout day and another state to change state of workout in each day.
  // /while changing the workout button check if state is the last element of randNum, if it is check if we current body part is last element of current workoutDay [i], if it is make count of randNum state back to zero and make part = first part of current day, if it is not then go to the next part and make count of randNum to 0.
  // Need another button to change state of Workout day.

  // make a array (randNums) with lenght = 6/workoutDay[i].length i here will possibly be a state. This array will have random nums between 1 to 20 as data.
  function randomIntFromInterval(min: number, max: number) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  const randNum = []
  for (let i = 0; i < 6 / workoutWeek[day].length; i++) {
    randNum.push(randomIntFromInterval(1, 20))
  }

  // ////////////////////////////////////////////////////////////////////////////////

  const fakeData = {
    bodyPart: 'chest',
    equipment: 'body weight',
    gifUrl: 'https://v2.exercisedb.io/image/XkRnkDrY0G8tBL',
    id: '3294',
    name: 'archer push up',
    instructions: [
      'Start in a push-up position with your hands slightly wider than shoulder-width apart.',
      'Extend one arm straight out to the side, parallel to the ground.',
      'Lower your body by bending your elbows, keeping your back straight and core engaged.',
      'Push back up to the starting position.',
      'Repeat on the other side, extending the opposite arm out to the side.',
      'Continue alternating sides for the desired number of repetitions.',
    ],
    secondaryMuscles: ['triceps', 'shoulders', 'core'],
    target: 'pectorals',
  }

  // useEffect(() => {
  //   console.log(workoutWeek)
  // }, [part])
  // console.log(data)

  return (
    <>
      <h1>Exercise</h1>
      <img src={fakeData.gifUrl} alt="ExerciseGif" />
    </>
  )
}

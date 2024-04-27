import getExercise from '../api/exerciseApi'
import { useContext, useState, useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import { PreferencesContext } from './Dashboard'

export default function Exercise() {
  const schedule = useContext(PreferencesContext)

  const obj = Object.fromEntries(
    Object.entries(schedule).filter(([_, v]) => v != null),
  )
  const workoutDays = Object.keys(obj).filter(
    (item) => item !== 'id' && item !== 'created_by',
  )

  const workoutWeek = Object.values(obj)
    .filter((item) => isNaN(Number(item)))
    .map((value: any) => value.split('_'))

  const [day, setDay] = useState(0) //workoutDays[0]
  const [res, setRes] = useState([]) // This state tracks workout data
  // const [currentPartIndex, setcurrentPartIndex] = useState(0) //workoutWeek[day][0]
  const [randomNumObj, setRandomNumObj] = useState(
    generateRandNumArrayObject(0, 19),
  )

  // // Need to define a function that calls everytime a body part changes

  // const part = workoutWeek[day][currentPartIndex]
  const { data, isLoading, isError } = useQuery({
    queryKey: ['exercise', day],
    queryFn: () => {
      return getExercise(workoutWeek[day])
    },
  })

  useEffect(() => {
    Promise.all(data)
      .then((res) => {
        setRes(res)
      })
      .catch((e) => console.log(e))
  }, [data])

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  if (isError) {
    return <h2>Error: Api not found</h2>
  }
  // // Need buttons  to change state of workout day and another state to change state of workout in each day.
  // // /while changing the workout button check if state is the last element of randNum, if it is check if we current body part is last element of current workoutDay [i], if it is make count of randNum state back to zero and make part = first part of current day, if it is not then go to the next part and make count of randNum to 0.
  // // Need another button to change state of Workout day.

  // ///UTILITY FUNCTIONS

  function generateRandNumArrayObject(min: number, max: number) {
    ////This function generates an array of random numbers
    // min and max included
    function randNum(min: number, max: number) {
      return Math.floor(Math.random() * (max - min + 1) + min)
    }

    const randNumArrObj = {}
    workoutDays.forEach((day, index) => {
      const randNumArr: number[] = []
      for (let i = 0; i < 6 / workoutWeek[index]?.length; i++) {
        let num = randNum(min, max)
        while (randNumArr.includes(num)) {
          num = randNum(min, max)
        }
        randNumArr.push(num)
      }
      randNumArrObj[day] = randNumArr
    })

    return randNumArrObj
  }

  function increment(num) {
    return num + 1
  }
  function decrement(num) {
    return num - 1
  }

  // // ////////////////////////////////////////////////////////////////////////////////

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

  // function handleChange(e) {
  //   if (e.target.innerHTML === 'next') {
  //     if (count === randomArr.length - 1) {
  //       // checks if is the last element of current part
  //       setCount(0)
  //       currentPartIndex === workoutWeek[day]?.length - 1 // checks if current part is the last part for the day
  //         ? setcurrentPartIndex(0)
  //         : setcurrentPartIndex(increment(currentPartIndex))
  //     } else {
  //       setCount(increment(count))
  //     }
  //   }
  //   if (e.target.innerHTML === 'prev') {
  //     if (count === 0) {
  //       // checks if is the first element of current part
  //       setCount(randomArr.length - 1)
  //       currentPartIndex === 0 // checks if current part is the last part for the day
  //         ? setcurrentPartIndex(workoutWeek[day]?.length - 1)
  //         : setcurrentPartIndex(decrement(currentPartIndex))
  //     } else {
  //       setCount(decrement(count))
  //     }
  //   }
  // }

  function handleDay(e) {
    if (e.target.className === 'prevDay') {
      day === 0 ? setDay(workoutDays?.length - 1) : setDay(decrement(day))
    }
    if (e.target.className === 'nextDay') {
      day === workoutDays?.length - 1 ? setDay(0) : setDay(increment(day))
    }
  }
  // setRandomArr(generateRandNumArray(1, 19))

  if (data)
    return (
      <>
        <h1>{`Day: ${
          workoutDays[day][0]?.toUpperCase() + workoutDays[day]?.slice(1)
        }`}</h1>
        <button className="prevDay" onClick={handleDay}>
          ←
        </button>
        <button className="nextDay" onClick={handleDay}>
          →
        </button>
        <ul className="exercise-container">
          {res.map((partData) =>
            randomNumObj[workoutDays[day]].map((index) => (
              <li className="exercise-item" key={partData[index].id}>
                <h2>{partData[index]?.name.toUpperCase()}</h2>
                <h3>{partData[index]?.bodyPart.toUpperCase()}</h3>
                <img src={partData[index]?.gifUrl} alt="ExerciseGif" />
                <div className="instructions">
                  <ul>
                    <li>Sets: 3</li>
                    <li>Reps: 12</li>
                    <li>Rest Period: 1 min</li>
                  </ul>
                </div>
              </li>
            )),
          )}
        </ul>
      </>
    )
  {
    /* <div className="container">
    <img
    src="../../data/images/victor-freitas-WvDYdXDzkhs-unsplash.jpg"
    alt="ExerciseGif"
  /> */
  }
  {
    /* <div className="instructions">
      {fakeData.instructions.map((item, i) => (
        // eslint-disable-next-line react/jsx-key
        <p key={i}>{item}</p>
        ))}
        </div>
      </div> */
  }
  {
    /* <button className="button prev" onClick={handleChange}>
          prev
          </button>
          <button className="button next" onClick={handleChange}>
          next
        </button> */
  }
}

import request from 'superagent'
import getExercise from '../api/exerciseApi'
import { useState, useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import { workoutWeek } from '../../data/general'

export default function Exercise() {
  const [part, setPart] = useState(workoutWeek[0][0])
  const { data, isLoading, isError } = useQuery({
    queryKey: ['exercise', part],
    queryFn: () => getExercise(part),
    enabled: !!part,
  })

  useEffect(() => {
    console.log(workoutWeek)
  }, [part])
  console.log(data)

  //might use useNavigate and useLocation to transfer data

  return <h1>Exercise</h1>
}

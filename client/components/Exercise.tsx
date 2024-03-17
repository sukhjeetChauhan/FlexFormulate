import request from 'superagent'
import getExercise from '../api/exerciseApi'
import { useState, useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'

export default function Exercise() {
  const [part, setPart] = useState('')
  const { data, isLoading, isError } = useQuery({
    queryKey: ['exercise', part],
    queryFn: () => getExercise(part),
    enabled: !!part,
  })

  //might use useNavigate and useLocation to transfer data

  return <h1>Exercise</h1>
}

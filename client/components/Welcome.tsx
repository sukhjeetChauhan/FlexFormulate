import { Link, Outlet } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import { useQuery } from '@tanstack/react-query'
import { getUsersByAuthApi } from '../api/userDbApi'
import Dashboard from './Dashboard'

export default function Welcome() {
  const { user } = useAuth0()
  const { data, isLoading, isError } = useQuery({
    queryKey: ['auth'],
    queryFn: () => {
      const authId = user?.sub
      return getUsersByAuthApi(authId)
    },
  })

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  if (isError) {
    return <h2>Error: Api not found</h2>
  }

  if (data.length !== 0) {
    return (
      <>
        <h1>Welcome back {user?.nickname}</h1>
        <Dashboard />
      </>
    )
  } else {
    return (
      <>
        <h1>Welcome {user?.nickname}</h1>
        <p>
          <Link to="/welcome/chooseDays">Click here</Link>
        </p>
        <Outlet />
      </>
    )
  }
}

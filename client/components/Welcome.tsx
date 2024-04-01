import { Link, Outlet } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import { useQuery } from '@tanstack/react-query'
import { getUsersByAuthApi } from '../api/userDbApi'
import Dashboard from './Dashboard'
import { useGetUserByAuth } from './Hooks'

export default function Welcome() {
  const { user } = useAuth0()

  const authId = user?.sub

  const { data, isLoading, isError } = useGetUserByAuth(authId)

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  if (isError) {
    return <h2>Error: Api not found</h2>
  }

  if (data.length !== 0) {
    const id = data[0].id
    return (
      <>
        <h1 className="welcome-heading">Welcome back {user?.nickname}</h1>
        {/* <Dashboard data={data} /> */}
        <Link to={`/user/${id}`}>
          <h3>Dashboard</h3>
        </Link>
      </>
    )
  } else {
    return (
      <>
        <h1>Welcome {user?.nickname}</h1>
        <p>
          <Link to="/addUser">Click here</Link>
        </p>
        <Outlet />
      </>
    )
  }
}

import { Link, Outlet } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
// import { useQuery } from '@tanstack/react-query'
// import { getUsersByAuthApi } from '../api/userDbApi'
// import Dashboard from './Dashboard'
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
      <div className="div-container">
        <h1 className="welcome-heading">
          Welcome back{' '}
          {user && user?.nickname[0].toUpperCase() + user?.nickname?.slice(1)}
        </h1>

        <Link to={`/user/${id}`}>
          <button>Dashboard</button>
        </Link>
        <div className="trends">
          <h2>Display Trend data here</h2>
        </div>
      </div>
    )
  } else {
    return (
      <div className="div-container">
        <h1 className="welcome-heading">
          Welcome{' '}
          {user && user?.nickname[0].toUpperCase() + user?.nickname?.slice(1)}
        </h1>
        <div className="trends">
          <p>Click here for setup</p>
          <Link to="/addUser">
            <button className="btn-setup">→</button>
          </Link>
        </div>
      </div>
    )
  }
}

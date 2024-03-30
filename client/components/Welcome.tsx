import { Link, Outlet } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import { useReturningUser } from './Authenticated'

export default function Welcome() {
  // useReturningUser()
  return (
    <>
      <h1>
        <Link to="/welcome/chooseDays">Welcome</Link>
      </h1>
      <Outlet />
    </>
  )
}

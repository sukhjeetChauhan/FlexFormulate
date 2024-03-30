import Welcome from './Welcome'
import { useAuth0 } from '@auth0/auth0-react'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
function App() {
  // return (
  //   <>
  //     <h1>
  //       <Link to="/chooseDays">Fitness Page</Link>
  //     </h1>
  //     <Outlet />
  //   </>
  // )
  const { user, logout, loginWithRedirect, isAuthenticated } = useAuth0()
  // TODO: replace placeholder user object with the one from auth0
  // const user = {
  //   nickname: 'john.doe',
  // }

  const handleSignOut = async () => {
    await logout()
  }

  const handleSignIn = async () => {
    await loginWithRedirect()
  }

  return (
    <>
      <h1>Fitness Page</h1>
      <IfAuthenticated>
        {user && <p>Signed in as: {user?.nickname}</p>}

        <button onClick={handleSignOut}>Sign out</button>
        <Welcome />
      </IfAuthenticated>
      <IfNotAuthenticated>
        <button onClick={handleSignIn}>Sign in</button>
      </IfNotAuthenticated>
    </>
  )
}
export default App

import Welcome from './Welcome'
import { useAuth0 } from '@auth0/auth0-react'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import { useEffect, useState } from 'react'
function App() {
  const [css, setCss] = useState('signedOut')

  const { user, logout, loginWithRedirect, isAuthenticated } = useAuth0()
  useEffect(() => {
    if (isAuthenticated) {
      setCss('signedIn')
    }
  }, [isAuthenticated])
  const handleSignOut = async () => {
    await logout()
  }

  const handleSignIn = async () => {
    await loginWithRedirect()
  }

  return (
    <div className={css}>
      <h1 className="app-heading">Design your own health</h1>
      <IfAuthenticated>
        <div className="user-info">
          {user && <p>Signed in as: {user?.nickname}</p>}

          <button className="btn-signOut" onClick={handleSignOut}>
            Sign out
          </button>
        </div>
        <Welcome />
      </IfAuthenticated>
      <IfNotAuthenticated>
        <button className="btn-signIn" onClick={handleSignIn}>
          Sign in
        </button>
      </IfNotAuthenticated>
    </div>
  )
}
export default App

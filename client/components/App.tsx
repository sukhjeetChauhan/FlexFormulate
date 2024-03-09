import ChooseDays from './ChooseDays'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
function App() {
  return (
    <>
      <h1>
        <Link to="/chooseDays">Fitness Page</Link>
      </h1>
      <Outlet />
    </>
  )
}
export default App

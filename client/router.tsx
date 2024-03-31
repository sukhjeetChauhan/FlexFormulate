import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import App from './components/App.tsx'
import ChooseDays from './components/ChooseDays.jsx'
import ChooseMuscle from './components/ChooseMuscle.tsx'
import Exercise from './components/Exercise.tsx'
import Welcome from './components/Welcome.tsx'
import Dashboard from './components/Dashboard.tsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />} />
      <Route path="/welcome" element={<Welcome />}>
        <Route path="/welcome/chooseDays" element={<ChooseDays />} />
        <Route path="/welcome/chooseMuscle" element={<ChooseMuscle />} />
      </Route>

      <Route path="/exercise" element={<Exercise />} />
    </>,
  ),
)

export default router

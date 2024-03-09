import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import App from './components/App.tsx'
import ChooseDays from './components/ChooseDays.jsx'
import ChooseMuscle from './components/ChooseMuscle.tsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/chooseDays" element={<ChooseDays />} />
      <Route path="/chooseMuscle" element={<ChooseMuscle />} />
    </Route>
  )
)

export default router

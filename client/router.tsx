import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import App from './components/App.tsx'

import Exercise from './components/Exercise.tsx'
import Welcome from './components/Welcome.tsx'

import NewUserForm from './components/NewUserForm.tsx'
import { AddDetails } from './components/AddDetails.tsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />} />
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/newUserForm" element={<NewUserForm />} />
      <Route path="/addUser" element={<AddDetails />} />

      <Route path="/exercise" element={<Exercise />} />
    </>,
  ),
)

export default router

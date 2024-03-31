import { useNavigate } from 'react-router-dom'

export function AddDetailsForm() {
  const navigate = useNavigate()

  return <button onClick={() => navigate('/newUserForm')}>Submit</button>
}

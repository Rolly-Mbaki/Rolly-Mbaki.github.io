import './App.css'
import { RouterProvider } from 'react-router-dom'
import ROUTER from '../router/Router'

function App() {

  return (
      <RouterProvider future={{ v7_startTransition: true }} router={ROUTER} />
  )
}

export default App

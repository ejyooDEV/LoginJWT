import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import JWTLogin from './pages/JWTLogin'
import './App.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <JWTLogin/>,
  },
]);

function App() {
  return (
    <div className="content">
      <RouterProvider router={router} />
    </div>
  )
}

export default App

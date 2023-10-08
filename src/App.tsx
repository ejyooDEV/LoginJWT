import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import JWTLogin from './pages/JWTLogin'
import JWTLoginWithLocalStorage from './pages/JWTLoginWithLocalStorage'
import AutoLogin from './pages/AutoLogin'
import './App.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <JWTLogin/>,
  },
  {
    path: "/local-storage",
    element: <JWTLoginWithLocalStorage/>,
  },
  {
    path: "/other-page",
    element: <AutoLogin/>,
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

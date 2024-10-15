import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)

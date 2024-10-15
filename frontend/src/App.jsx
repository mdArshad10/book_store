import { Outlet } from 'react-router-dom'
import './App.css'

function App() {
  

  return (
    <>
      <h1>This is Navbar</h1>
      <Outlet/>
      <h1>This is Footer</h1>
    </>
  )
}

export default App

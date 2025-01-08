import { Outlet } from "react-router-dom"
import { Header } from "../Header/Header"
import './App.css'
import { Footer } from "../Footer/Footer"

function App() {

  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App

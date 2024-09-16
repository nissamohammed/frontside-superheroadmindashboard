
import { Route, Routes } from "react-router-dom"
import './App.css'
import Admindashboard from "./pages/Admindashboard"
import Complaintdiagram from "./pages/Complaintdiagram"
import Auth from "./pages/Auth"

function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element={<Auth />} />
        <Route path='/admindashboard' element={<Admindashboard />} />
        <Route path='/chart' element={<Complaintdiagram />} />
      </Routes>
      
    </>
  )
}

export default App

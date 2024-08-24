
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { User } from './pages/User'
import { Signin } from './pages/Signin'
function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<Signin/>}/>
        <Route path='/user' element={<User/>}/>
      </Routes> 
    </BrowserRouter>
    </>
  )
}

export default App

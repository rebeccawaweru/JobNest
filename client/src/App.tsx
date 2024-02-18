import { Home, Jobs, JobDetails, Contact, Profile, Register, Login } from './pages'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/jobs' element={<Jobs/>}/>
    <Route path='/jobs/details' element={<JobDetails/>}/>
    <Route path='/apply' element={<Profile/>}/>
    <Route path='/contact' element={<Contact/>}/>
  </Routes>
  </BrowserRouter>
  )
}

export default App

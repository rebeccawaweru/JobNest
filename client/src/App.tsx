import { Home, Jobs, JobDetails, Contact, Register, Login, UpdateProfile, Resume, PostJob, EmployerDashboard } from './pages'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/postjob' element={<PostJob/>}/>
    <Route path='/jobs' element={<Jobs/>}/>
    <Route path='/jobs/details' element={<JobDetails/>}/>
    <Route path='/apply' element={<UpdateProfile/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/resume' element={<Resume/>}/>
    <Route path='/employer' element={<EmployerDashboard/>}/>
  </Routes>
  </BrowserRouter>
  )
}

export default App

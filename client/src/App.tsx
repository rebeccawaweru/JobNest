import { Home, Jobs, JobDetails, Contact, Profile, Register, Login, UpdateProfile, Resume, PostJob } from './pages'
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
    <Route path='/profile' element={<Profile/>}/>
    <Route path='/resume' element={<Resume/>}/>
  </Routes>
  </BrowserRouter>
  )
}

export default App

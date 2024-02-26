import { Home, Jobs, JobDetails, Contact, Register, Login, UpdateProfile, Resume, EmployerDashboard, ViewResume } from './pages'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PrivateRoutes from './routes/privateroutes'
import { useEffect } from 'react'
import { AppDispatch } from './store'
import { getUser } from './reducers/userSlice'
import { useDispatch} from 'react-redux'


function App() {
  const id:any = localStorage.getItem('id')
  const dispatch = useDispatch<AppDispatch>()
  useEffect(()=>{
     if(id){
      dispatch(getUser(id))
     }

  },[id])
  return (
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/employer' element={<PrivateRoutes element={<EmployerDashboard/>}/>}/>
    <Route path='/jobs' element={<Jobs/>}/>
    <Route path='/jobs/details' element={<JobDetails/>}/>
    <Route path='/apply' element={<PrivateRoutes element={<UpdateProfile/>}/>}/> 
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/resume' element={<Resume/>}/>
    <Route path='/viewresume' element={<ViewResume/>}/>
  </Routes>
  </BrowserRouter>
  )
}

export default App

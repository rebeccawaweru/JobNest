import { NavBar,Filter,JobCard} from './components'
import { Row,Container,Col ,Image, Button, Stack} from 'react-bootstrap'
import banner from './assets/images/banner1.png'
import banner2 from './assets/images/banner2.jpg'
import avatar from './assets/images/avatar.png'
import './saas/main.scss'
function App() {
  return (
    <Container className='bg-light p-0 w-100' fluid >
      <NavBar/>
 
        <Stack gap={4}>
  <Row className="px-5 pt-5 justify-content-center">
    <Col  className="text-left  content ">
      <p className="text-muted">We deliver blazing fast work Solution</p>
      <h1>Find & Hire Top <br/> 3% of experts on <br/> JOBNEST.</h1>
      <div className="d-block d-lg-flex d-md-flex w-100  bg-white rounded-3 align-items-center justify-content-between p-4" >
        <Filter caption='Keywords' title='Select Title'/>
        <Filter caption='Categories' title='Select Categories'/>
         
         <Button  variant="primary" className="mt-2 mt-lg-0 rounded-pill p-3 fw-bold search button">
            <i className="bi bi-search mx-1"></i>
            <span className='mx-1'>SEARCH</span>
         </Button>
      </div>
      <p className='text-muted mt-2'>Popular: <span className='text-black text-decoration-underline'>Accounting, Commercial, IT & Technology</span></p>
      <div className="d-flex align-items-center mt-4">
      <Image src={avatar} alt="avatars" className="avatar" />
      <div className='mx-2'>
      <p><span className='fs-2'>18K+ </span><br/><span className='text-muted mx-1'>Individual Freelancers</span></p>
      </div>

      </div>

    </Col>

    <Col className="font-sans d-lg-flex justify-content-end d-sm-none d-none">
      <Image src={banner} alt="banner1" className="image w-100" />
    </Col>
  </Row>

  <div className='d-flex justify-content-between px-5'>
    <p className='fs-3 topic'>Most demanding category</p>
    <p className='text-decoration-underline text-primary mt-2 fw-bold'>Explore All Fields
    <i className="bi bi-chevron-double-right text-bold "></i>
    </p>
  </div>
  
  <div className='d-flex justify-content-center align-items-center px-5'>
  <JobCard icon='bi bi-briefcase-fill' title='Accounting' jobs={4}/>
  <JobCard icon='bi bi-stack' title='Commercial' jobs={4}/>
  <JobCard icon='bi bi-database-fill' title='IT & Technology' jobs={4}/>
  <JobCard icon='bi bi bi-headphones' title='Support Service' jobs={4}/>
  </div>

 <Row className='bg-white d-flex justify-content-center px-5 pt-5 pb-2 '>
  <Col><Image src={banner2} alt="banner2" className="banner2 " /></Col>
  <Col>
  <p className='text-primary'>MORE ABOUT OUR COMPANY</p>
  <h2 className='topic'>World's of talent at your fingertips</h2>
  <p className='text-muted'>Synergistically visualize alternative content before cross functional core Rapidiously administra standardized value via focused benefits. Rapidly redefine highly efficient niche markets with plug-and-play materials professionally</p>
  <Stack direction="horizontal" gap={2}>

    <div className='d-flex'>
     <div className='fs-4'><i className="bi bi-check-circle-fill text-primary"></i></div>    
     <div className='d-block mx-2'>
    <p className='fs-5 topic'>Perfect Search Lists<br/>
    <span className='text-muted fs-6'>Seamlessly envisioneer tactical <br/>data through services.</span></p>
    </div>
    </div>

    <div className='d-flex'>
     <div className='fs-4'><i className="bi bi-check-circle-fill text-primary"></i></div>    
     <div className='d-block mx-2'>
    <p className='fs-5 topic'>Experts Employees<br/>
    <span className='text-muted fs-6'>Seamlessly envisioneer tactical <br/>data through services.</span></p>
    </div>
    </div>
  </Stack>

  </Col>
 </Row>
 </Stack>
 



     
   
    </Container>
  )
}

export default App

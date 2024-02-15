import { NavBar,Filter,JobCard,Stats,Step, Footer} from './components'
import { Row,Container,Col ,Image, Button, Stack} from 'react-bootstrap'
import banner from './assets/images/banner1.png'
import banner2 from './assets/images/banner2.jpg'
import banner3 from './assets/images/banner3.png'
import avatar from './assets/images/avatar.png'
import './saas/main.scss'
function App() {
  return (
    <Container className='bg-light p-0 w-100 ' fluid >
      <NavBar/>
 
        <div className='d-grid gap-4 overflow-hidden '>
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
    <i className="bi bi-chevron-double-right"></i>
    </p>
  </div>
  
  <div className='d-flex justify-content-center align-items-center px-5'>
  <JobCard icon='bi bi-briefcase-fill' title='Accounting' jobs={4}/>
  <JobCard icon='bi bi-stack' title='Commercial' jobs={4}/>
  <JobCard icon='bi bi-database-fill' title='IT & Technology' jobs={4}/>
  <JobCard icon='bi bi bi-headphones' title='Support Service' jobs={4}/>
  </div>

 <Stack direction="horizontal" gap={4} className='bg-white px-5 pt-5'>
 <Image src={banner2} alt="banner2" className="h-100 w-100 mb-5" />
 
  <div className="d-grid gap-4">
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
  <div className='d-flex justify-content-start w-50 gap-4'>
  <Button variant="primary" className="rounded-pill button p-3">Click here <i className="bi bi-chevron-double-right text-bold "></i></Button>
  <Button variant="outline-primary" className="rounded-pill button p-3">Click here<i className="bi bi-chevron-double-right text-bold "></i></Button>
  </div>
  </div>
 </Stack>

  <Row className='bg-primary text-white d-flex justify-content-start align-items-center  stats'>
  <Stats num="14.3 K" title="Jobs Available"/>
  <Stats num="4.5 K"  title="Completed Jobs"/>
  <Stats num="49 K" title="Worldwide Client’s"/>
  <Stats num="25 B" title="Total Payout"/>
  </Row>


    <div className='text-center'>
    <p className='text-primary fs-5'>Our Work Process</p>
    <p className="fw-bold fs-3 topic">How it Works?</p>
    </div>

   <div className='d-flex gap-3 px-5 justify-content-center align-items-center'>
    <Step icon="bi bi-clipboard-check-fill" display="border-bottom" title="Register Your Account" caption="You need to create an account to find best preferred job."/>
    <Step icon="bi bi-wechat" display="border-bottom" title="We Here to Help You" caption="You need to create an account to find best preferred job."/>
    <Step icon="bi bi-person-fill" display="border-bottom" title="Complete Your Profile" caption="You need to create an account to find best preferred job."/>
    <Step icon="bi bi-mortarboard-fill" display="border-none" title="Apply Job or Hire" caption="You need to create an account to find best preferred job."/>
   </div>
    
    
    <div className='bg-white '>
   <Row className="m-5 bg-light  p-4 rounded-3">
    <Col> <Image src={banner3} alt="banner2" className="image w-100" /></Col>
    <Col>
    <div className='topic'>
    <h1>Get Your</h1>
    <h1>Matched Jobs</h1>
    <h1>in a Few</h1>
    <h1>Minutes</h1>
    </div>
    <p className='text-muted'>Find your dream job & earn from world leading <br/> brands. Upload your CV now!</p>
    <Button variant="primary" className='rounded-pill button fw-bold p-3'>Upload Your CV<i className="bi bi-chevron-double-right"></i></Button>
    </Col>
   </Row>

   <div className='d-flex justify-content-between px-5 align-items-center'>
    <div className='px-5'>
    <p className='topic fs-2'>Most complete job portal.</p>
    <p className='text-muted'>Signup and start find your job or talent.</p>
    </div>

    <div className='d-flex gap-4 px-5'>
    <Button className='rounded-pill button p-3 topic ' variant='outline-primary'>Looking for a Job<i className="bi bi-chevron-double-right"></i></Button>
    <Button className='rounded-pill button p-3 ' variant='primary'>Post a Job<i className="bi bi-chevron-double-right"></i></Button>
    </div>

   </div>
  
  </div>

    <Footer/>
  </div>
    </Container>
  )
}

export default App

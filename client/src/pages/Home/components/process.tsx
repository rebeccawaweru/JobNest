import { Container, Row, Col, Button, Image } from "react-bootstrap"
import { Step } from "../../../components"
import { banner3 } from "../../../assets/images"
export default function JobProcess(){
   return (
    <>
    <div className='text-center mt-5'>
    <p className='text-primary fs-5'>Our Work Process</p>
    <p className="fw-bold fs-3 topic">How it Works?</p>
    </div>
    <Container fluid className='d-block d-lg-flex d-md-flex gap-3 px-5 justify-content-between align-items-center'>
    <Step icon="bi bi-clipboard-check-fill" display="d-none d-xxl-none d-xl-block d-lg-block  d-md-none border-bottom" title="Register Your Account" caption="You need to create an account to find best preferred job."/>
    <Step icon="bi bi-wechat" display="d-none d-xxl-none d-xl-block d-lg-block d-md-none border-bottom" title="We Here to Help You" caption="You need to create an account to find best preferred job."/>
    <Step icon="bi bi-person-fill" display="d-none d-xxl-none d-xl-block d-lg-block d-md-none border-bottom" title="Complete Your Profile" caption="You need to create an account to find best preferred job."/>
    <Step icon="bi bi-mortarboard-fill" display="d-none d-xxl-none d-xl-block d-lg-block d-md-none border-none" title="Apply Job or Hire" caption="You need to create an account to find best preferred job."/>
    </Container>
    <Container fluid className='px-5'>
    <Row className="m-0 m-lg-5  m-md-0 bg-white gap-5 d-flex align-items-center py-4 rounded-3">
    <Col className="d-none d-lg-block d-md-block"> <Image src={banner3} alt="banner2" className="image w-100" /></Col>
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
    </Container>
    </>
   )
}
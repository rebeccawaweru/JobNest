import { Container,Row,Col,Button,Image } from "react-bootstrap"
import { avatar,banner1 } from "../../../assets/images"
import { Filter } from "../../../components"
export default function Introduction(){
    return (
    <Container fluid className='px-5'>
    <Row className="justify-content-center align-items-center pt-2">
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
    <div className="d-grid d-lg-flex d-md-flex align-items-center mt-4">
    <Image src={avatar} alt="avatars" className="avatar " />
    <div className='mx-2'>
    <p><span className='fs-2'>18K+ </span><br/><span className='text-muted mx-1'>Individual Freelancers</span></p>
    </div>
    </div>
    </Col>
    <Col className="font-sans d-lg-flex justify-content-end d-sm-none d-none">
    <Image src={banner1} alt="banner1" className="frontimage" />
    </Col>
    </Row>
    </Container>
    )
}
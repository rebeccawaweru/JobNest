import { Container, Row, Col } from "react-bootstrap";
import {HomeWrapper} from "../../wrapper";
import { Job } from "../../components";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
export default function JobDetails(){
    const {job} = useSelector((state:RootState)=> state.job)
    return (
        <HomeWrapper>
            <div className="job-bg  d-flex flex-column text-white text-center align-items-center justify-content-center">
    <h2>Marketing Manager</h2>
    <p>JobNest // Details // Sales & Marketing // Marketing Manager</p>
    </div>
        <Container fluid className="px-5 job-detail  ">
        <div className="details ">
         <Job/>
        </div>

        <div  className="bg-white px-4 py-4 d-flex flex-column gap-3">
         <Row className="d-flex border py-2">
            <Col className="text-primary fw-bold">About</Col>
            <Col>Education & Experience</Col>
            <Col>Responsibilities</Col>
         </Row>
     
         <div >
            <p className="topic">Job Description</p>
            <p className="text-secondary">It is a long established fact that is reader will be then distracted by the thing and readable content off page when looking at that page layout. It is a long fact that a readable content of page. It is a long established fact that is reader will be the then distracted by the thing and readable content then page when looking at our established fact that page layout.</p>
         </div>
         </div>

        </Container>
        </HomeWrapper>
    )
}

{/* <HomeWrapper bg="auth-bg-contact" title="Product Designer" caption="JobNest // Details // UI/UX Designer // Product Designer"> */}

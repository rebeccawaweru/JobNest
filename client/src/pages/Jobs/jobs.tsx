import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Job } from "../../components";
import {  HomeWrapper } from "../../wrapper";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { getJobs } from "../../reducers/jobSlice";
export default function Jobs(){
    const dispatch = useDispatch<AppDispatch>()
    const {jobs} = useSelector((state:RootState)=>state.job);
    useEffect(()=>{
      dispatch(getJobs(''))
    },[jobs])
    return (
    <HomeWrapper>
    <div className="job-bg d-flex flex-column text-white text-center align-items-center justify-content-center">
    <h2>Trending Jobs</h2>
    <p>JobNest // Latest Jobs</p>
    </div>
    <Container fluid className="p-5 bg-white">
    <Row>
    <Col sm={4}  xl={4}  xxl={2} className="d-flex job-filter text-muted py-5 flex-column bg-light gap-3  text-left   rounded-3 shadow-sm">
    <span className="topic">Categories</span>
    <Form.Check  label="Accounting"/>
    <Form.Check  label="Commercial"/>
    <Form.Check  label="IT & Technology"/>
    <Form.Check  label="Engineering"/>
    <Form.Check  label="Sales & Marketing"/>
    <Form.Check  label="Support Service"/>
    <Form.Check  label="Hotel & Catering"/>
    <span className="topic">Tags</span>
    <Form.Check label="C++"/>
    <Form.Check label="Creative"/>
    <Form.Check label="Designer"/>
    <Form.Check label="Developer"/>
    <Form.Check label="Full Time"/>
    <Form.Check label="Javascript"/>
    <Form.Check label="Remote"/>
    <span className="topic">Locations</span>
    <Form.Check label="Remote"/>
    <Form.Check label="Nairobi"/>
    <Form.Check label="Mombasa"/>
    <Form.Check label="Kisumu"/>
    <Form.Check label="Nyeri"/>
    <Form.Check label="Nakuru"/>
    <Form.Check label="Nanyuki"/>
    <Form.Check label="Machakos"/>
    <span className="topic">Job Type</span>
    <Form.Check label="Freelance"/>
    <Form.Check label="Full Time"/>
    <Form.Check label="Part Time"/>
    <Form.Check label="Hybrid"/>
    <Button>Search</Button>
    </Col>
    <Col sm={8} xl={8} xxl={10} className="d-block flex-wrap d-xxl-flex" >
    {(jobs && jobs.length > 0) ? jobs.map((job:any)=>{
        return <Job count={job.count} logo={job.logo} _id={job._id} company={job.company} title={job.title} location2={job.location} skills={job.skills} currency={job.currency} salary={job.salary} deadline={job.deadline}/>
    }): <p>No jobs posted</p>}

    {/* <Job _id="1" company="Marketing Inc" title="Marketing Manager" location2="Houston, Texas" skills={['C++', 'Designer', 'Developer']} currency="$" salary={1000} deadline=''/> */}
    </Col>
    </Row>
    </Container>
    </HomeWrapper>
    )
}
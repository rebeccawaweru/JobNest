import { Container, Button } from "react-bootstrap"
import { HomeWrapper } from "../../../wrapper"
import { PostJob } from "../..";
import { useState } from "react"
import { Browse, MyJobs } from "../../Employer";
import AuthContent from "../../../context/AuthContext";
export default function EmployerDashboard(){
    const [tab, setTab] = useState(1);
    const fullname = localStorage.getItem('fullname')
    return <HomeWrapper>
    <AuthContent>
    <div className="job-bg d-flex flex-column text-white text-center align-items-center justify-content-center">
    <h2>{fullname}</h2>
    <p>JobNest // Employer/Recruiter</p>
    </div>
    <Container className="px-5" fluid>
    <div className="mt-4 d-flex flex-wrap gap-5 border-1 border-bottom">
        <Button onClick={()=>setTab(1)} variant="outline-none fs-5"  className={tab === 1 ? "text-primary" : "topic"}><i className="bi bi-briefcase-fill"></i> Post A Job</Button>
        <Button onClick={()=>setTab(2)} variant="outline-none fs-5"  className={tab === 2 ? "text-primary" : "topic"}><i className="bi bi-archive-fill"></i> My Jobs</Button>
        <Button onClick={()=>setTab(3)} variant="outline-none fs-5"  className={tab === 3 ? "text-primary" : "topic"}><i className="bi bi-people-fill"></i> Browse Candidates</Button>
    </div>
    {tab === 1 ? <PostJob/> : tab === 2 ? <MyJobs/> : <Browse/>}
    </Container>
    </AuthContent>
    </HomeWrapper>
}
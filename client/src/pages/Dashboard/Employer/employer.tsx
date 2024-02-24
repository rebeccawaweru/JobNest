import { Container, Button } from "react-bootstrap"
import { HomeWrapper } from "../../../wrapper"
import { PostJob } from "../..";
import { useEffect, useState } from "react"
import { Browse, MyJobs } from "../../Employer";
import AuthContent from "../../../context/AuthContext";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store";
import { getJobs } from "../../../reducers/jobSlice";
import { getUsers } from "../../../reducers/userSlice";
import { Candidate } from "../../../components";
export default function EmployerDashboard(){
    const [open, setOpen] = useState(false)
    const [tab, setTab] = useState(1);
    const dispatch = useDispatch<AppDispatch>()
    const {job} = useSelector((state:RootState) => state.job)
    const {user} = useSelector((state:RootState) => state.user)
    const {users} = useSelector((state:RootState) => state.user)
    const candidates = job && job.applications && job.applications.length > 0 ? users.filter(function(user:any) {
        return job.applications.some(function(application:any) {
            return user._id === application.id;
        });
    }) : [];
    
    useEffect(()=>{
        dispatch(getJobs(''))
        dispatch(getUsers(''))
    },[tab])
    return <HomeWrapper>
    {open && 
            <div className="side bg-light px-4 py-2 align-items-start d-block">
                <i className="bi bi-x-lg" onClick={()=>setOpen(false)}></i>
    {candidates && candidates.length > 0 ? candidates.map((user:any)=>{
        return <div className="my-2"><Candidate _id={user._id} name={user.fullname} tagline={user.tagline} skills={user.skills}/></div>
    }) : <p>No candidates available</p>}
    </div>
    }
    <AuthContent>
    <div className="job-bg d-flex flex-column text-white text-center align-items-center justify-content-center">
    <h2>{user.fullname}</h2>
    <p>JobNest // Employer/Recruiter</p>
    </div>
    <Container className="px-5" fluid>
    <div className="mt-4 d-flex flex-wrap gap-5 border-1 border-bottom">
        <Button onClick={()=>setTab(1)} variant="outline-none fs-5"  className={tab === 1 ? "text-primary" : "topic"}><i className="bi bi-briefcase-fill"></i> Post A Job</Button>
        <Button onClick={()=>setTab(2)} variant="outline-none fs-5"  className={tab === 2 ? "text-primary" : "topic"}><i className="bi bi-archive-fill"></i> My Jobs</Button>
        <Button onClick={()=>setTab(3)} variant="outline-none fs-5"  className={tab === 3 ? "text-primary" : "topic"}><i className="bi bi-people-fill"></i> Browse Candidates</Button>
    </div>
    {tab === 1 ? <PostJob user={user} handleClick={()=>setTab(2)}/> : tab === 2 ? <MyJobs id={user._id} handleView={()=>setOpen(true)}/> : <Browse/>}
    </Container>
    </AuthContent>
    </HomeWrapper>
}
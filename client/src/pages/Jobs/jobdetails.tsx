import { Container, Row, Col } from "react-bootstrap";
import {HomeWrapper} from "../../wrapper";
import { Job, Candidate } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { getUsers } from "../../reducers/userSlice";
import { useState } from "react";
export default function JobDetails(){
    const {users} = useSelector((state:RootState)=>state.user)
    const [open, setOpen] = useState(false)
    const {job} = useSelector((state:RootState)=> state.job)
    const [tab, setTab] = useState('about')
    const candidates = users.filter(function(user:any) {
        return job.applications?.some(function(application:any) {
            return user._id === application.id;
        });
    });
    const dispatch = useDispatch<AppDispatch>()
    const handleView = () => {
      dispatch(getUsers('')).then(()=>{
        setOpen(true)
      })
    }
    return (
        <HomeWrapper>
            {open && candidates &&
            <div className="side bg-light px-4 py-2 align-items-start d-block">
                <i className="bi bi-x-lg" onClick={()=>setOpen(false)}></i>
    {candidates && candidates.length > 0 ? candidates.map((user:any)=>{
        return <div className="my-2"><Candidate _id={user._id} name={user.fullname} tagline={user.tagline} skills={user.skills}/></div>
    }) : <p>No candidates available</p>}
    </div>
    }
    <div className="job-bg  d-flex flex-column text-white text-center align-items-center justify-content-center">
    <h2>{job.title}</h2>
    <p>JobNest // Details // {job.category} // {job.company}</p>
    </div>
    <Container fluid className="px-5 job-detail  ">
        <div className="details ">
         <Job _id={job._id} count={job.applications && job.applications.length} logo={job.logo} company={job.company} title={job.title} location2={job.location} skills={job.skills} deadline={job.deadline} currency={job.currency} salary={job.salary} handleView={handleView}/>
        </div>

        <div  className="bg-white px-4 py-4 d-flex flex-column gap-3 cursor">
         <Row className="d-flex border py-2">
            <Col onClick={()=>setTab('about')} className={`${tab === 'about' ? 'text-primary fw-bold' : null}`}>About</Col>
            <Col  onClick={()=>setTab('education')} className={`${tab === 'education' ? 'text-primary fw-bold' : null}`}>Education & Experience</Col>
            <Col onClick={()=>setTab('responsibilities')} className={`${tab === 'responsibilities' ? 'text-primary fw-bold' : null}`}>Responsibilities</Col>
         </Row>
     
     {tab === 'about' &&
         <div>
            <p className="topic">Job Description</p>
            <p className="text-secondary">{job.about}</p>
            {/* It is a long established fact that is reader will be then distracted by the thing and readable content off page when looking at that page layout. It is a long fact that a readable content of page. It is a long established fact that is reader will be the then distracted by the thing and readable content then page when looking at our established fact that page layout. */}
         </div>
}
        {tab === 'education' && 
         <div>
            <p className="text-secondary">{job.education}</p>
         </div>
        }
         
        {tab === 'responsibilities' && 
         <div>
            <p className="text-secondary">{job.responsibilities}</p>
         </div>
}  
         </div>

        </Container>
        </HomeWrapper>
    )
}

{/* <HomeWrapper bg="auth-bg-contact" title="Product Designer" caption="JobNest // Details // UI/UX Designer // Product Designer"> */}

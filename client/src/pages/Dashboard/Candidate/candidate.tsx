import React, {useState,useEffect} from "react"
import { Row, Col, Button, Badge, Container } from "react-bootstrap"
import { MyJobs } from "../../Employer";
import AuthContent from "../../../context/AuthContext";
import {  useSelector, useDispatch} from "react-redux";
import {  AppDispatch, RootState } from "../../../store";
import { Link } from "react-router-dom";
import { getUser } from "../../../reducers/userSlice";
interface CandidateDashboardProps {
    formik: any;
    expertise: string[];
    handleClick: any;
    updated:boolean
}

const CandidateDashboard: React.FC<CandidateDashboardProps> = ({handleClick,updated }) => {    
  const [tab, setTab] = useState(1);
  const dispatch = useDispatch<AppDispatch>()
  const user = useSelector((state:RootState) => state.user)
  const id:any = localStorage.getItem('id')
  useEffect(()=>{
    dispatch(getUser(id));
  },[updated])
   return <AuthContent>
    <div className="job-bg d-flex flex-column text-white text-center align-items-center justify-content-center">
    <h2>{user.user.fullname}</h2>
    <p>JobNest // profile </p>
    </div>
    <Container fluid className="px-5 py-3">
      <Row className="mt-4 bg-white p-4">
        <div className="d-flex justify-content-start gap-5">
        <Button onClick={()=>setTab(1)} variant="outline-none fs-5"  className={tab === 1 ? "text-primary" : "topic"}><i className="bi bi-person-square"></i> My Profile</Button>
        <Button onClick={()=>setTab(2)} variant="outline-none fs-5"  className={tab === 2 ? "text-primary" : "topic"}><i className="bi bi-card-list"></i> My Applications</Button>
        </div>
        <hr></hr>
         {tab === 1 ? <>
        <Col sm={4} className=" bg-light rounded-1 p-3">
          <div className="d-flex mb-3 justify-content-center gap-4 align-items-center">
            <div className="bg-white shadow-sm profile rounded-circle"></div>
             <div className="d-grid">
             <span className="mt-2">{user.user.fullname}</span>
             <span className="text-muted fw-bold">{user.user.tagline}</span>
             <Button className="text-primary text-decoration-underline" variant="outline-none" onClick={handleClick}>Update Profile</Button>
             </div>
          </div>
          <div className="d-flex justify-content-between">
          <p className="text-muted">Email:</p>
          <p>{user.user.email}</p>
          </div>
          <hr></hr>
          <div className="d-flex justify-content-between">
          <p className="text-muted">Phone:</p>
          <p>{user.user.phone}</p>
          </div>
          <hr></hr>
          <div className="d-flex justify-content-between">
          <p className="text-muted">Address:</p>
          <p>{user.user.address}</p>
          </div>
          <hr></hr>
          <div className="d-flex justify-content-between">
          <p className="text-muted">Website:</p>
          <a href="">{user.user.website}</a>
          </div>
          <hr></hr>
          <div>
            <p>Skills</p>
            <div className="d-flex flex-wrap gap-2">
            {user.user.skills.length > 0 && user.user.skills?.map((e:any)=>{
                return <Badge key={e} bg="success">{e}</Badge>
              })}
            </div>
      
          </div>
          {/* <Button className="mt-2 rounded-pill button">Generate Resume</Button> */}
        </Col>
        <Col sm={8}>
        <div className="d-flex justify-content-end">
        <Link to="/resume" className="bg-success rounded-2 text-white p-2 text-decoration-none button">Generate CV</Link>
        {/* <Button href="/resume" variant="success" className="">Generate CV</Button> */}
        </div>
     
        <div>
            <h3 className="topic">About</h3>
            <p className="text-muted">
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut congue felis. Etiam ac felis at lorem accumsan iaculis at ut est. Phasellus auctor tortor et condimentum euismod.
            </p>
        </div>

        <div>
            <p className="topic">Education</p>
            <div className="d-flex gap-2">
                    <span className="item p-3 rounded-circle d-flex text-center align-items-center justify-content-center border border-primary">
                    01</span>
                    {user.user.education.length > 0 && user.user.education.map((e:any)=>{
                      return <div>
                      <div>{e.school}</div>
                      {/* <span>Software engineering</span> */}
                      <div>{e.level} {e.field} ({new Date(e.startdate).toLocaleDateString('en-US', { month: 'long', year:'numeric', day:"2-digit" })} - {new Date(e.endate).toLocaleDateString('en-US', { month: 'long', year:'numeric', day:"2-digit" })})</div>
                      <div>Grade: {e.grade}</div>
                      <div className="text-muted">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut congue felis. Etiam ac felis at lorem accumsan iaculis at ut est. Phasellus auctor tortor et condimentum euismod.</div>
                      </div>
                    })}
               
                    </div>
        </div>

        <div className="mt-3">
            <p className="topic">Experience</p>
            <div className="d-flex gap-2">
                    <span className="item p-3 rounded-circle d-flex text-center align-items-center justify-content-center border border-primary">
                    01</span>
                    {user.user.experience.length > 0 && user.user.experience.map((e:any)=>{
                          return    <div>
                          <div>{e.company} - {e.type}</div>
                          {/* <span>Software engineering</span> */}
                          <div>
                          {e.title} ({new Date(e.startdate).toLocaleDateString('en-US', { month: 'long', year:'numeric', day:"2-digit" })} - {new Date(e.endate).toLocaleDateString('en-US', { month: 'long', year:'numeric', day:"2-digit" })})
                           </div>

                          <div>{e.location}</div>
                          <div className="text-muted">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut congue felis. Etiam ac felis at lorem accumsan iaculis at ut est. Phasellus auctor tortor et condimentum euismod.</div>
                          </div>
                    })}
                 
             </div>
        </div>

        <div className="mt-3">
            <p className="topic">Certifications/Licenses</p>       
            <div className="d-flex gap-2">
                    <span className="item p-3 rounded-circle d-flex text-center align-items-center justify-content-center border border-primary">
                    01</span>
                    {user.user.certifications.length > 0 && user.user.certifications.map((e:any)=>{
                        return   <div>
                        <div>{e.certname}</div>
                        {/* <span>Software engineering</span> */}
                        <div>{e.org}</div>
                        <div>Credential ID: <span className="text-primary">{e.cid}</span></div>
                        <div className="text-muted">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut congue felis. Etiam ac felis at lorem accumsan iaculis at ut est. Phasellus auctor tortor et condimentum euismod.</div>
                        </div>
                    })}
                  
             </div>  
                   
        </div>
        </Col>
        </>: <MyJobs/>}

      </Row>
      </Container>
    </AuthContent>
}
export default CandidateDashboard
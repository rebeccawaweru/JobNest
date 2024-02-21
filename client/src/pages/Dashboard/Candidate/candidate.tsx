import React, {useState} from "react"
import { Row, Col, Button, Badge, Container } from "react-bootstrap"
import { MyJobs } from "../../Employer";
interface CandidateDashboardProps {
    formik: any;
    expertise: string[];
    handleClick: any;
}

const CandidateDashboard: React.FC<CandidateDashboardProps> = ({ formik, expertise, handleClick }) => {    
  const [tab, setTab] = useState(1);
   return <div>
    <div className="job-bg d-flex flex-column text-white text-center align-items-center justify-content-center">
    <h2>{formik.values.fullname}</h2>
    <p>JobNest // profile</p>
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
             <span className="mt-2">{formik.values.fullname}</span>
             <a href="" onClick={handleClick}>Update Profile</a>
             </div>
          </div>
          <div className="d-flex justify-content-between">
          <p className="text-muted">Email:</p>
          <p>{formik.values.email}</p>
          </div>
          <hr></hr>
          <div className="d-flex justify-content-between">
          <p className="text-muted">Phone:</p>
          <p>{formik.values.phone}</p>
          </div>
          <hr></hr>
          <div className="d-flex justify-content-between">
          <p className="text-muted">Address:</p>
          <p>{formik.values.address}</p>
          </div>
          <hr></hr>
          <div className="d-flex justify-content-between">
          <p className="text-muted">Website:</p>
          <a href="">{formik.values.website}</a>
          </div>
          <hr></hr>
          <div>
            <p>Skills</p>
            <div className="d-flex flex-wrap gap-2">
            {expertise.length > 0 && expertise?.map((e)=>{
                return <Badge key={e} bg="success">{e}</Badge>
              })}
            </div>
      
          </div>
          {/* <Button className="mt-2 rounded-pill button">Generate Resume</Button> */}
        </Col>
        <Col sm={8}>
        <div className="d-flex justify-content-end">
        <Button href="/resume" variant="success" className="">Generate CV</Button>
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

                    <div>
                    <div>{formik.values.school}</div>
                    {/* <span>Software engineering</span> */}
                    <div>{formik.values.level} {formik.values.field} ({formik.values.startdate}-{formik.values.endate})</div>
                    <div>Grade: {formik.values.grade}</div>
                    <div className="text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut congue felis. Etiam ac felis at lorem accumsan iaculis at ut est. Phasellus auctor tortor et condimentum euismod.</div>
                    </div>
                    </div>
        </div>

        <div className="mt-3">
            <p className="topic">Experience</p>
            <div className="d-flex gap-2">
                    <span className="item p-3 rounded-circle d-flex text-center align-items-center justify-content-center border border-primary">
                    01</span>

                    <div>
                    <div>{formik.values.company} - {formik.values.type}</div>
                    {/* <span>Software engineering</span> */}
                    <div>{formik.values.title} ({formik.values.startdate2}-{formik.values.endate2})</div>
                    <div>{formik.values.location}</div>
                    <div className="text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut congue felis. Etiam ac felis at lorem accumsan iaculis at ut est. Phasellus auctor tortor et condimentum euismod.</div>
                    </div>
             </div>
        </div>

        <div className="mt-3">
            <p className="topic">Certifications/Licenses</p>       
            <div className="d-flex gap-2">
                    <span className="item p-3 rounded-circle d-flex text-center align-items-center justify-content-center border border-primary">
                    01</span>

                    <div>
                    <div>{formik.values.certname}</div>
                    {/* <span>Software engineering</span> */}
                    <div>{formik.values.org}</div>
                    <div>Credential ID: <span className="text-primary">{formik.values.cid}</span></div>
                    <div className="text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut congue felis. Etiam ac felis at lorem accumsan iaculis at ut est. Phasellus auctor tortor et condimentum euismod.</div>
                    </div>
             </div>  
                   
        </div>
        </Col>
        </>: <MyJobs/>}

      </Row>
      </Container>
    </div>
}
export default CandidateDashboard
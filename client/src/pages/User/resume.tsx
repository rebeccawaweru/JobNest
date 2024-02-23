import { HomeWrapper } from "../../wrapper";
import { Button, Container } from "react-bootstrap";
import { useReactToPrint } from 'react-to-print';
import { createRef } from "react";
import { generatePDF } from "../../utils/helpers";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
export default function Resume(){
    const user = useSelector((state:RootState)=>state.user)
    const printRef = createRef<HTMLDivElement>()
    const handlePrint = useReactToPrint({
        bodyClass:"print-agreement",
        content: () => printRef.current,
      });

    return <HomeWrapper>
    <div className="job-bg d-flex flex-column text-white text-center align-items-center justify-content-center">
    <h2>Resume</h2>
    <p>JobNest // profile</p>
    </div>
    <Container fluid className="px-5">

        <div className="d-flex justify-content-end my-2 gap-2">
        <Button onClick={()=>generatePDF()} variant="dark" className="rounded-pill button"><i className="bi bi-download"></i> Download pdf</Button>
        <Button onClick={()=>handlePrint()} className="rounded-pill button"><i className="bi bi-printer-fill"></i> Print Doc</Button>
        </div>
        <Container id="pdf-content" className="border border-1 rounded-3 p-4 d-grid gap-3">
        <div ref={printRef}>
        <div className="text-center d-grid">
        <span>{user.user.fullname}</span>
        <span>{user.user.phone} |<span>{user.user.email}</span> | <a href="">{user.user.website}</a></span>
        <a href="">www.linkedin.com</a>
        </div>
        <div>
            <p className="topic">SUMMARY</p>
            <hr/>
            <p className="text-muted">
            {user.user.about}
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut congue felis. Etiam ac felis at lorem accumsan iaculis at ut est. Phasellus auctor tortor et condimentum euismod.
            </p>
        </div>
        <div>
        <p className="topic">Education</p>
        <hr/>

        {user.user.education.length > 0 && user.user.education.map((e:any)=>{
            return <>
        <div className="d-flex justify-content-between">
        <p>{e.level} {e.field} at {e.school}</p>
        <p>{new Date(e.startdate).toLocaleDateString('en-US', { month: 'long', year:'numeric', day:"2-digit" })} - {new Date(e.endate).toLocaleDateString('en-US', { month: 'long', year:'numeric', day:"2-digit" })}</p>
        </div>
        <p className="text-muted">
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut congue felis. Etiam ac felis at lorem accumsan iaculis at ut est. Phasellus auctor tortor et condimentum euismod.
        </p>
        </>
        })}
   

        </div>

        <div className="mt-2">
        <p className="topic">Experience</p>
        <hr/>
        {user.user.experience.length > 0 && user.user.experience.map((e:any)=>{
            return <> <div className="d-flex justify-content-between">
        <p>{e.title} at {e.company}</p>
        <p>{new Date(e.startdate).toLocaleDateString('en-US', { month: 'long', year:'numeric', day:"2-digit" })} - {new Date(e.endate).toLocaleDateString('en-US', { month: 'long', year:'numeric', day:"2-digit" })}</p>
        </div>
        <p className="text-muted">
          {e.description}   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut congue felis. Etiam ac felis at lorem accumsan iaculis at ut est. Phasellus auctor tortor et condimentum euismod.
        </p>
            </>
        })}
    
        </div>

        <div className="mt-2">
        <p className="topic">Skills</p>
        <hr/> 
        <div className="d-flex flex-wrap justify-content-between w-50">
        {user.user.skills.length > 0 && user.user.skills.map((e:any)=>{
            return <span key={e}><i className="bi bi-dot"></i>{e}</span>
        })} 
        </div>
        </div>

        <div className="mt-3">
        <p className="topic">Certifications/Accomplishments</p>
        <hr/>
        {user.user.certifications.length > 0 && user.user.certifications.map((e:any)=>{
        return <>
        <div className="d-flex justify-content-between">
        <p>{e.org} {e.certname}</p>
        <p>Feb 2024</p>
        </div>
        <p className="text-muted">
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut congue felis. Etiam ac felis at lorem accumsan iaculis at ut est. Phasellus auctor tortor et condimentum euismod.
        </p>
        </>
        })}
     
        </div>
        </div>
        </Container>
    </Container>
    </HomeWrapper>
}
import { HomeWrapper } from "../../wrapper";
import { Button, Container } from "react-bootstrap";
import { useReactToPrint } from 'react-to-print';
import { createRef } from "react";
import { generatePDF } from "../../utils/helpers";
export default function Resume(){
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
        <span>Rebecca Waweru</span>
        <span>0702742458 |<span>wawerur95@gmail.com</span> | <a href="">https://beccatech.tech</a></span>
        <a href="">www.linkedin.com</a>
        </div>
        <div>
            <p className="topic">SUMMARY</p>
            <hr/>
            <p className="text-muted">
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut congue felis. Etiam ac felis at lorem accumsan iaculis at ut est. Phasellus auctor tortor et condimentum euismod.
            </p>
        </div>
        <div>
        <p className="topic">Education</p>
        <hr/>
        <div className="d-flex justify-content-between">
        <p>Bsc Computer Science at University of Nairobi</p>
        <p>Feb 2023 - Feb 2024</p>
        </div>
        <p className="text-muted">
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut congue felis. Etiam ac felis at lorem accumsan iaculis at ut est. Phasellus auctor tortor et condimentum euismod.
        </p>
        </div>

        <div className="mt-2">
        <p className="topic">Experience</p>
        <hr/>
        <div className="d-flex justify-content-between">
        <p>Software Developer at Google</p>
        <p>Jan 2022 - Jan 2023</p>
        </div>
        <p className="text-muted">
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut congue felis. Etiam ac felis at lorem accumsan iaculis at ut est. Phasellus auctor tortor et condimentum euismod.
        </p>
        </div>

        <div className="mt-2">
        <p className="topic">Skills</p>
        <hr/> 
        <div className="d-flex flex-wrap justify-content-between w-50">
        <span><i className="bi bi-dot"></i>React</span>
        <span><i className="bi bi-dot"></i>NodeJs</span>
        <span><i className="bi bi-dot"></i>ExpressJs</span>
        <span><i className="bi bi-dot"></i>Mongodb</span>
        </div>
        </div>

        <div className="mt-3">
        <p className="topic">Certifications/Accomplishments</p>
        <hr/>
        <div className="d-flex justify-content-between">
        <p>AWS Cloud Solution Architect</p>
        <p>Feb 2024</p>
        </div>
        <p className="text-muted">
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut congue felis. Etiam ac felis at lorem accumsan iaculis at ut est. Phasellus auctor tortor et condimentum euismod.
        </p>
        </div>
        </div>
        </Container>
    </Container>
    </HomeWrapper>
}
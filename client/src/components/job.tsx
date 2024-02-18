import { job1} from "../assets/images";
import { Button, Image, Stack } from "react-bootstrap";
import { Rating } from ".";
export default function Job(){
    return(
        <div className="border border-light bg-white shadow-sm p-3 jobwrap mb-3">
        <div className="d-grid d-lg-flex d-md-flex justify-content-between mt-3">
        <div className="d-flex gap-3">
         <Image src={job1} alt="job-logo" className="logo"/>
         <div className="d-grid gap-2">
         <span className="text-primary">Marketing Inc</span>
         <span className="topic fs-4">Marketing Manager</span>
         <span><i className="bi bi-geo-alt-fill text-muted"></i> Berlin, Houston</span>
         </div>
         </div>
         <Stack direction="horizontal" gap={3}>
         <Button href="/jobs/details" className="rounded-pill px-4 button">Open</Button>
         <Button href="/apply" variant="success" className="rounded-pill px-4 button">Apply</Button>
        
        </Stack>
        
         </div>
         <hr></hr>
         <div className="d-grid d-lg-flex d-md-flex justify-content-between">
         <Stack direction="horizontal" gap={2}>
            <div className="bg-light text-secondary p-2">C++</div>
            <div className="bg-light text-secondary p-2">Creative</div>
            <div className="bg-light text-secondary p-2">Designer</div>
         </Stack>
         <Rating/>
         </div>
  
         <hr></hr>
         <div className="d-flex justify-content-between">
            <p>KES 15000-20000</p>
            <p className="text-muted">Deadline: <span className="topic">22nd Jan, 2024</span></p>
         </div>
        </div>  
    )
}
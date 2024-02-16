import { job1} from "../assets/images";
import { Image, Stack } from "react-bootstrap";
export default function Job(){
    return(
        <div className="border border-light shadow-sm p-3 w-50 mb-3">
        <div className="d-flex gap-3 mt-3">
         <Image src={job1} alt="job-logo" className="logo"/>
         <div className="d-grid gap-2">
         <span className="text-primary">Marketing Inc</span>
         <span className="topic fs-4">Marketing Manager</span>
         <span><i className="bi bi-geo-alt-fill text-muted"></i> Berlin, Houston</span>
         </div>
         </div>
         <hr></hr>
         <Stack direction="horizontal" gap={2}>
            <div className="bg-light text-secondary p-2">C++</div>
            <div className="bg-light text-secondary p-2">Creative</div>
            <div className="bg-light text-secondary p-2">Designer</div>
         </Stack>
         <hr></hr>
         <div className="d-flex justify-content-between">
            <p>KES 15000-20000</p>
            <p className="text-muted">Deadline<span className="topic">22nd Jan, 2024</span></p>
         </div>
        </div>  
    )
}
import { Image, Stack, Button } from "react-bootstrap"
import { banner2 } from "../../../assets/images"
export default function About(){
    return (
    <div className='bg-white d-flex  pt-5 px-5 mt-5 gap-5 align-items-center justify-content-center  '>
    <Image src={banner2} alt="banner2" className="h-75 w-75 mb-5 d-none d-lg-block d-md-none" />
    <div className="d-block w-100 gap-4">
    <p className='text-primary'>MORE ABOUT OUR COMPANY</p>
    <h2 className='topic'>World's of talent at your fingertips</h2>
    <p className='text-muted'>Synergistically visualize alternative content before cross functional core Rapidiously administra standardized value via focused benefits. Rapidly redefine highly efficient niche markets with plug-and-play materials professionally</p>
    <Stack direction="horizontal" className="d-grid d-lg-flex d-md-flex" gap={2}>
    <div className='d-flex'>
    <div className='fs-4'><i className="bi bi-check-circle-fill text-primary"></i></div>    
    <div className='d-block mx-2'>
    <p className='fs-5 topic'>Perfect Search Lists<br/>
    <span className='text-muted fs-6'>Seamlessly envisioneer tactical <br/>data through services.</span></p>
    </div>
    </div>
    <div className='d-flex'>
    <div className='fs-4'><i className="bi bi-check-circle-fill text-primary"></i></div>    
    <div className='d-block mx-2'>
    <p className='fs-5 topic'>Experts Employees<br/>
    <span className='text-muted fs-6'>Seamlessly envisioneer tactical <br/>data through services.</span></p>
    </div>
    </div>
    </Stack>
    <div className='d-flex justify-content-start mb-4 w-100 w-lg-50 w-md-50 gap-4'>
    <Button variant="primary" className="rounded-pill button p-2">Click here <i className="bi bi-chevron-double-right text-bold "></i></Button>
    <Button variant="outline-primary" className="rounded-pill button p-2">Click here<i className="bi bi-chevron-double-right text-bold "></i></Button>
    </div>
    </div>
    </div>   
    )
}